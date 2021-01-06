import React from 'react';
import 'lib-flexible'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "./store/reducer"
import ReactDOM from 'react-dom';
import './index.css';
// import Mobile from './Mobile';
// import Color from "./Color"
import Demo from './demo/myPage'
let store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <Demo />
  </Provider>
    ,
  document.getElementById('root')
);

