/* This is calling react to be use all its apps */
import React from 'react';

/* By calling react you can call Dom with in react to be able to use Dom */
import ReactDOM from 'react-dom';

/* I`m calling or linking CSS styles */
import './index.css';

/* Here I`m importing my app js components */
import App from './App';

import reportWebVitals from './reportWebVitals';

/* Here I`m importing my prrovider with in the themeContex js components */
import {ThemeContextProvider} from "./themeContext"

/* Here I`m sending everything to the HTML Page or client also known as UI */
ReactDOM.render(
  <React.StrictMode>
  {/*   provider is the the component the is going to provide to the consummer that are the child  */}
    <ThemeContextProvider>

     {/*  I`m importing all the action that is happening in the app.js component */}
    <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
