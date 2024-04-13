import React, { useState } from 'react';
import { ProjectList } from '../components/ProjectList.tsx';



export const Projects = (props) => {

    return (
        <div>
            <ProjectList projects={props.data} getDataList={props.getDataList} getDataById={props.getDataById} setData={props.setData} deleteData={props.deleteData} />
        </div>
    );
}