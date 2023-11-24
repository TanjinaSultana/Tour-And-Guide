import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/home/Home";
import Login from "../Pages/authentication/login/Login";
import Register from "../Pages/authentication/register/Register";
import ViewDetails from "../Pages/Home/Home-feature/Banner/TourismGuide/viewdetails/ViewDetails";
import GuideDetail from "../Pages/Home/Home-feature/Banner/TourismGuide/TourGuide/GuideDetail";
 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: "/packages/:id",
          element: <ViewDetails></ViewDetails>
        },
        {
          path: "/guide/:id",
          element: <GuideDetail></GuideDetail>
        }
      ]
    },
  ]);