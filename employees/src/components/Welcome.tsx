import React from 'react';
import { Months } from '../scripts/calendarHelper.ts';
import './Welcome.css'


export const Welcome = () => {
    return (
        <div className='welcomeBlock'>
            <div className='picturesBlock'>
                <img src='/image005.png' alt='logo' className='welcomeLogo' />
                <img src='/welcome.png' alt='welcome' className='welcomeImg' />
            </div>
            <div className='welcomText'>Добро пожаловать в команду!</div>
            <div className='welcomItems'>
                <div className='welcomItem'>
                    
                    <div className='itemPhoto'>
                        <img src='/emplPhoto.jpg' alt='Синьков'></img>
                    </div>
                    <div className='itemText'>
                        С 10 {Months[5]} к нашей команде присоединился системный программист <span className='employeeName'>Евгений Синьков</span>.<br />
                        Евгений работает в команде с Артёмом Масько.<br />
                        От лица компании желаем Евгению успехов
                        в работе и скорейшей адаптации в нашем коллективе.<br />
                        <b>Контакты Евгения:</b><br />
                        Эл. почта: <span className='employeeEmail'>sinkov@mrsoft.by</span><br />
                        Skype: sin123<br />
                        Моб. тел.: +375 29 1234567</div>
                </div>
           
                <div className='welcomItem'>                    
                    <div className='itemPhoto'>
                        <img src='/emplPhoto.jpg' alt='Синьков'></img>
                    </div>
                    <div className='itemText'>
                        С 10 {Months[5]} к нашей команде присоединился системный программист <span className='employeeName'>Евгений Синьков</span>.<br />
                        Евгений работает в команде с Артёмом Масько.<br />
                        От лица компании желаем Евгению успехов
                        в работе и скорейшей адаптации в нашем коллективе.<br />
                        <b>Контакты Евгения:</b><br />
                        Эл. почта: <span className='employeeEmail'>sinkov@mrsoft.by</span><br />
                        Skype: sin123<br />
                        Моб. тел.: +375 29 1234567</div>
                </div>
            </div>
        </div>
    );
}