import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';

const store = configureStore();

ReactDOM.render(<Provider store={store}><App store={store}/></Provider>, document.getElementById('root'));
