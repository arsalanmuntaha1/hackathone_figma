import React from 'react';
import Navbar from './navbar';

function Hero() {
    return <div className='bg-[url("/assets/heroBg.svg")] bg-blend-overlay h-[950px] bg-no-repeat bg-cover'>
        <div className=' bg-[#0D0D0D] opacity-[95%] h-[950px]'><Navbar/></div>
        
    </div>;
}

export default Hero;
