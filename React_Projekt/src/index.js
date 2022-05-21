import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Fragmenty_stale/Header.js';
import Godziny from './Fragmenty_stale/Godziny.js';
import Footer from './Fragmenty_stale/Footer.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Godziny/>
    <App />
    <Footer/>
  </React.StrictMode>
);
reportWebVitals();
