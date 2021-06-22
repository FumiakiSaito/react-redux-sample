import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import reducer from './redux/reducers';

const Store = createStore(reducer);

ReactDom.render(
<Provider store={Store}>
  <App />
</Provider>,
 document.getElementById('root'));
