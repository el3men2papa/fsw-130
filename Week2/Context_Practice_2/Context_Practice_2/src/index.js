import React from 'react'
import ReactDOM from 'react-dom'
import {MovieContextProvider} from "./movieContext"
import App from './App'

ReactDOM.render(
    <MovieContextProvider>
         <App />
     </MovieContextProvider>, 
     document.getElementById('root')
 )