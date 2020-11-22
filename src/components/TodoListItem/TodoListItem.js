import React from 'react';
import './TodoListItem.css';


export default class TodoListItem extends React.Component {

    state = {
        done: false,
        important: false
    }

    onLabelClick = (e) => {
        this.setState((state) => {
            return {
                done: !state.done
            }
        })
    }

    setImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important
            }
        })
    }

    render() {

        const { done, important } = this.state;
        const { label, onDelete } = this.props;

        let classNamesBtn = 'btn btn-outline-secondary fa fa-exclamation pointer';

        if (important) {
            classNamesBtn += ' red';
        }

        const buttonsAction = (
            <div className="btnz-group">
                <button className="btn btn-outline-secondary fa fa-trash-o pointer" onClick={ onDelete }></button>
                <button className={ classNamesBtn } onClick={ this.setImportant }></button>
            </div>
        )

        let classNames = 'todo-list-item pointer';

        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' bold-marked-text';
        }
    
        return (<div className = "sukaaa">
                    <span className={ classNames }
                          onClick={ this.onLabelClick }>{ label }
                        </span>
                        { buttonsAction }
                 </div>
             );
    }
}

