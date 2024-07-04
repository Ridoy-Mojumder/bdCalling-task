

const BannerSection = () => {
    return (
        <div className="relative h-[500px]"> {/* Increased height */}
            <img
                src="https://i.ibb.co/xgwNp7M/Rectangle-5.png"
                alt="Banner"
                className="absolute inset-0 w-full h-full object-cover filter brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-4xl font-bold"></h1>
            </div>
        </div>
    );
};

export default BannerSection;
