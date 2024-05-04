import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '/node_modules/primeflex/primeflex.css'
import { ShoppingCartProvider } from './context/useShoppingCart';
import { PrimeReactProvider } from 'primereact/api';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'react-phone-input-2/lib/style.css'
import './App.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PrimeReactProvider><ShoppingCartProvider><App/></ShoppingCartProvider></PrimeReactProvider>);

