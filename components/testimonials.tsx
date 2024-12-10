import { greatVibes, inter } from '@/app/layout';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PiQuotesLight } from 'react-icons/pi';

function Testimonials() {
    return (
        <div className={`${inter.className} w-[100%] place-items-center`}>
            <div className="place-items-center">
                <h1 className={`${greatVibes.className} text-primary3 text-[32px]`}>
                    Testimonials
                </h1>
                <h2 className="text-textColor font-bold text-5xl">What our client are saying</h2>
            </div>
            <div className="bg-textColor rounded-2xl  shadow-custom w-[40%] place-items-center mb-14 mt-28">
                <Image
                    src={'/assets/testimonal.svg'}
                    alt="testimonials"
                    height={133.97}
                    width={132.92}
                    className='relative -top-14 '
                />
                <PiQuotesLight size={48} className="text-primary3" />
                <p className="text-lg text-center px-[86px] py-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                    pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue
                    urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus
                    risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </p>
                <div className="flex gap-2">
                    <FaStar size={24} className="text-primary3" />
                    <FaStar size={24} className="text-primary3" />
                    <FaStar size={24} className="text-primary3" />
                    <FaStar size={24} className="text-primary3" />
                    <FaStar size={24} className="text-[#E0E0E0]" />
                </div>
                <h5 className='font-bold text-2xl py-4'>Alamin Hasan</h5>
                <p className='text-[#828282] pb-8'>Food Specialist</p>
            </div>
            <div className="flex gap-2 justify-center">
                <div className="rounded-full bg-primary3 h-4 w-4"></div>
                <div className="rounded-full bg-primary3 opacity-[30%] h-4 w-4"></div>
                <div className="rounded-full bg-primary3 opacity-[30%] h-4 w-4"></div>
                <div className="rounded-full bg-primary3 opacity-[30%] h-4 w-4"></div>
            </div>
        </div>
    );
}

export default Testimonials;
