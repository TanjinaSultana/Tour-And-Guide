import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';


const Main = () => {
    const location = useLocation();
    const noNav = location.pathname.includes('login') || location.pathname.includes('register') || location.pathname.includes('dashboard')
    return (
        <div >
             {
                noNav ||
          <Navbar></Navbar>
            }
           <Outlet></Outlet>
           {
            noNav ||
           <Footer></Footer>
           }
           
           
        </div>
    );
};

export default Main;