import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {ContextProvider} from './Context';

ReactDOM.render(
    <BrowserRouter>
        <HelmetProvider>
            <ContextProvider>
                <App/>
            </ContextProvider>
        </HelmetProvider>

    </BrowserRouter>,
    document.getElementById('root'),
);

serviceWorker.unregister();