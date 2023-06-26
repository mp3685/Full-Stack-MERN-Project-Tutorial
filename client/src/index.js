import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';
import './index.css';

import { fetchGoogleAPI } from './api/index.js';

const store = configureStore({ reducer: reducers }, compose(applyMiddleware(thunk)));

const root = ReactDOMClient.createRoot(document.getElementById('root'));

const data = await fetchGoogleAPI();
const googleAPIKey = data.data.data;

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );
root.render(
    <Provider store={store}>
        <App api={ googleAPIKey }/>
    </Provider>
);