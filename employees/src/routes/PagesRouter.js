import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Projects } from '../pages/Projects.tsx';
import { Employees } from '../pages/Employees.tsx';
import { EmployeePage } from '../pages/EmployeePage.tsx';
import { PROJECTS, EMPLOYEES } from '../scripts/constants.ts'


export const PagesRouter=(props)=>{
    return(
        <Routes>
            <Route path="/" element={<Employees data={props.data[EMPLOYEES]} getDataList={props.getDataList} getDataById={props.getDataById} setData={props.setData} deleteData={props.deleteData}/>}/>
            <Route path="/emloyees" element={<Employees data={props.data[EMPLOYEES]} getDataList={props.getDataList} getDataById={props.getDataById} setData={props.setData} deleteData={props.deleteData}/>}/>
            <Route path="/emloyees/:id" element={<Employees data={props.data[EMPLOYEES]} getDataList={props.getDataList} getDataById={props.getDataById} setData={props.setData} deleteData={props.deleteData}/>}/>
            <Route path="/emloyee/:id" element={<EmployeePage data={props.data[EMPLOYEES]} getDataList={props.getDataList} getDataById={props.getDataById} setData={props.setData} deleteData={props.deleteData}/>}/>
            <Route path="/projects" element={<Projects data={props.data[PROJECTS]} getDataList={props.getDataList} getDataById={props.getDataById} setData={props.setData} deleteData={props.deleteData}/>}/>
        </Routes>
    );

};