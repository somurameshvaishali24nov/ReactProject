import React, { Component } from 'react';
import './scss/todolist.scss';


class Todo extends Component {
    constructor ( props ) {
        super(props);
    }

    handleChange = event => {
        this.props.onCompletedTask(event.target.checked, this.props.todo.id, this.props.todo);
    }
    
    render() {
        const markCompletedClass = this.props.todo.Completed ? 'add-opacity-low added-space-top' : 'added-space-top';
        const inputSupplies = (
            <div>
                <label className={markCompletedClass}>
                    <div className="checkbox-sur-div">
                        <input type="checkbox" name="Completed" className="checked-list-checkbox" checked={this.props.todo.Completed} onChange={ this.handleChange } /> 
                    </div> 
                    &nbsp; { this.props.todo.Title } 
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