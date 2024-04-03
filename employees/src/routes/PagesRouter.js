import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Projects } from '../pages/Projects.tsx';
import { Employees } from '../pages/Employees.tsx';


export const PagesRouter=()=>{
    return(
        <Routes>
            <Route path="/" element={<Employees/>}/>
            <Route path="/emloyees/:id" element={<Employees/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Routes>
    );

};