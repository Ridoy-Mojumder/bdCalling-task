import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#020043] text-white py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Left section with logo and contact info */}
                <div className="mb-6 md:mb-0">
                    <img src="https://i.ibb.co/wKNnqDr/logo-light.png" alt="Logo" className="h-10 md:h-12 mb-4" />
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                        <div>
                            <p className="text-sm p-2">Postal Code: 12345</p>
                            <p className="text-sm p-2">Support: support@oyolloo.com</p>
                            <p className="text-sm p-2">123 Main Street Anytown, USA</p>
                            <p className="text-sm p-2">(Available: 10:00am to 07:00pm)</p>
                        </div>
                    </div>
                </div>

                {/* Middle section with navigation links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6 md:mb-0">
                    <div>
                        <p className="font-bold text-lg p-2">Home</p>
                        <p className="text-sm p-2">About Us</p>
                        <p className="text-sm p-2">Success Page</p>
                        <p className="text-sm p-2">Terms and Conditions</p>
                    </div>
                    <div>
                        <p className="font-bold text-lg p-2">Services</p>
                        <p className="text-sm p-2">Scheduling</p>
                        <p className="text-sm p-2">Contact Us</p>
                        <p className="text-sm p-2">Patient Portal</p>
                    </div>
                    <div>
                        <p className="font-bold text-lg p-2">Follow Us</p>
                        <div className="flex items-center space-x-4 p-2">
                            <FaFacebook size={24} />
                            <FaInstagram size={24} />
                            <FaLinkedin size={24} />
                            <FaYoutube size={24} />
                        </div>
                        <p className="text-sm p-2">@docplus 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
