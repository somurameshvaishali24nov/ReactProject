import logo from './logo.svg';
import './App.scss';
import React, { useState } from 'react';
import Navbar from './components/navbar';
import './components/FontawesomeIcon';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './reducer/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import { reactReduxFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

const store = createStore(RootReducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reduxFirestore(fbConfig),
		reactReduxFirebase(fbConfig),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
); 

function App() {
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
