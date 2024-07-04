import { MdOutlineArrowOutward } from "react-icons/md";

const ThirdSection = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between p-10">
            {/* Left Section */}
            <div className="md:w-1/3 mb-10 md:mb-0">
                <button className="border border-gray-700 rounded-3xl px-4 py-2 mb-4">
                    Who we are
                </button>
                <h1 className="text-4xl mb-6 font-semibold">We Help To Get Solutions</h1>
                <p className="mb-6">
                    We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                </p>
                <div>
                    <button className="flex items-center px-4 py-2 border rounded-md bg-yellow-500 text-white transition-all duration-300">
                        Learn More <MdOutlineArrowOutward className="ml-2" />
                    </button>
                </div>
            </div>
            {/* Right Section */}
            <div className="relative md:w-2/3 p-12 flex items-center justify-center">
                <div className="absolute bg-[#343268] -bottom-[80px] -left-10 p-12 w-96 text-white rounded-3xl z-10 transform -translate-y-1/2">
                    <h1 className="text-2xl mb-4 font-semibold">Our mission is simple</h1>
                    <p>
                        To provide high-quality healthcare services that are accessible, personalized, and patient-centered.
                    </p>
                </div>
                <div className="w-full">
                    <img src="https://i.ibb.co/kxHqC9d/Rectangle-24.png" alt="Mission" className="w-full h-full object-cover rounded-lg shadow-lg"/>
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;
