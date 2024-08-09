import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './pages/Home';
import './index.css';
import App from './App';


const router = createBrowserRouter([
    {
          path: "/", element:<App/>,
          children:[
            {
                path: "/", element:<Home/>,
            }
          ]
        
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
 
    // <App/>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

)
