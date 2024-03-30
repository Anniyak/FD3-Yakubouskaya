import React from 'react';
import './Calendar.css';
import { Months } from '../scripts/calendarHelper.ts';
import{Employee} from '../scripts/types.ts'
class Happiest{
    surname:string;
    name:string;
    birthDay:number;
    current:boolean;
}

export const Calendar=(props)=>{
    const employees:Employee[]=props.calendarData;
    const happiestList:Happiest[]=[];
    const currentMonth = new Date().getMonth();
    const currDate = new Date().getDate();
    employees.forEach(emp=>{
        let birth =emp.birthday? new Date(emp.birthday):null;
        if (birth && birth.getMonth()==currentMonth){
            happiestList.push({
                surname:emp.surname??"",
                name:emp.name??"",
                birthDay:birth.getDate(),
                current:false
            });
        }

    });
    happiestList.sort((a,b)=>{
        if(a.birthDay>b.birthDay) return 1;
        if(a.birthDay<b.birthDay) return -1;
        return 0;

    })
    for(let i=1; i<happiestList.length;i++)
    {
        if(happiestList[i-1].birthDay<currDate 
            && happiestList[i].birthDay>=currDate)
            happiestList[i].current=true; 
    }
    console.log(happiestList);
    return(<div>
        <div>Именинники {Months[currentMonth]}</div>
        <div>
{happiestList.map(h=><div className={h.current?'current':''}> {h.birthDay} - {h.surname} {h.name}</div>)}
        </div>
        </div>
    );
}