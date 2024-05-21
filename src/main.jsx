import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './Routers/Root.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import ProjectPage from './Pages/ProjectPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/> ,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'project',
        element:<ProjectPage/>
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
