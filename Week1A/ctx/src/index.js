import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from "./Hello"
import MainContext from "./MainContext"
import {ThemeContextProvider} from "./themeContext"


//This is Provider



ReactDOM.render(
  <React.StrictMode>
    <MainContext.Provider>
    
       <App /> 
      <Hello  />
    
    </MainContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
