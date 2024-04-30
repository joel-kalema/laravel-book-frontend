import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div className='h-[70dvh] w-[100%] home py-10'>
                <div className='text-[#fff] flex justify-center items-center'>
                    <div className='w-[3rem] h-[.3rem] bg-white'></div>
                    <h1 className='mx-2  text-3xl font-bold underline'>amazon</h1>
                    <div className='w-[3rem] h-[.3rem] bg-white'></div>
                </div>
                <div>
                    <form onsubmit="event.preventDefault();" role="search" className='mx-auto my-10'>
                        <label for="search">Search for stuff</label>
                        <input id="search" type="search" placeholder="Search..." autofocus required />
                        <button type="submit">Go</button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default HomePage;