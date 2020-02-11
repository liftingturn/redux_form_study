import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import { createStore, combineReducers } from 'redux';
import {BrowserRouter} from 'react-router-dom'
import Router from './Router'
import configureStore from './configureStore';
import { reducer as formReducer } from 'redux-form';


function App() {
  const rootReducer = combineReducers({  //redux에 redux-form reducer를 전달.
    form: formReducer,
  });
  
  
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </Provider>
  
  );
}

export default App;
