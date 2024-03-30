import React from 'react';
import { Project } from '../scripts/types.ts';
import {setData} from '../scripts/serverApi.ts'
// Константы - методы & операции
import { POST, DELETE, PUT, UPDATE, REMOVE, SERVER_URL_PROJECTS } from '../scripts/constants.ts'

let projects:Project[]=[];

const addNewProject=()=>{
    setData(POST,{body:{id:1234,name:"новый проект"}},SERVER_URL_PROJECTS );

}
const getItemTemplate = (item:Project)=>{
    return (
        <div key={item.id}>
            Проект {item.id} с названием "{item.name}"
        </div>
    );
}

export const ProjectList=(props)=>{
    projects=props.companyData;
    return (<div>
        {projects.map(prj=>getItemTemplate(prj))}
        <input type='button' value='добавить новый проект' onClick={addNewProject}/>
        </div>
    );
}