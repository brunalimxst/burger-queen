import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login';
import '../src/style/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
