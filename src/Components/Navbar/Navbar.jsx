import { NavLink } from 'react-router-dom';
import { MdOutlineArrowOutward } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4 text-gray-900 ">
            <div>
                <img src="https://i.ibb.co/dB5KddY/logo-dark.png" alt="Logo" className="h-10" />
            </div>
            <div className="flex space-x-6">
                <NavLink exact to="/" className="hover:text-gray-300" activeClassName="text-gray-300">
                    Home
                </NavLink>
                <NavLink to="/services" className="hover:text-gray-300" activeClassName="text-gray-300">
                    Service
                </NavLink>
                <NavLink to="/blog" className="hover:text-gray-300" activeClassName="text-gray-300">
                    Blog
                </NavLink>
                <NavLink to="/about-us" className="hover:text-gray-300" activeClassName="text-gray-300">
                    About Us
                </NavLink>
            </div>
            <div>
                <button className="flex items-center px-4 py-2 border border-gray-700 rounded-md text-gray-900  hover:bg-gray-700 hover:border-gray-700 hover:text-white transition-all duration-300">
                    Appointment <MdOutlineArrowOutward className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
