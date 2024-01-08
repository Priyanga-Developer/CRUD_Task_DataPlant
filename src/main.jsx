import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './app/store.js'
import { Provider} from "react-redux"
import { DataContextProvider } from './Hooks/DataContext.jsx'
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContextProvider>
      <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
      </BrowserRouter>
    </DataContextProvider>
  </React.StrictMode>,
)
