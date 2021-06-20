import React, { Component } from 'react';
import TodosList from './todoList';
import Tabs from './tabbar/tabs';
import AddTodoList from './addTodoList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import * as TodoActions from '../actions/todoActions';
import './scss/todolist.scss';

class Navbar extends Component {
    state = { 
        openAddTodoListComponent: false
    }

    onCompletedParentTask = ( data, valueId, todo ) => {
        this.props.onCompleteTodoTask(data, valueId, todo);
    }

    addNewList = ( openBool ) => {
        this.setState({ openAddTodoListComponent: true });
    }
    
    appendList = ( data ) => {
        let todoList = [...this.props.todoList];
        data['id'] = todoList.length + 1;
        todoList.push( data );
        this.setState({todoList});
    }

    closeAddNewList = ( closeBool ) => {
        this.setState({ openAddTodoListComponent: false });
    }

    render() {         
        return ( 
            <div>
                { this.props.todoList  ? (
                    <div className='overall-div-todo'>
                        <div className="todo-all-visible">
                            <Tabs> 
                                <div label="Todo List">
                                    { this.props.todoList.length > 0 ? 
                                        ( <TodosList todoList={this.props.todoList} onCompletedParentTask={this.onCompletedParentTask} 
                                            onlyCompletedTask={ false } /> ) : 
                                        (<div className="add-space-around-center"> 
                                            <FontAwesomeIcon className="text-warning" icon="exclamation-triangle" /> No Items found 
                                        </div>)
                                     }
                                </div> 
                                <div label="Completed"> 
                                    { this.props.todoList.some( todo => todo.Completed ) ? 
                                        ( <TodosList todoList={this.props.todoList} onCompletedParentTask={this.onCompletedParentTask} 
                                        onlyCompletedTask={ true }/> ) : 
                                        <div className="add-space-around-center"> 
                                            <FontAwesomeIcon className="text-warning" icon="exclamation-triangle" /> No Items found 
                                        </div>
                                    }
                                </div> 
                            </Tabs>
                            <div className="plus-btn-styles">
                                <button type="button" onClick={ this.addNewList }> <FontAwesomeIcon icon="plus" /> </button>
                            </div>

                        </div>
                        { this.state.openAddTodoListComponent && 
                            <AddTodoList allTodos={this.props.todoList} onAppendList={this.appendList} onCloseFlyout={this.closeAddNewList} /> 
                        }
                    </div>
                ) : ( <div>Loading...</div> ) }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let x = {...state.firestore.ordered};
    if ( Object.keys(x).length > 0 ) {
        let sweet = [...state.firestore.ordered.todolist]
        sweet = sweet.sort((x, y) => x.Completed - y.Completed  )
        let x = sweet;

        sweet.filter((i, idx) => {
            x.filter((y, index) => {
                if (i.id === y.id && i.Completed !== y.Completed) {
                    i.Completed = true;
                }
            });
        });

        state.firestore.ordered.todolist = [ ...sweet.reduce((map, obj) => map.set(obj.id, obj), new Map()).values()];
    }
    return {
        ...state,
        todoList: state.firestore.ordered.todolist
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCompleteTodoTask: (data, id, todo) => { dispatch( TodoActions.onCompleteTodoTask( data, id, todo ) ) } 
    }
}

// When we connect from redux what data we need to connect 
// export default connect( mapStateToProps, mapDispatchToProps )(Navbar); // connect() -- higher order component, but we are wrapping Navbar to it

export default compose(
    connect( mapStateToProps, mapDispatchToProps ),
    firestoreConnect([
        { collection: 'todolist' }
    ])
)(Navbar)