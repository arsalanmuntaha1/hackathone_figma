import React from 'react';
import Navbar from './navbar';
import Image from 'next/image';
import { FaFacebookF, FaPinterestP, FaTwitter } from 'react-icons/fa';

import { Great_Vibes, Inter } from 'next/font/google';
import Button from './ui/Button';
import { helvetica } from '@/app/fonts';

const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight: '400',
});

const inter = Inter({
    subsets: ['latin'],
});

function Hero() {
    return (
        <div className={`${inter.className} bg-[url("/assets/heroBg.svg")] bg-blend-overlay h-[950px] bg-no-repeat bg-cover`}>
            <div className=" bg-[#0D0D0D] opacity-[85%] h-[950px]">
                <Navbar />
                <div className="container-fluid pt-10 flex justify-between">
                    <div className="w-1/12 flex gap-10 text-white items-center place-content-end p-8">
                        <div className="flex flex-col items-center">
                            <div className="w-px bg-gray-700 h-36"></div>
                            <ul className="grid gap-5 px-2 py-5">
                                <li>
                                    <FaFacebookF className='hover:text-primary3'/>
                                </li>
                                <li>
                                    <FaTwitter className='hover:text-primary3'/>
                                </li>
                                <li>
                                    <FaPinterestP className='hover:text-primary3'/>
                                </li>
                            </ul>
                            <div className="w-px bg-gray-700 h-36"></div>
                        </div>
                    </div>
                    <div className="w-4/12 flex gap-10 text-white items-center">
                        <div className="grid gap-2">
                            <pre className={`text-primary3 text-2xl lg:text-3xl ${greatVibes.className}`}>
                                Its Quick & Amusing!
                            </pre>
                            <div className="grid gap-8">
                                <h2 className={`${helvetica.className} text-6xl font-bold`}>
                                    <strong className="text-primary3">Th</strong>e Art of speed food
                                    Quality
                                </h2>
                                <p className={`text-lg `}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                                    sed pharetra dictum neque massa congue
                                </p>
                                <Button
                                    title="See Menu"
                                    className="rounded-full py-4 px-14 w-fit hover:text-primary3 hover:bg-textColor"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-7/12 flex place-content-end">
                        <Image
                            alt="Food Quality"
                            src={'/assets/heroImage.svg'}
                            width={877}
                            height={670}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
