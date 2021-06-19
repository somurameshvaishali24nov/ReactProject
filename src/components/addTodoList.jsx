import React, { Component } from 'react';
import './scss/todolist.scss';
import { connect } from 'react-redux';
import * as TodoActions from '../actions/todoActions'

const initialState = {
    todoItem: {
        Id: 0,
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

    createNewList = () => {
        let todoItem = {...this.state.todoItem, Id: randomNumberGenerator()};
        this.props.addNewListFn(todoItem);
        this.setState( initialState );
        this.props.onCloseFlyout(); // After clicking on Create New List button Close it
    }
    
    onNewCompleteChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        
        let todoItem = {...this.state.todoItem}
        todoItem[name] = value;

        this.setState({ todoItem });
    }

    onCloseAddTodo = () => {
        this.props.onCloseFlyout();
    }

    render() { 
        return (
            <form>
                <div>
                    <label>Enter the title for Todo</label>
                    <input type="text" name="Title" value={this.state.todoItem.Title} onChange={this.onNewCompleteChange}/>
                </div>

                <div>
                    <label> Completed 
                        <input type="checkbox" name="Completed" checked={this.state.todoItem.Completed} onChange={this.onNewCompleteChange} />
                    </label>
                </div>
                
                <button type="button" onClick={this.createNewList}> Add Todo List </button>

                <button type="button" onClick={this.onCloseAddTodo} className="increate-X-font-size">X</button>
            </form> 
        );
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        addNewListFn: (stateData) => {dispatch( TodoActions.addNewListFn(stateData) )} 
    }
}

// If you want to use mapDispatchToProps without a mapStateToProps just use null for the first argument.
export default connect(null, mapDispatchToProps)(AddTodoList);