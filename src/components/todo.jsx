import React, { Component } from 'react';
import './scss/todolist.scss';


class Todo extends Component {
    constructor ( props ) {
        super(props);
    }

    handleChange = event => {
        this.props.onCompletedTask(event.target.checked, this.props.todo.Id);
    }
    
    render() {
        const markCompletedClass = this.props.todo.Completed ? 'add-opacity-low' : '';
        const inputSupplies = (
            <div>
                <label className={markCompletedClass}>
                    <input type="checkbox" name="Completed" checked={this.props.todo.Completed} onChange={ this.handleChange } /> 
                        { this.props.todo.Title } 
                </label>
                
            </div>
        );

        return ( 
            <div>
                { this.props.children }
                { inputSupplies }
            </div>
        );
    }
}

export default Todo;