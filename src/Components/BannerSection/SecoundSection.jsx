

const SecoundSection = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4 space-y-6 my-10">
            <div className="flex justify-between w-full space-x-6">
                {/* Left Card */}
                <div className="flex flex-col items-center w-1/5 p-4 bg-white shadow-lg rounded-lg border border-gray-300 h-[420px]">
                    <h1 className="text-7xl text-gray-800 mb-2 font-bold">90%</h1>
                    <p className="text-xl text-center">Patient satisfaction rate, reflecting our commitment.</p>
                    <img src="https://i.ibb.co/BPdrFRj/Untitled-5-removebg-preview.png" alt="" className="mt-4"/>
                </div>
                {/* Middle Section */}
                <div className="w-3/5">
                    <h1 className="text-5xl font-bold text-center mb-6">Comprehensive Care for Every Patient</h1>
                    <div className="flex space-x-4">
                        <div className="flex flex-col items-center w-full p-4 bg-white shadow-lg rounded-lg border border-gray-300 h-[300px]">
                            <h1 className="text-5xl font-bold text-gray-800 mb-2">500+</h1>
                            <p className="text-xl text-center">Board-certified doctors</p>
                            <img src="https://i.ibb.co/z4tTLCV/Untitled-1-removebg-preview.png" alt="" className="mt-4"/>
                        </div>
                        <div className="flex flex-col items-center w-full p-4 bg-white shadow-lg rounded-lg border border-gray-300 h-[280px] mt-6">
                            <div className="flex items-center mb-2">
                                <h1 className="text-5xl font-bold text-gray-800">4.8</h1>
                                <img src="https://i.ibb.co/fMFvX0v/Untitled-6-removebg-preview.png" alt="" className="h-6 ml-2"/>
                            </div>
                            <p className="text-xl text-center">Over 20,000 Patient</p>
                            <img src="https://i.ibb.co/9NdW8S9/Untitled-2-removebg-preview.png" alt="" className="mt-4"/>
                        </div>
                        <div className="flex flex-col items-center w-full p-4 bg-white shadow-lg rounded-lg border border-gray-300 h-[300px]">
                            <h1 className="text-5xl font-bold text-gray-800 mb-2">$5000</h1>
                            <p className="text-xl text-center">Money spend for poor patient</p>
                            <img src="https://i.ibb.co/5v3g6wd/Untitled-3-removebg-preview.png" alt="" className="mt-4"/>
                        </div>
                    </div>
                </div>
                {/* Right Card */}
                <div className="flex flex-col items-center w-1/5 p-4 bg-white shadow-lg rounded-lg border border-gray-300 h-[420px]">
                    <h1 className="text-7xl font-bold text-gray-800 mb-2">50+</h1>
                    <p className="text-xl text-center">Free lesson video for patient.</p>
                    <img src="https://i.ibb.co/vYh03Wf/Untitled-4-removebg-preview.png" alt="" className="mt-4"/>
                </div>
            </div>
        </div>
    );
};

export default SecoundSection;
