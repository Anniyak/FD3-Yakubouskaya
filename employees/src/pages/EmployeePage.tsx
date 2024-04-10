import React from 'react';
import { useParams } from 'react-router-dom';
import {Employee} from '../components/Employee.tsx'

export const EmployeePage = (props) => {
    const params = useParams();
    const employeeId = params.id ? parseInt(params.id) : 0;
    
    return (
        <div>
            <Employee employeeId={employeeId}  getDataList={props.getDataList}  getDataById={props.getDataById} setData={props.setData} deleteData={props.deleteData}/>
        </div>
        // data={props.data}
    );
}