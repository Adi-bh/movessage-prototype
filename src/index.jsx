// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use `react-dom/client` for React 18
import './index.css';
import AppWrapper from './App'; // Ensure this import is correct

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
