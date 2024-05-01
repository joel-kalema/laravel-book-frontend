import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div className='h-[60dvh] w-[100%] home py-10'>
                <div className='flex items-center justify-between mx-10'>
                    <div className='text-[#fff] flex justify-center items-center'>
                        <div className='w-[3rem] h-[.3rem] bg-white'></div>
                        <h1 className='mx-2  text-3xl font-bold'>amazon</h1>
                        <div className='w-[3rem] h-[.3rem] bg-white'></div>
                    </div>

                    <div className='w-[3rem] bg-[#fff] rounded-full overflow-hidden'>
                        <img src='/profile.png' alt='about' />
                    </div>
                </div>
                <div>
                    <h1 className='text-6xl mt-20 font-extrabold text-center text-[#fff]'>Explore the Book Store</h1>
                </div>

            </div>

        </div>
    );
};

export default HomePage;