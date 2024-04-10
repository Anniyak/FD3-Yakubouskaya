import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import { EmployeeType, DepartmentType } from '../scripts/types.ts'
import { DEPARTMENTS, PROJECTS, MALE, FEMALE, EMPLOYEES } from '../scripts/constants.ts';
import { Welcome } from './Welcome.tsx'
import { Employee } from './Employee.tsx';
import './EmployeesList.css'

export const EmpoyeesList = (props) => {
    const [checked, setChecked] = useState([0]);//0 чтоб ts правильно определил тип данных
    const [welcomeShow, setWelcomeShow] = useState(false);
    const [employees, setEmployees] = useState(props.data);
    const [currentEmployeeId, setCurrentEmployeeId]=useState(props.employeeId);
    const [genderFilter, setGenderFilter] = useState('');
    const [fioFilter, setFioFilter] = useState('');
    const [positionFilter, setPositionFilter] = useState('');
    const [bossFilter, setBossFilter] = useState(false);
    useEffect(() => {
        let filteredEmployeers = genderFilter != '' ? props.data.filter(emp => emp.gender == genderFilter) : [...props.data];
        if (bossFilter) filteredEmployeers = filteredEmployeers.filter(emp => emp.isBoss == 1);
        if (fioFilter != '') filteredEmployeers = filteredEmployeers.filter(emp => {
            const FIO = emp.surname + ' ' + emp.name + ' ' + emp.patronymic;
            return (FIO.toUpperCase().includes(fioFilter.toUpperCase()))
        });
        if (positionFilter != '') filteredEmployeers = filteredEmployeers.filter(emp => emp.position.toUpperCase().includes(positionFilter.toUpperCase()));

        setEmployees(filteredEmployeers);

    }, [props.data,genderFilter, fioFilter, positionFilter, bossFilter])

    const maleSelect = [
        { value: '', label: '' },
        { value: FEMALE, label: 'Жен' },
        { value: MALE, label: 'Муж' }
    ]

    const changeChecked = (eo) => {
        if (eo.target.checked) {
            setChecked([...checked, +eo.target.dataset.id]);
        }
        else {
            let newArr: number[] = [];
            checked.forEach(ch => { if (ch !== +eo.target.dataset.id) newArr.push(+ch); });
            setChecked(newArr);
            if(newArr.length==1) setWelcomeShow(false);
        }
    }
    const onClose = () => {
        setWelcomeShow(false);
    }
    const makeWelcom = () => {
        if (checked.length < 2) alert('Требуется выбрать хотя бы одну запись')
        else
            setWelcomeShow(true);
    }
    const genderChange = (eo) => {
        setGenderFilter(eo.target.value);
    }

    const clearFilter = () => {
        setGenderFilter('');
        setFioFilter('');
        setPositionFilter('');
        setBossFilter(false);
    }
    const deleteEmployee = (eo,id) => {

        employees.find(empl=>+empl.id==id).deleted=true;
       // eo.target.parentElement.parentElement.classList.add("deleted");
        setTimeout(()=>{
             props.deleteData(EMPLOYEES,id);
        },500)


    
    }
    const editEmployee=(id)=>{
        window.location.assign('../emloyee/'+id);
    }

    const getEmplTemplate = () => {


        return employees.map((empl: EmployeeType) => {
            const department: DepartmentType = props.getDataById(DEPARTMENTS, empl.department);
            const projects = empl.project && empl.project.length ? empl.project.map(pr => props.getDataById(PROJECTS, pr).name).join(', ') : "";
            return <tr key={empl.id} className={['emplRow',(checked.includes(+empl.id)?'checked':''),(currentEmployeeId==+empl.id?'selected':''),(empl.deleted?'deleted':'')].join(' ')} onClick={()=>setCurrentEmployeeId(+empl.id)}>
                <td><input type='checkbox' checked={checked.includes(+empl.id)} onChange={changeChecked} data-id={+empl.id} /></td>
                <td>{empl.surname + ' ' + empl.name + ' ' + empl.patronymic}</td>
                <td>{empl.position}</td>
                <td>{projects}</td>
                <td>{empl.isBoss ? 'Руководитель' : ''}</td>
                <td>{department.name}</td>
                <td>{empl.email}</td>
                <td>{empl.telephone}</td>
                <td>
                <input type='button' value='Удалить' onClick={(eo)=>deleteEmployee(eo,+empl.id)} />
                <input type='button' value='Редактировать' onClick={()=>{editEmployee(+empl.id)}} />
                    </td>
            </tr>;
        })
    }
    const checkedItems = props.data.filter(em => checked.includes(+em.id));
    return (
        <div className='employeesPage'>
            <div>            <div className='filterControls'>
                <input type='text' value={fioFilter} onChange={(eo) => setFioFilter(eo.target.value)} placeholder='ФИО' />
                <select value={genderFilter} onChange={genderChange} >
                    <option value="" disabled>Пол</option>
                    <option value={FEMALE}>Жен</option>
                    <option value={MALE}>Муж</option>
                </select>
                {/* <Select  options={maleSelect} onChange={genderChange} className='maleSelect' placeholder='Пол'/> */}
                <input type='text' value={positionFilter} onChange={(eo) => setPositionFilter(eo.target.value)} placeholder='Должность' />
                <input type='checkbox' checked={bossFilter} onChange={(eo) => setBossFilter(eo.target.checked)} placeholder='Должность' />
                <label>Руководитель</label>
                <input type='button' value='Очистить фильтр' onClick={clearFilter} />
            </div>
            <table className='EmployeesTable'>
                <tbody>
                    <tr>
                        <th></th>
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

            {/* {welcomeShow ? <Welcome onClose={onClose} checkedItems={checkedItems} /> : <input type='button' value='Сформировать приветствие' onClick={makeWelcom} />} */}

        </div>
    );
}