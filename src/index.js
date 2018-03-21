import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import './reducers'
import {incrementByOne} from './actions/KeyActions'


const storeHello = createStore(rootReducer)

storeHello.subscribe(()=> {
   console.log(incrementByOne("Hey weeeeee"))
});



storeHello.dispatch({type: "INC", payload: 1});
storeHello.dispatch({type: "INC", payload: 1});
storeHello.dispatch({type: "INC", payload: 1});
storeHello.dispatch({type: "INC", payload: 1});



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
