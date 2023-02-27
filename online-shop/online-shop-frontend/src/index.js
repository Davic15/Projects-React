import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import store from './store/store';
import { productsFetch } from './features/productsSlice';
//import { productsApi } from './features/productsApi';
import { getTotals } from './features/cartSlice';


const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(productsFetch());
store.dispatch(getTotals());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

