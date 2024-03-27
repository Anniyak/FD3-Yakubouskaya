import React from 'react';
import { Months } from '../scripts/calendarHelper.ts';

export const Calendar=()=>{
    const currentMonth = new Date().getMonth()+1;
    return(
        <div>Именинники {Months[currentMonth]}</div>
    );
}