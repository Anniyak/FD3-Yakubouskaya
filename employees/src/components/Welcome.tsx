import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Months } from '../scripts/calendarHelper.ts';
import './Welcome.css'


export const Welcome = (props) => {
    const [morthData, setMorthData] = useState([] as AxiosResponse<any, any>[]);
    useEffect(() => {
        async function loadMorpher() {
            const getList: Promise<AxiosResponse<any, any>>[] = [];
            for (let i = 0; i < props.checkedItems.length; i++)
                getList.push(axios.get(`https://ws3.morpher.ru/russian/declension?s=${props.checkedItems[i].name}&format=json`))
            const resultData = await Promise.all(getList);
            setMorthData(resultData);
        }
        loadMorpher();

    }, [props.checkedItems]);
    const getItemsTemplate = () => {
        return props.checkedItems.map((empl, ind) => {
            return (
                <div className='welcomItem' key={empl.id}>
                    <div className='itemPhoto'>
                        <img src='/emplPhoto.jpg' alt='Синьков'></img>
                    </div>
                    <div className='itemText'>
                        С {new Date(empl.employmentDate).getDay()} {Months[(new Date(empl.employmentDate).getMonth())]} к нашей команде присоединился {empl.position} <span className='employeeName'>{empl.surname + ' ' + empl.name}</span>.<br />
                        {empl.name} работает в команде с Артёмом Масько.<br />
                        От лица компании желаем {morthData[ind]?.data?.['Д']} успехов
                        в работе и скорейшей адаптации в нашем коллективе.<br />
                        <b>Контакты {morthData[ind]?.data?.['Р']}:</b><br />
                        Эл. почта: <span className='employeeEmail'>{empl.email}</span><br />
                        Skype: {empl.skype}<br />
                        Моб. тел.: {empl.telephone}</div>
                </div>);
        }
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
            <input type='button' value='Закрыть' className='closeBtn' onClick={props.onClose} />
        </div>
    );
}