import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers-/Router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
  </AuthProvider>
  </React.StrictMode>,
)
