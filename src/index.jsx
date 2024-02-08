import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppClass from './AppClass';
import { imageData } from './components/DataComponet';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App imageData = {imageData} />    */}
    <AppClass imageData = {imageData} />
  </React.StrictMode>
);
