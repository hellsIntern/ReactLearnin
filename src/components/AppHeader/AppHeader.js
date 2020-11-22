import React from 'react';
import './AppHeader.css';

export default class AppHeader extends React.Component {

    // let { toDo, done } = this.props.countDoes;

    render() {
        return (
            <div className="app-header">
                <h1>My Todo List</h1>
                {/*<div>more to do, { done } done</div>*/}
            </div>
        )
    };
}

