export class Config {
  method?: any;
  headers?: any;
  body?: string;
}

export class Project {
  id: number;
  name: string;
}
export class Employee {
  birthday?: string;
  department?: number;
  email?: string;
  employmentDate?: string;
  gender?: string;
  id: number;
  isBoss?: boolean;
  name?: string;
  patronymic?: string;
  position?: string;
  project?: number[];
  surname?: string;
  telephone?: string;
}

class Projects {
  Items: Project[];
}
