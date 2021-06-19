import React, { Component } from 'react';
import TodosList from './todoList';
import Tabs from './tabbar/tabs';
import AddTodoList from './addTodoList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import * as TodoActions from '../actions/todoActions'

class Navbar extends Component {
    state = { 
        openAddTodoListComponent: false
    }

    onCompletedParentTask = ( data, valueId ) => {
        this.props.onCompleteTodoTask(data, valueId);
    }

    addNewList = ( openBool ) => {
        this.setState({ openAddTodoListComponent: true });
    }
    
    appendList = ( data ) => {
        let todoList = [...this.props.todoList];
        data['Id'] = todoList.length + 1;
        todoList.push( data );
        this.setState({todoList});
    }

    closeAddNewList = ( closeBool ) => {
        this.setState({ openAddTodoListComponent: false });
    }

    render() { 
        return ( 
            <div>
                <Tabs> 
                    <div label="Todo List"> 
                        <TodosList todoList={this.props.todoList} onCompletedParentTask={this.onCompletedParentTask} 
                            onlyCompletedTask={ false } />
                    </div> 
                    <div label="Completed"> 
                        <TodosList todoList={this.props.todoList} onCompletedParentTask={this.onCompletedParentTask} 
                        onlyCompletedTask={ true }/>
                    </div> 
			    </Tabs>
                <div>
                    <button type="button" onClick={ this.addNewList }> <FontAwesomeIcon icon="plus" /> </button>
                </div>
                { this.state.openAddTodoListComponent && <AddTodoList onAppendList={this.appendList} onCloseFlyout={this.closeAddNewList} /> }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        todoList: state.todoList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCompleteTodoTask: (data, Id) => { dispatch( TodoActions.onCompleteTodoTask( data, Id ) ) } 
    }
}

// When we connect from redux what data we need to connect 
export default connect( mapStateToProps, mapDispatchToProps )(Navbar); // connect() -- higher order component, but we are wrapping Navbar to it