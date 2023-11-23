import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div style={{maxWidth:"1200px",margin:"0 auto"}}>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
