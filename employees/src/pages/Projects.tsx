import React,{useState} from 'react';
// import { withDataLoad } from '../components/withDataLoad.tsx';
//import { useParams } from 'react-router-dom';
import {ProjectList} from '../components/ProjectList.tsx';
// Константы - методы & операции
 import { PROJECTS } from '../scripts/constants.ts'
import { getData, setData } from '../scripts/data.ts';
import { Emitter } from '../scripts/emitter.ts';




  
 // const ProjectsWithData=withDataLoad("companyData",SERVER_URL_PROJECTS)(ProjectList);

export const Projects = (props)=>{
    // const[projects,setProjects]=useState(getData(PROJECTS))
    
//let Projects=getData(PROJECTS);
//Subscribe FirstEvent
// Emitter.on('refreshProjects', function () {
//     setProjects(getData(PROJECTS));
    
// });

   // const params = useParams();
    return(
        <div>
            Тут будет страница управления проектами:
            добавить, удалить, редактировать
            <ProjectList projects={props.data} getDataList={props.getDataList}  getDataById={props.getDataById} setData={props.setData} deleteData={props.deleteData}/>
        </div>
    );
}