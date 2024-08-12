import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css';
import App from './App';
import ContextProvider from './context/AppContext';
import Tutorial from './pages/Tutorial';


const router = createBrowserRouter([
    {
          path: "/", element:<App/>,
          children:[
            {
                path: "/", element:<Tutorial/>,
            }
          ]
        
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
 
    // <App/>
    <React.StrictMode>
    <ContextProvider>
    <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>

)
