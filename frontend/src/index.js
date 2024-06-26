import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import store from './redux/store';
import { Provider } from 'react-redux';

//nothing
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <div className=' h-full w-full'>
    <Provider store={store}>  
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
      </Provider>
   </div>
);


