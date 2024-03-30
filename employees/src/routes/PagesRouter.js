import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Projects } from '../pages/Projects.tsx';
import { EmployeeDetails } from '../pages/EmployeeDetails.tsx';


export const PagesRouter=()=>{
    return(
        <Routes>
            <Route path="/" element={<EmployeeDetails/>}/>
            <Route path="/emloyees/:id" element={<EmployeeDetails/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Routes>
    );

};