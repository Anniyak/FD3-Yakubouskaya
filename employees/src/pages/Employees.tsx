import React from 'react';
import { useParams } from 'react-router-dom';
import { EmpoyeesList } from '../components/EmployeesList.tsx'

export const Employees = (props) => {
    const params = useParams();
    const employeeId = params.id ? parseInt(params.id) : 0;

    return (
        <div>
            <EmpoyeesList employeeId={employeeId} data={props.data} getDataList={props.getDataList} getDataById={props.getDataById} setData={props.setData} deleteData={props.deleteData} />
        </div>
    );
}