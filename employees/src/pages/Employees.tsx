import React from 'react';
import { useParams } from 'react-router-dom';
import { Welcome } from '../components/Welcome.tsx';

export const Employees = () => {
    const params = useParams();
    const employeeId = params.id ? parseInt(params.id) : 0;
    return (
        <div>
            Пользователь с айди {employeeId}
            Тут будет страница управления работниками:
            добавить, удалить, редактировать
            <a href="mailto:mail@htmlacademy.ru%2C%20anniyak@gmail.com?cc=anniyak@tut.by&body=привет&subject=вопрос">Напишите нам</a>
        <Welcome/>
        </div>
    );
}