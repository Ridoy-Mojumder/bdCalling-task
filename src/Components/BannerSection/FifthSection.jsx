import { useState } from 'react';

const FifthSection = () => {
    const [userRating, setUserRating] = useState(1);
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <div className='grid grid-cols-1 md:grid-cols-3 p-10 '>
                <div className="max-[350px] space-y-6 p-12 rounded-2xl bg-[#FFFFF5] px-6 py-4 shadow-md dark:bg-[#18181B] md:w-[350px]">
                    {/* Card Image */}
                    <h1 className="text-4xl font-semibold">Expertise and Compassion Combined</h1>
                    <p>I can not thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                    {/* Card Heading */}
                    <div className="space-y-2 flex items-center gap-2">
                        <img className="h-12 w-12 rounded-full  bg-gray-400" src={'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} alt="card navigate ui" />
                        <div>
                            <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90"><span className='font-bold'>Sarah D,</span> IT Professional</h2>
                            {/* rating  */}
                            <div className="flex space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} onMouseMove={() => setUserRating(star)} className="w-7 cursor-pointer" viewBox="0 0 24 24" fill="#94a3b8" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                            fill={star <= userRating ? '#f2b00a' : '#94a3b8'}
                                        />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="max-[350px] space-y-6 p-12 rounded-2xl bg-[#FFFFF5] px-6 py-4 shadow-md dark:bg-[#18181B] md:w-[350px]">
                    {/* Card Image */}
                    <h1 className="text-4xl font-semibold ">Life-Saving Care, Life-Changing Experience</h1>
                    <p>My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                    {/* Card Heading */}
                    <div className="space-y-2 flex items-center gap-2">
                        <img className="h-12 w-12 rounded-full  bg-gray-400" src={'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} alt="card navigate ui" />
                        <div>
                            <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90"><span className='font-bold'>Michael R,</span> Business Executive</h2>
                            {/* rating  */}
                            <div className="flex space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} onMouseMove={() => setUserRating(star)} className="w-7 cursor-pointer" viewBox="0 0 24 24" fill="#94a3b8" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                            fill={star <= userRating ? '#f2b00a' : '#94a3b8'}
                                        />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="max-[350px] space-y-6 rounded-2xl bg-[#FFFFF5] px-6 py-4 shadow-md dark:bg-[#18181B] md:w-[350px]">
                    {/* Card Image */}
                    <h1 className="text-4xl font-semibold">A Partner in Health and Wellness</h1>
                    <p>As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they have become my trusted partner in health and</p>
                    {/* Card Heading */}
                    <div className="space-y-2 flex items-center gap-2">
                        <img className="h-12 w-12 rounded-full  bg-gray-400" src={'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} alt="card navigate ui" />
                        <div>
                            <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90"><span className='font-bold'>David S,</span> Lawyer</h2>
                            {/* rating  */}
                            <div className="flex space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} onMouseMove={() => setUserRating(star)} className="w-7 cursor-pointer" viewBox="0 0 24 24" fill="#94a3b8" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                            fill={star <= userRating ? '#f2b00a' : '#94a3b8'}
                                        />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>
                    <svg className='w-20 h-20 text-gray-400'>
                        <circle cx='10' cy='10' r='8' fill='currentColor' />
                    </svg>
                </div>
            </div>
            {/* Big dot at the bottom */}
            <div className='flex justify-center gap-1 pb-10'>
                <svg className='w-20 h-20 text-gray-400'>
                    <circle cx='10' cy='10' r='8' fill='currentColor' />
                </svg>
                <svg className='w-20 h-20 text-yellow-400'>
                    <circle cx='10' cy='10' r='8' fill='currentColor' />
                </svg>
                <svg className='w-20 h-20 text-gray-400'>
                    <circle cx='10' cy='10' r='8' fill='currentColor' />
                </svg>
            </div>

        </div>
    );
};

export default FifthSection;