import { Outlet } from "react-router-dom";
import Footer from "../Footers/Footer";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>

           <Footer></Footer>
        </div>
    );
};

export default Root;