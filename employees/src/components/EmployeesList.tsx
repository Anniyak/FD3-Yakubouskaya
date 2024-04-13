import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { EmployeeType, DepartmentType } from '../scripts/types.ts'
import { DEPARTMENTS, PROJECTS, MALE, FEMALE, EMPLOYEES } from '../scripts/constants.ts';
import { Welcome } from './Welcome.tsx'
import './EmployeesList.css'

export const EmpoyeesList = (props) => {
    const [checked, setChecked] = useState([] as number[]);
    const [welcomeShow, setWelcomeShow] = useState(false);
    const [employees, setEmployees] = useState(props.data);
    const [currentEmployeeId, setCurrentEmployeeId] = useState(props.employeeId);
    const [genderFilter, setGenderFilter] = useState('');
    const [fioFilter, setFioFilter] = useState('');
    const [positionFilter, setPositionFilter] = useState('');
    const [bossFilter, setBossFilter] = useState(false);
    const [sort, setSort] = useState(false);
    let morferList: Promise<any>[] = [];
    useEffect(() => {
        let filteredEmployeers = genderFilter != '' ? props.data.filter(emp => emp.gender == genderFilter) : [...props.data];
        if (bossFilter) filteredEmployeers = filteredEmployeers.filter(emp => emp.isBoss == 1);
        if (fioFilter != '') filteredEmployeers = filteredEmployeers.filter(emp => {
            const FIO = emp.surname + ' ' + emp.name + ' ' + emp.patronymic;
            return (FIO.toUpperCase().includes(fioFilter.toUpperCase()))
        });
        if (positionFilter != '') filteredEmployeers = filteredEmployeers.filter(emp => emp.position.toUpperCase().includes(positionFilter.toUpperCase()));
        if (sort) filteredEmployeers = filteredEmployeers.sort((a, b) => {
            const fioA = [a.surname, a.name, a.patronymic].join(' ');
            const fioB = [b.surname, b.name, b.patronymic].join(' ');
            if (fioA > fioB) return 1;
            if (fioA < fioB) return -1;
            return 0;

        });

        setEmployees(filteredEmployeers);

    }, [props.data, genderFilter, fioFilter, positionFilter, bossFilter, sort])


    const changeChecked = (eo) => {
        if (eo.target.checked) {
            setChecked([...checked, +eo.target.dataset.id]);
        }
        else {
            let newArr: number[] = [];
            checked.forEach(ch => { if (ch !== +eo.target.dataset.id) newArr.push(+ch); });
            setChecked(newArr);
            if (newArr.length == 0) setWelcomeShow(false);
        }
    }
    const onClose = () => {
        setWelcomeShow(false);
    }
    const makeWelcom = async () => {
        if (checked.length < 1) alert('Требуется выбрать хотя бы одну запись')
        else {
            setWelcomeShow(true);
        }

    }
    const genderChange = (eo) => {
        setGenderFilter(eo.target.value);
    }

    const clearFilter = () => {
        setGenderFilter('');
        setFioFilter('');
        setPositionFilter('');
        setBossFilter(false);
        setSort(false);
    }
    const deleteEmployee = (eo, id) => {

        employees.find(empl => +empl.id == id).deleted = true;
        setTimeout(() => {
            props.deleteData(EMPLOYEES, id);
        }, 500)



    }
    const getEmplTemplate = () => {
        return employees.map((empl: EmployeeType, ind) => {
            const department: DepartmentType = props.getDataById(DEPARTMENTS, empl.department);
            const projects = empl.project && empl.project.length ? empl.project.map(pr => props.getDataById(PROJECTS, pr).name).join(', ') : "";
            return <tr key={empl.id} className={['emplRow', (checked.includes(+empl.id) ? 'checked' : ''), (currentEmployeeId == +empl.id ? 'selected' : ''), (empl.deleted ? 'deleted' : '')].join(' ')} onClick={() => setCurrentEmployeeId(+empl.id)}>
                <td><input type='checkbox' checked={checked.includes(+empl.id)} onChange={changeChecked} data-id={+empl.id} /></td>
                <td>{ind + 1}</td>
                <td>{empl.surname + ' ' + empl.name + ' ' + empl.patronymic}</td>
                <td>{empl.position}</td>
                <td>{projects}</td>
                <td>{empl.isBoss ? 'Руководитель' : ''}</td>
                <td>{department.name}</td>
                <td>{empl.email}</td>
                <td>{empl.telephone}</td>
                <td>
                    <div className='itemButtons'>
                        <input type='button' value='✘' onClick={(eo) => deleteEmployee(eo, +empl.id)} title='Удалить' />
                        <NavLink to={"/emloyee/" + empl.id} className='btn' title='Открыть'>👀</NavLink>
                    </div>
                </td>
            </tr>;
        })
    }
    const checkedItems = props.data.filter(em => checked.includes(+em.id));
    return (
        <div className='employeesPage'>
            <div>

                <NavLink to="/emloyee/-1" className='btn'>Добавить сотрудника</NavLink>
                <div className='controlPanel'>
                    <div className='filterControls'>
                        <input type='checkbox' checked={sort} onChange={(eo) => setSort(eo.target.checked)} />
                        <label>Сортировать по ФИО</label>
                        <input type='text' value={fioFilter} onChange={(eo) => setFioFilter(eo.target.value)} placeholder='ФИО' />
                        <select value={genderFilter} onChange={genderChange} >
                            <option value="" disabled>Пол</option>
                            <option value={FEMALE}>Жен</option>
                            <option value={MALE}>Муж</option>
                        </select>
                        {/* <Select  options={maleSelect} onChange={genderChange} className='maleSelect' placeholder='Пол'/> */}
                        <input type='text' value={positionFilter} onChange={(eo) => setPositionFilter(eo.target.value)} placeholder='Должность' />
                        <input type='checkbox' checked={bossFilter} onChange={(eo) => setBossFilter(eo.target.checked)} />
                        <label>Руководитель</label>
                        <input type='button' value='Очистить фильтр' onClick={clearFilter} />
                    </div>
                    {welcomeShow ? <Welcome onClose={onClose} checkedItems={checkedItems} morferList={morferList} /> : <input type='button' value='Сформировать приветствие' onClick={makeWelcom} />}
                </div>
                <table className='EmployeesTable'>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>№</th>
                            <th>Фамилия Имя Отчество</th>
                            <th>Должность</th>
                            <th>Проекты</th>
                            <th>Статус</th>
                            <th>Отдел</th>
                            <th>Почта</th>
                            <th>Телефон</th>
                            <th></th>
                        </tr>

                        {getEmplTemplate()}
                    </tbody>
                </table></div>

        </div>
    );
}