import React, { useState } from "react";
import './Calendar.css';
import { Months } from '../scripts/calendarHelper.ts';
import { Employee } from '../scripts/types.ts'
class Happiest {
    id: number;
    surname: string;
    name: string;
    birthDay: number;
    current: boolean;
}

export const Calendar = (props) => {
    const employees: Employee[] = props.calendarData;

    const happiestList: Happiest[] = [];
    const currentMonth = new Date().getMonth();
    const currDate = new Date().getDate();
    const [month, setMonth] = useState(currentMonth);
    const changeMonth = (num: number) => {
        let newMonth: number = (month + num + 12) % 12;
        setMonth(newMonth);
    }
    employees.forEach(emp => {
        let birth = emp.birthday ? new Date(emp.birthday) : null;
        if (birth && birth.getMonth() == month) {
            happiestList.push({
                id: emp.id,
                surname: emp.surname ?? "",
                name: emp.name ?? "",
                birthDay: birth.getDate(),
                current: false
            });
        }

    });
    happiestList.sort((a, b) => {
        if (a.birthDay > b.birthDay) return 1;
        if (a.birthDay < b.birthDay) return -1;
        return 0;

    })
    if (month === currentMonth) {
        const currBirth = happiestList.find((h: Happiest) => { return h.birthDay >= currDate; });
        happiestList.forEach(h => {
            if (currBirth && h.birthDay === currBirth.birthDay) h.current = true;
        });
        // if (happiestList.length && happiestList[0].birthDay > currDate)
        //     happiestList[0].current = true;
        // for (let i = 1; i < happiestList.length; i++) {
        //     if (happiestList[i - 1].birthDay < currDate
        //         && happiestList[i].birthDay >= currDate)
        //         happiestList[i].current = true;
        // }
    }
    console.log(happiestList);

    return (<div>
        <div>Именинники {Months[month]}</div>
        <div>
            {happiestList.map(h => <div key={h.id} className={h.current ? 'current' : ''}> {h.birthDay} - {h.surname} {h.name}</div>)}
        </div>

        <input type="button" value={'Именинники ' + Months[((month - 1 + 12) % 12)]} onClick={() => { changeMonth(-1) }} />
        <input type="button" value={'Именинники ' + Months[((month + 1 + 12) % 12)]} onClick={() => { changeMonth(1) }} />
    </div>
    );
}