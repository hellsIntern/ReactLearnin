import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ todos, onDelete }) => {


    const elements = todos.map((item) => {
        return (
            <li className="list-group-item" key = { item.id }>
                <TodoListItem
                    label = { item.label }
                    important = { item.important }
                    onDelete={ () => onDelete(item.id) }
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements }                        
        </ul>
    );
};

export default TodoList;