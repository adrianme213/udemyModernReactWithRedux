import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvider } from './Store';

const myRoot = document.getElementById('root');
ReactDOM.render(<StoreProvider><App /></StoreProvider>, myRoot);