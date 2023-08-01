import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './assets/fonts/fontawesome-free-6.1.2-web/css/all.min.css';
import './assets/fonts/poppins/poppins.css';
import './assets/css/reset.css';
import './assets/css/scroll.css';
import './assets/css/styles.css';
import './assets/css/responsive.css';

import ReactGA from 'react-ga4';
ReactGA.initialize('G-QTQKG534WD');

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
