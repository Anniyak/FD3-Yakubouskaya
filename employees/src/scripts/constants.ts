// Адрес сервера
// http://localhost:3000 можно опустить, поскольку мы определили
// директорию со статическими файлами в `package.json` как "/"
const serverUrl = 'http://localhost:3001/'
export const SERVER_URL_EMPLOYEES =serverUrl+ 'employees';
export const SERVER_URL_PROJECTS = serverUrl+'projects';
export const SERVER_URL_DEPARTMENTS =serverUrl+ 'departments';

// HTTP-методы
export const POST = 'POST'
export const DELETE = 'DELETE'
export const PUT = 'PUT'

// Операции
export const UPDATE = 'UPDATE'
export const REMOVE = 'REMOVE'

export const EMPLOYEES='employees'
export const PROJECTS='projects'
export const DEPARTMENTS='departments'

export const MALE='male'
export const FEMALE='female'