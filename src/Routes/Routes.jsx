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
import TourGuideHome from "../Pages/dashboard/tourguide/tour guide home/TourGuideHome";
import AssignTour from "../Pages/dashboard/tourguide/AssignTour/AssignTour";
import UserHome from "../Pages/dashboard/user/UserHome/UserHome";
import MyBooking from "../Pages/dashboard/user/Booking/MyBooking";
import MyWishlist from "../Pages/dashboard/user/wishlist/MyWishlist";
import Payment from "../Pages/dashboard/user/payment/Payment";
import PaymentHistory from "../Pages/dashboard/user/payment/PaymentHistory";
import AllPackage from "../Pages/Home/Home-feature/Banner/TourismGuide/OurPackage/AllPackage";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
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
          path: 'allPackage',
          element: <AllPackage></AllPackage>
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
      element:
      <PrivateRoute>

        <Dashboard></Dashboard>
      </PrivateRoute>
      ,
      children:[
        //admin routes
        {
          path:'home',
          element:<AdminRoute>

            <AdminHome></AdminHome>
          </AdminRoute>
        },
        {
          path:'alluser',
          element:<AdminRoute>

            <AllUser></AllUser>
          </AdminRoute>
        },
        {
          path:'addItem',
          element: <AdminRoute>

            <AddItem></AddItem>
          </AdminRoute>
        },
        //tour guide routes
        {
          path:'guidehome',
          element:<TourGuideHome></TourGuideHome>
        },
        {
          path:'assigntour',
          element:<AssignTour></AssignTour>
        },
        //user routes
        {
          path:'userhome',
          element:<UserHome></UserHome>
        },
        {
          path:'cart',
          element:<MyBooking></MyBooking>
        },
        {
          path:'wish',
          element:<MyWishlist></MyWishlist>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },

      ]
    }
  ]);