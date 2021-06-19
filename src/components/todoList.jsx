import React, { Component } from 'react';
import Todo from './todo';

class TodosList   extends Component {
    constructor(){
        super();
    }

    state = { 

    }

    onCompletedParentTaskTodoList = ( data, valueId ) => {
        this.props.onCompletedParentTask( data, valueId );
    }

    render() { 
        const todos = this.props.todoList.map( todo => (
            <Todo key={ todo.Id } todo={ todo } onCompletedTask={this.onCompletedParentTaskTodoList}>
                <br />
            </Todo>
        ));

        const completed = [ ...this.props.todoList ];
        let showOnlyCompleted = completed.filter( complete => complete.Completed === true );

        showOnlyCompleted = showOnlyCompleted.map( todo => (
            <Todo key={ todo.Id } todo={ todo } onCompletedTask={this.onCompletedParentTaskTodoList}>
                <br />
            </Todo>
        ));

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