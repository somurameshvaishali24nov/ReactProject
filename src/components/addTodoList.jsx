import React, { Component } from 'react';
import './scss/todolist.scss';
import './scss/_modal.scss';
import { connect } from 'react-redux';
import * as TodoActions from '../actions/todoActions';

const initialState = {
    todoItem: {
        id: 0,
        Title: '',
        Completed: false
    }
}

// Create a random number generator
const randomNumberGenerator = () => {
    return Math.floor( Math.random() * 951 ) + 50;
};

class AddTodoList extends Component {
    constructor ( props ) {
        super(props);
        
        this.state = initialState;
    }

    recursiveFunction (uniqueId) {
        let copyAllTodos = [...this.props.allTodos];
        let doesUniqueIdExists = copyAllTodos.some( idExists => idExists.id === uniqueId);
        if ( doesUniqueIdExists ) {
            let uniqueIdAn = randomNumberGenerator();
            this.recursiveFunction( uniqueIdAn );
        } else {
            return uniqueId;
        }
    }

    createNewList = () => {
        let uniqueId = randomNumberGenerator();
        let id = this.recursiveFunction(uniqueId);
        let todoItem = {...this.state.todoItem, id };
        this.props.addNewListFn(todoItem);
        this.setState( initialState );
        this.props.onCloseFlyout(); // After clicking on Create New List button Close it
    }

    capitalise ( value ) {
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
    
    onNewCompleteChange = event => {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        
        let todoItem = {...this.state.todoItem};

        // eslint-disable-next-line no-unused-expressions
        name === 'Title' ? value = this.capitalise(value) : null;

        todoItem[name] = value;

        this.setState({ todoItem });
    }

    onCloseAddTodo = () => {
        this.props.onCloseFlyout();
    }

    render() { 
        const addedOpacityClass = this.state.todoItem.Title ? ' add-todo-list-btn' : 'opacity-low  add-todo-list-btn';
        return (
            <div className="modal-overlay-wpr">
                <div className="modal-dialog">
                    <div className="overall-body-modal">
                        <h4 className="modal-title"> Add Your List </h4>
                        <div className="modal-body">
                            <form>
                                <div className="title-div">
                                    <input type="text" name="Title" placeholder="Enter the title for Todo" value={this.state.todoItem.Title} onChange={this.onNewCompleteChange}/>
                                </div>

                                <div className="completed-div">
                                    <label className="added-space-top"> <span className="completed-text">Task Completed</span>
                                        <div className="checkbox-sur-div">
                                            <input type="checkbox" name="Completed" checked={this.state.todoItem.Completed} 
                                                onChange={this.onNewCompleteChange} />
                                        </div>  
                                    </label>
                                </div>
                            </form> 
                        </div>
                        <div className="modal-footer"> 
                            <div className="row">
                                <button type="button" className={addedOpacityClass} onClick={this.createNewList}> Add Todo List </button>
                            </div>
                        </div>
                    <div className="modal-close">
                        <button type="button" onClick={this.onCloseAddTodo} className="increate-X-font-size close-btn-x">X</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        addNewListFn: (stateData) => dispatch( TodoActions.addNewListFn(stateData) )
    }
}

// If you want to use mapDispatchToProps without a mapStateToProps just use null for the first argument.
export default connect(null, mapDispatchToProps)(AddTodoList);