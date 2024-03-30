import React from 'react';
import { withDataLoad } from '../components/withDataLoad.tsx';
//import { useParams } from 'react-router-dom';
import {ProjectList} from '../components/ProjectList.tsx';
// Константы - методы & операции
import { SERVER_URL_PROJECTS } from '../scripts/constants.ts'



  
  const ProjectsWithData=withDataLoad("companyData",SERVER_URL_PROJECTS)(ProjectList);

export const Projects = ()=>{
   // const params = useParams();
    return(
        <div>
            Тут будет страница управления проектами:
            добавить, удалить, редактировать
            <ProjectsWithData/>
        </div>
    );
}