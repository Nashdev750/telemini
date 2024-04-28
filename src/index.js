import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '/node_modules/primeflex/primeflex.css'
import { ShoppingCartProvider } from './context/useShoppingCart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ShoppingCartProvider><App/></ShoppingCartProvider>);

