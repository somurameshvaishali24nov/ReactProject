import logo from './logo.svg';
import './App.scss';
import React, { useState } from 'react';
import firebase from './firebase';
import Navbar from './components/navbar';
import './components/FontawesomeIcon';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './reducer/rootReducer'

const store = createStore(RootReducer);


function App() {
	const [ todolist, setTodolist ] = useState([]);
	const [loading, setLoading] = useState(false);

	const ref = firebase.firestore().collection("todolist");
	console.log(ref);

	if ( loading ) {
		return <h1>Loading ... </h1>
	}

	return (
		<Provider store={store}>
			<div className="App">
				<h1> Todo List </h1>
				<Navbar />
			</div>
		</Provider>
	);
}

export default App;
