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
import TourRoute from "./TourRoute";
import AllStory from "../Pages/Home/Home-feature/StorySection/allStory/AllStory";
import StoryDetails from "../Pages/Home/Home-feature/StorySection/StoryDetails/StoryDetails";
import Community from "../Pages/community/Community";
import Blog from "../Pages/blog/Blog";
import About from "../Pages/about/About";
import Contact from "../Pages/contact/Contact";
import Error from "../Errorpage/Error";
 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
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
          path: 'allStory',
          element:<AllStory></AllStory>
        },
        {
          path: 'community',
          element:<Community></Community>
        },
        {
          path: 'contact',
          element:<Contact></Contact>
        },
        {
          path: 'about',
          element:<About></About>
        },
        {
          path: 'blog',
          element:<Blog></Blog>
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
        },
        {
          path: "/story/:id",
          element:  <StoryDetails></StoryDetails>
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
          element:<TourRoute>

            <TourGuideHome></TourGuideHome>
          </TourRoute>
        },
        {
          path:'assigntour',
          element:<TourRoute>

            <AssignTour></AssignTour>
          </TourRoute>
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