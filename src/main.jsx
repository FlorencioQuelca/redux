import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import store from './store'  //importa automaticamente el index.js
//PROVIDER GENERA UN CONTEXTO DE NUESTRO SCOUP  EN ESTE CASO TODA LA APP
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
         <App />
    </Provider>
  </React.StrictMode>
)
