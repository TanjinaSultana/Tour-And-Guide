import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

     <div style={{maxWidth:"1200px",margin:"0 auto"}}>
      <RouterProvider router={router} />
    </div>
    </AuthProvider>
  </React.StrictMode>,
)
