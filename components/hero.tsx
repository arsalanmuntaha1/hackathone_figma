import React from 'react';
import Navbar from './navbar';
import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';

function Hero() {
    return <div className='bg-[url("/assets/heroBg.svg")] bg-blend-overlay h-[950px] bg-no-repeat bg-cover'>
        <div className=' bg-[#0D0D0D] opacity-[95%] h-[950px]'>
            <Navbar/>
        <div className="w-[85%] pt-10 flex place-self-center justify-between">
            <div className='w-5/12 flex gap-10 text-white'>
                <div className='relative flex items-center'>
                    <div className='after:content-[""] h-full after:h-full after:bg-white after:w-px after:absolute'>
                        <ul className='grid gap-5 px-2 py-5'>
                            <li>
                                <FaFacebookF />
                            </li>
                            <li>
                                <FaFacebookF />
                            </li>
                            <li>
                                <FaFacebookF />
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <pre>Its Quick & Amusing!</pre>
                    <h2><strong>The</strong> Art of speed food Quality</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
                    <button>
                        See Menu
                    </button>
                </div>
            </div>
            <div className='w-7/12 flex place-content-end'>
                <Image alt='Food Quality' src={'/assets/heroImage.svg'} width={877} height={670}/>
            </div>
        </div>
        </div>
    </div>;
}

export default Hero;
