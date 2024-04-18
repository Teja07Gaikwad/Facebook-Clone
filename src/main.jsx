import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Profile from './pages/Home/profile/Profile.jsx'
import Login from './pages/Home/login/Login.jsx'
import Register from './pages/Home/register/Register.jsx'
import { createBrowserRouter , RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'

const router= createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/profile/:username' element={<Profile/>}/>
     <Route path='/register' element={<Register/>}/>
    </>
  )
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
