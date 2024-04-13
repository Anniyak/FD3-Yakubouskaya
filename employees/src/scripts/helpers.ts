import { IEntity } from "./types.ts";

export const newId = (entities: IEntity[]) => {
  let max = 0;
  entities.forEach((cl) => {
    if (+cl.id > max) max = +cl.id;
  });
  return max + 1;
};
