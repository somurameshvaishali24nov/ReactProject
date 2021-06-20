import React, { Component } from 'react';
import Todo from './todo';

class TodosList   extends Component {
    constructor(){
        super();
    }

    state = { 

    }

    onCompletedParentTaskTodoList = ( data, valueId, todo ) => {
        this.props.onCompletedParentTask( data, valueId, todo );
    }

    render() { 
        const todos = this.props.todoList.map( todo => { 
            return todo.Title ? (
            <Todo key={ todo.id } todo={ todo } onCompletedTask={this.onCompletedParentTaskTodoList}>
                <br />
            </Todo>
            ) : null
        });

        const completed = [ ...this.props.todoList ];
        let showOnlyCompleted = completed.filter( complete => complete.Completed === true );

        showOnlyCompleted = showOnlyCompleted.map( todo => {
            return todo.Title ? (
            <Todo key={ todo.id } todo={ todo } onCompletedTask={this.onCompletedParentTaskTodoList}>
                <br />
            </Todo>
            ) 
            : null}
        );

        return (
            <React.Fragment>
                <div>
                    { this.props.onlyCompletedTask ? showOnlyCompleted : todos }
                </div>
            </React.Fragment>
        );
    }
}
 
export default TodosList;