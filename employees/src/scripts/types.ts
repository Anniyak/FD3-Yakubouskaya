export interface IEntity {
  id: number;
}
export class Config {
  method?: any;
  headers?: any;
  body?: string;
}

export class ProjectType implements IEntity {
  id: number;
  name: string;
}
export class EmployeeType implements IEntity {
  birthday?: Date;
  department?: number;
  email?: string;
  employmentDate?: string;
  dismissalDate?:Date;
  gender?: string;
  id: number;
  isBoss?: boolean;
  name?: string;
  patronymic?: string;
  position?: string;
  project?: number[];
  surname?: string;
  telephone?: string;
  skype?:string;
  deleted?:boolean;
  note?:string;
}

export class DepartmentType implements IEntity {
  id: number;
  name: string;
}
