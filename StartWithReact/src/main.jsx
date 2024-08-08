import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StartGame from './pages/StartGame/StartGame.jsx'


const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
  {
    path: '/startGame',
    element: <StartGame />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
)