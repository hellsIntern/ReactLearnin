import React from 'react';
import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SerchPanel';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import './App.css';

const howMuchDoes = {
    toDo: 50,
    done: 20
};

export default class App extends React.Component {

    state = {
        todoData: [
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'Make App', important: false, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 },
            { label: 'Have a lunch2', important: false, id: 4 },
            { label: 'Have a lunch3', important: false, id: 5 },
        ]
    }

    deleteItem = (id) => {
        let data = this.state.todoData;

        let updatedData = data.filter(item => item.id !== id)

        this.setState(prevState => {
            return {
                todoData: updatedData
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader countDoes = { howMuchDoes } />
                <div className="search-bar">
                <SearchPanel />
                <ItemStatusFilter />
                </div>
                <TodoList
                    todos = { this.state.todoData }
                    onDelete={ this.deleteItem }
                />
            </div>)
    }
};


