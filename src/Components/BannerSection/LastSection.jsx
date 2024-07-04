import { MdOutlineArrowOutward } from "react-icons/md";

const LastSection = () => {
    return (
        <div className="relative h-[500px] my-10 px-10"> {/* Increased height */}
            <img
                src="https://i.ibb.co/8Y1vwHZ/Rectangle-32.png"
                alt="Banner"
                className="absolute inset-0 w-full h-full object-cover filter rounded-3xl brightness-50"
            />
            <div className="absolute inset-0 bg-[#020043] opacity-50"></div>
            <div className="absolute inset-0 left-20 flex items-center ">
                <div className="">
                    <h1 className="text-white text-4xl font-bold text-left p-4 space-y-7">Get Your <br />
                        First Appointment <br />
                        at 50% Off!</h1>
                    <div className="flex justify-around items-center gap-4">
                        <button className="flex items-center px-4 py-2 border rounded-md bg-yellow-500 text-white transition-all duration-300">
                            Learn More <MdOutlineArrowOutward className="ml-2" />
                        </button>
                        <div>
                            <button className="flex items-center px-4 py-2 border border-gray-700 rounded-md  hover:bg-gray-700 hover:border-gray-700 text-white transition-all duration-300">
                                Appointment <MdOutlineArrowOutward className="ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="absolute top-10 right-10">
                <img src="https://i.ibb.co/wKNnqDr/logo-light.png" alt="Logo" />
            </div>
        </div>
    );
};

export default LastSection;
