import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../BannerSection/Footer";


const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto text-[#020043]">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;