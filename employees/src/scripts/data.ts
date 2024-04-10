import data from "../assets/db.json";
import { IEntity } from "./types";
const newId = (entities: IEntity[]) => {
    let max = 0;
    entities.forEach((cl) => {
      if (+cl.id > max) max = +cl.id;
    });
    return max + 1;
  };
export const getData = (entityName: string, id?: number) => {
  let result = data[entityName];
  if (id) result = result.filter((ent) => ent.id === id);
  return result;
};
export const setData = (entityName: string, newEntity:IEntity) => {
    const currData=data[entityName];
    if(newEntity.id>0)
    {
        let curr =currData.find(ent=>ent.id===newEntity.id);
        curr=newEntity;
    }
    else {
        newEntity.id=newId(currData);
        currData.push(newEntity);
    }

};
export const deleteData=(entityName: string,id:number)=>{
    let currData=data[entityName];
    //let newData:Array<IEntity> = [];
    let i=0;
    for(i=0;i<currData.length;i++){
        if(currData[i].id===id)break;
    }
    // currData.forEach((cl) => {
    //   if (cl.id != id) newData.push(cl);
    // });
    data[entityName].splice(i,1);//=newData;

}
