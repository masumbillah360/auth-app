import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Main/Layout'
import Home from './components/Home'
import Profile from './components/Profile'
import Wallet from './components/Wallet'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Layout></Layout>, children:[
      {path:'/', element: <Home></Home>},
      {path:'/profile', element: <Profile></Profile>},
      {path:'/wallet', element: <Wallet></Wallet> },
      {path:'/login', element: <Login></Login> },
      {path:'/register', element: <Register></Register>},
    ]}
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
