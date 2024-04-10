import React, { useState, useEffect } from 'react';

import { IEntity, Project } from '../scripts/types.ts';
////import { setData } from '../scripts/serverApi.ts'
// Константы - методы & операции
import { PROJECTS } from '../scripts/constants.ts'

import { newId } from '../scripts/helpers.ts'
import { setData, deleteData } from '../scripts/data.ts';
import { Emitter } from '../scripts/emitter.ts';

export const ProjectList = (props) => {
    const [showAdd, setShowAdd] = useState(false);
    const [newProject, setNewProject] = useState("");
    //const [projects, setProjects] = useState(props.companyData);
    //const[refresh, setRefresh]=useState(0);

    //let projects: Project[] = props.companyData;
    const callRefresh = () => {
        Emitter.emit('refreshProjects', {})
    }
    const addNewProject = () => {
        props.setData(PROJECTS, { id: -1, name: newProject } as IEntity);
        // setData(POST, {
        //     body: { id: newId(projects), name: newProject }
        // }, SERVER_URL_PROJECTS).then(()=>{
        //     setRefresh(refresh+1);
        //     setShowAdd(false);
        // });
        setShowAdd(false);
        // callRefresh();

    }
    const deleteProject = (id) => {
        props.deleteData(PROJECTS, id);
        // setData(DELETE, {
        //      id: id
        // }, SERVER_URL_PROJECTS).then(()=>setRefresh(refresh+1));
        // callRefresh();

    }
    const getItemTemplate = (item: Project) => {
        return (
            <div key={item.id}>
                Проект {item.id} с названием "{item.name}"
                <div><input type='button' value='удалить' onClick={() => deleteProject(item.id)} /></div>
            </div>
        );
    }

    return (<div>
        {props.projects.map(prj => getItemTemplate(prj))}
        {showAdd ? <div>
            <input type='text' value={newProject} onChange={e => setNewProject(e.target.value)} />
            <input type='button' value='Сохранить' onClick={addNewProject} /></div> :
            <div><input type='button' value='Добавить новый проект' onClick={() => setShowAdd(true)} /></div>}

    </div>
    );
}