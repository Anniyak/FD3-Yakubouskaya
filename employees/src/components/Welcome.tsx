import React from 'react';
import { Months } from '../scripts/calendarHelper.ts';
import './Welcome.css'
//import{Employee, Department} from '../scripts/types.ts'


export const Welcome = (props) => {
    const getItemsTemplate=()=>{return props.checkedItems.map(empl=> {return(
        <div className='welcomItem' key={empl.id}>
                    
                    <div className='itemPhoto'>
                        <img src='/emplPhoto.jpg' alt='Синьков'></img>
                    </div>
                    <div className='itemText'>
                        С {new Date(empl.employmentDate).getDay()} {Months[(new Date(empl.employmentDate).getMonth())]} к нашей команде присоединился системный программист <span className='employeeName'>{empl.surname+' '+empl.name}</span>.<br />
                        Евгений работает в команде с Артёмом Масько.<br />
                        От лица компании желаем Евгению успехов
                        в работе и скорейшей адаптации в нашем коллективе.<br />
                        <b>Контакты Евгения:</b><br />
                        Эл. почта: <span className='employeeEmail'>{empl.email}</span><br />
                        Skype: {empl.skype}<br />
                        Моб. тел.: {empl.telephone}</div>
                </div>);}
        );
    }


    return (
        <div className='welcomeBlock'>
            <div className='picturesBlock'>
                <img src='/image005.png' alt='logo' className='welcomeLogo' />
                <img src='/welcome.png' alt='welcome' className='welcomeImg' />
            </div>
            <div className='welcomText'>Добро пожаловать в команду!</div>
            <div className='welcomItems'>
                
                {getItemsTemplate()}
           
               
            </div>
            <input type='button' value='Закрыть' className='closeBtn' onClick={props.onClose}/>
        </div>
    );
}