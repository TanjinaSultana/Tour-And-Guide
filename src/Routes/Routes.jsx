import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/home/Home";
import Login from "../Pages/authentication/login/Login";
import Register from "../Pages/authentication/register/Register";
import ViewDetails from "../Pages/Home/Home-feature/Banner/TourismGuide/viewdetails/ViewDetails";
import GuideDetail from "../Pages/Home/Home-feature/Banner/TourismGuide/TourGuide/GuideDetail";
import EachType from "../Pages/Home/Home-feature/Banner/TourType/EachType";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../Pages/dashboard/admin/adminHome/AdminHome";
import AllUser from "../Pages/dashboard/admin/alluser/AllUser";
import AddItem from "../Pages/dashboard/admin/additems/AddItem";
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
          path: "/packages/:type",
          element: <EachType></EachType>
        
        },
        {
          path: "/:id",
          element: <ViewDetails></ViewDetails>
        },
        {
          path: "/guide/:id",
          element: <GuideDetail></GuideDetail>
        }
      ]
    },{
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'home',
          element:<AdminHome></AdminHome>
        },
        {
          path:'alluser',
          element:<AllUser></AllUser>
        },
        {
          path:'addItem',
          element:<AddItem></AddItem>
        }
      ]
    }
  ]);