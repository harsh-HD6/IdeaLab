import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DarkThemeProvider } from './context/DarkThemeContext';
import { BrowserRouter} from 'react-router-dom'



ReactDOM.render(
     <BrowserRouter>
 <DarkThemeProvider>
      <App />
 </DarkThemeProvider>
 </BrowserRouter>,
  document.getElementById('root')
);

