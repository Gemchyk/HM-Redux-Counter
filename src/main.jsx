import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import counterReducer from './store/counterSlice.js';


const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)
