
import { MdOutlineArrowOutward } from 'react-icons/md';

const FourthSection = () => {
    return (
        <div className='my-10'>
            {/* First Card Section */}
            <div className="flex flex-col md:flex-row justify-between px-10">
                {/* Left Section */}
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <button className="border border-gray-700 rounded-3xl px-4 py-2 mb-4">
                        Service
                    </button>
                    <h1 className="text-4xl mb-6 font-semibold">Empowering Health, Enriching Lives</h1>
                    <p className="mb-6">
                        We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                    </p>
                    <div>
                        <button className="flex items-center px-4 py-2 border rounded-md bg-yellow-500 text-white transition-all duration-300">
                            Appointment <MdOutlineArrowOutward className="ml-2" />
                        </button>
                    </div>
                </div>
                {/* Right Section */}
                <div className="relative md:w-1/2 p-4 flex items-end justify-center"> {/* Adjusted items-end for bottom alignment */}
                    <div className="absolute bg-[#343268] bg-opacity-80 p-12 w-96 text-white rounded-3xl z-10">
                        <h1 className="text-2xl mb-4 font-semibold">Advanced Technology</h1>
                        <p className="text-opacity-80">
                            Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.
                        </p>
                    </div>
                    <div className="w-full">
                        <img src="https://i.ibb.co/r2GhBVy/Rectangle-27-2.png" alt="Technology" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>

            {/* Second and Third Card Section */}
            <div className="flex flex-col md:flex-row justify-between px-10">
                {/* Second Card */}
                <div className="relative md:w-2/3 p-4 flex items-end justify-center"> {/* Adjusted items-end for bottom alignment */}
                    <div className="absolute bg-[#343268] bg-opacity-80 p-12 w-96 text-white rounded-3xl z-10">
                        <h1 className="text-2xl mb-4 font-semibold">Online Doctor Meet</h1>
                        <p className="text-opacity-80">
                            Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.
                        </p>
                    </div>
                    <div className="w-full">
                        <img src="https://i.ibb.co/XZJ8Jjb/Rectangle-27-1.png" alt="Doctor Meet" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
                {/* Third Card */}
                <div className="relative md:w-2/3 p-4 flex items-end justify-center"> {/* Adjusted items-end for bottom alignment */}
                    <div className="absolute bg-[#343268] bg-opacity-80 p-12 w-96 text-white rounded-3xl z-10">
                        <h1 className="text-2xl mb-4 font-semibold">Consultancy your health</h1>
                        <p className="text-opacity-80">
                            Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.
                        </p>
                    </div>
                    <div className="w-full">
                        <img src="https://i.ibb.co/7CnCHCq/Rectangle-27.png" alt="Consultancy" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourthSection;
