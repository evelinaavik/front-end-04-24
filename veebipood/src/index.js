import React from 'react'; //node_module 
import ReactDOM from 'react-dom/client';  // node_module kaustast
import './index.css'; // tegemist on src kausta failiga
import App from './App';  // tegemist on src kausta failiga
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
// loogelised sulud = 1 tükk moodulist


// Navigeerimiseks: 1. peame panema peale uue mooduli nimega react-router-dom:
// ""




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
