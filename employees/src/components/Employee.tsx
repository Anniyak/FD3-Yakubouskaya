import React, { useState } from 'react';
import './Employee.css';
import { EMPLOYEES, FEMALE, MALE } from '../scripts/constants.ts';
import { EmployeeType } from '../scripts/types.ts';

export const Employee = (props) => {
    const curr: EmployeeType = props.employeeId > 0 ? props.getDataById(EMPLOYEES, props.employeeId) : { id: props.employeeId };
    const [name, setName] = useState(curr.name);
    const [surname, setSurname] = useState(curr.surname);
    const [patronymic, setPatronymic] = useState(curr.patronymic);
    const [gender, setGender] = useState(curr.gender);    
    const [position, setPosition] = useState(curr.position);
    const [isBoss, setIsBoss] = useState(curr.isBoss);
    const [department, setDepartament] = useState(curr.department);
    const [skype, setSkype] = useState(curr.skype);
    const [email, setEmail] = useState(curr.email);
    const [telephone, setTelephone] = useState(curr.telephone);
    const [note, setNote] = useState(curr.note);
   
    const [birthday, setBirthday] = useState(curr.birthday?curr.birthday.toString():'');
    const [employmentDate, setEmploymentDate] = useState(curr.employmentDate?curr.employmentDate.toString():'');
    const [dismissalDate, setDismissalDate] = useState(curr.dismissalDate?curr.dismissalDate.toString():'');
    return (
        <div className='employeeBlock'>
            <div className='mainInfo'>
                <div className='photo'>1</div>
                <div className='firstMainInfo'>
                    <div>Фамилия</div>
                    <input type='text' value={surname} onChange={(eo) => setSurname(eo.target.value)} />
                    <div>Отчество</div>
                    <input type='text' value={patronymic} onChange={(eo) => setPatronymic(eo.target.value)} />
                    <div>Дата рождения</div>
                    <input type='date' value={birthday} onChange={(eo) => setBirthday(eo.target.value)}/>
                </div>
                <div className='secondMainInfo'>
                    <div>Имя</div>
                    <input type='text' value={name} onChange={(eo) => setName(eo.target.value)} />
                    <div>Пол</div>
                    <select value={gender} onChange={(eo) => setGender(eo.target.value)} >
                        <option value="" disabled>Пол</option>
                        <option value={FEMALE}>Жен</option>
                        <option value={MALE}>Муж</option>
                    </select>

                </div>
            </div>
            <div className='overInfo'>
                <div className='firstOverInfo'>
                    <div>&nbsp;</div>
                    <input type='file' />
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-skype" viewBox="0 0 16 16">
                            <path d="M4.671 0c.88 0 1.733.247 2.468.702a7.42 7.42 0 0 1 6.02 2.118 7.37 7.37 0 0 1 2.167 5.215q0 .517-.072 1.026a4.66 4.66 0 0 1 .6 2.281 4.64 4.64 0 0 1-1.37 3.294A4.67 4.67 0 0 1 11.18 16c-.84 0-1.658-.226-2.37-.644a7.42 7.42 0 0 1-6.114-2.107A7.37 7.37 0 0 1 .529 8.035q0-.545.08-1.081a4.644 4.644 0 0 1 .76-5.59A4.68 4.68 0 0 1 4.67 0zm.447 7.01c.18.309.43.572.729.769a7 7 0 0 0 1.257.653q.737.308 1.145.523c.229.112.437.264.615.448.135.142.21.331.21.528a.87.87 0 0 1-.335.723c-.291.196-.64.289-.99.264a2.6 2.6 0 0 1-1.048-.206 11 11 0 0 1-.532-.253 1.3 1.3 0 0 0-.587-.15.72.72 0 0 0-.501.176.63.63 0 0 0-.195.491.8.8 0 0 0 .148.482 1.2 1.2 0 0 0 .456.354 5.1 5.1 0 0 0 2.212.419 4.6 4.6 0 0 0 1.624-.265 2.3 2.3 0 0 0 1.08-.801c.267-.39.402-.855.386-1.327a2.1 2.1 0 0 0-.279-1.101 2.5 2.5 0 0 0-.772-.792A7 7 0 0 0 8.486 7.3a1 1 0 0 0-.145-.058 18 18 0 0 1-1.013-.447 1.8 1.8 0 0 1-.54-.387.73.73 0 0 1-.2-.508.8.8 0 0 1 .385-.723 1.76 1.76 0 0 1 .968-.247c.26-.003.52.03.772.096q.412.119.802.293c.105.049.22.075.336.076a.6.6 0 0 0 .453-.19.7.7 0 0 0 .18-.496.72.72 0 0 0-.17-.476 1.4 1.4 0 0 0-.556-.354 3.7 3.7 0 0 0-.708-.183 6 6 0 0 0-1.022-.078 4.5 4.5 0 0 0-1.536.258 2.7 2.7 0 0 0-1.174.784 1.9 1.9 0 0 0-.45 1.287c-.01.37.076.736.25 1.063" />
                        </svg>
                        <input className='inputAndIcon' type='text' value={skype} onChange={(eo) => setSkype(eo.target.value)} /></div>

                    <div>✉<input className='inputAndIcon' type='email' value={email} onChange={(eo) => setEmail(eo.target.value)} /></div>

                    <div>☏<input className='inputAndIcon' type='tel' value={telephone} onChange={(eo) => setTelephone(eo.target.value)} /></div>

                </div>
                <div className='secondOverInfo'>
                    <div>Должность</div>
                    <input type='text' value={position} onChange={(eo) => setPosition(eo.target.value)} />
                    <div>Руководитель <input type='checkbox' /></div>
                    <div>Отдел</div>
                    <input type='text' />
                    <div>Дата принятия</div>
                    <input type='date' value={employmentDate} onChange={(eo) => setEmploymentDate(eo.target.value)}/>
                </div>
                <div className='thirdOverInfo'>
                    <div>Проект</div>
                    <div className='projectsList'>область проектов</div>

                    <div>Дата увольнения</div>
                    <input type='date' value={dismissalDate} onChange={(eo) => setDismissalDate(eo.target.value)}/>
                </div>
            </div>
            <div className='noteInfo'>
                <div>Примечание</div>
                <textarea className='noteArea' value={note} onChange={(eo) => setNote(eo.target.value)} />
            </div>
            {curr.name}
            <br />
            <a href="mailto:mail@htmlacademy.ru%2C%20anniyak@gmail.com?cc=anniyak@tut.by&body=привет&subject=вопрос">Напишите нам</a></div>

    );

}