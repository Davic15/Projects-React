import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReactGA from "react-ga4";

ReactGA.initialize('G-J89BXXVYHW');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

