import React, { useState, useEffect } from 'react';

import { EmployeeType, IEntity, ProjectType } from '../scripts/types.ts';

import { EMPLOYEES, PROJECTS } from '../scripts/constants.ts'

export const ProjectList = (props) => {
    const [projects, setProjects] = useState(props.projects);
    const [showAdd, setShowAdd] = useState(false);
    const [newProject, setNewProject] = useState("");
    const [editingList, setEditingList] = useState([] as number[]);
    useEffect(() => setProjects(props.projects), [props.projects])


    const saveProject = (id) => {
        let name = newProject;
        if (id > 0) {
            const currInd = projects.findIndex(prj => prj.id === id);
            name = projects[currInd].name;
            const newEditing: number[] = [...editingList];
            const currEditInd = newEditing.indexOf(id);
            newEditing.splice(currEditInd, 1);
            setEditingList(newEditing);

        }
        else setShowAdd(false);
        props.setData(PROJECTS, { id: id, name: name } as IEntity);



    }
    const changeProject = (id, value) => {
        const currInd = projects.findIndex(prj => prj.id === id);
        const curr = { ...projects[currInd], name: value };
        const newProjects = [...projects];
        newProjects[currInd] = curr;
        setProjects(newProjects);


    }
    const editProject = (id) => {
        const newEditing: number[] = [...editingList];
        newEditing.push(id);
        setEditingList(newEditing);

    }
    const deleteProject = (id) => {
        const empl: EmployeeType[] = props.getDataList(EMPLOYEES);
        const currPrjEmpl = empl.filter(emp => emp.project?.includes(+id));
        if (currPrjEmpl.length)
            alert("Проект назначен сотруднику, удаление невозможно");
        else props.deleteData(PROJECTS, id);
    }
    const getItemTemplate = (item: ProjectType) => {
        return (<tr key={item.id}>
            <td >{editingList.includes(item.id) ? <input type='text' value={item.name} onChange={(eo) => changeProject(item.id, eo.target.value)} /> : item.name}</td>
            <td>{editingList.includes(item.id) ? <input type='button' value='Сохранить' onClick={() => saveProject(item.id)} /> : <input type='button' value='Редактировать' onClick={() => editProject(item.id)} />}</td>
            <td>{editingList.includes(item.id) ? '' : <input type='button' value='Удалить' onClick={() => deleteProject(item.id)} />}
            </td>
        </tr>

        );
    }

    return (<div>
        <table><tbody>
            <tr>
                <th>Название</th>
                <th></th>
                <th></th>
            </tr>
            {projects.map((prj) => getItemTemplate(prj))}
        </tbody></table>

        {showAdd ? <div>
            <input type='text' value={newProject} onChange={e => setNewProject(e.target.value)} />
            <input type='button' value='Сохранить' onClick={() => saveProject(-1)} /></div> :
            <div><input type='button' value='Добавить новый проект' onClick={() => setShowAdd(true)} /></div>}

    </div>
    );
}