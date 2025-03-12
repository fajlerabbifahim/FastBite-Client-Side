import { Outlet } from "react-router-dom";
import NavBar from "../pages/NavBar";
import Footer from "../pages/Footer";



const HomeLayout = () => {
    return (
        <div className='md:container mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;