import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOMClient.createRoot(document.getElementById('root'));

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);