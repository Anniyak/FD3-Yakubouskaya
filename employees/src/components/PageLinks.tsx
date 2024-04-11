import React from 'react';
import { NavLink } from 'react-router-dom';

import './PageLink.css'

export const PageLinks = ()=>{
    function getLinkClass(obj){
        let className="PageLink";
        if(obj.isActive)
        className+= " ActivePageLink";
    return className;

    }
    return (
        <div className='navigateBlock'>   
          <NavLink to="/emloyees" className={getLinkClass}>Работники</NavLink>
          <NavLink to="/projects" className={getLinkClass}>Проекты</NavLink>
        </div>
      );
}