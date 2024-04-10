import React, { useState } from "react";
import './Calendar.css';
import { Months } from '../scripts/calendarHelper.ts';
import { EmployeeType } from '../scripts/types.ts'
class Happiest {
    id: number;
    surname: string;
    name: string;
    birthDay: number;
    current: boolean;
}

export const Calendar = (props) => {
    const employees: EmployeeType[] = props.calendarData;

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
        if (birth && birth.getMonth() === month) {
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
    }

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