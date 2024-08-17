import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Make sure App.js exists in the src directory
import './index.css';     // Ensure this file exists or adjust as needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);