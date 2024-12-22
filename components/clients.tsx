import { inter } from '@/app/fonts/index';
import Image from 'next/image';
import React from 'react';

function Clients() {
    return (
        <div
            className={`${inter.className} text-textColor bg-[url("/assets/clientbg.svg")] bg-no-repeat bg-cover`}
        >
            <div className="bg-[#0D0D0D] py-28 opacity-[85%] flex gap-[162px] justify-center">
                <div className="flex flex-col gap-6 items-center">
                    <Image src={'/assets/chefs.svg'} alt="chefs" height={120} width={120} />
                    <h5 className="font-bold text-2xl">Professional Chefs</h5>
                    <h3 className="font-bold text-[40px]">420</h3>
                </div>
                <div className="flex flex-col gap-6 items-center">
                    <Image src={'/assets/food.svg'} alt="chefs" height={120} width={120} />
                    <h5 className="font-bold text-2xl">Items Of Food</h5>
                    <h3 className="font-bold text-[40px]">320</h3>
                </div>
                <div className="flex flex-col gap-6 items-center">
                    <Image src={'/assets/experienced.svg'} alt="chefs" height={120} width={120} />
                    <h5 className="font-bold text-2xl">Years Of Experienced</h5>
                    <h3 className="font-bold text-[40px]">30+</h3>
                </div>
                <div className="flex flex-col gap-6 items-center">
                    <Image src={'/assets/customers.svg'} alt="chefs" height={120} width={120} />
                    <h5 className="font-bold text-2xl">Happy Customers</h5>
                    <h3 className="font-bold text-[40px]">220</h3>
                </div>
            </div>
        </div>
    );
}

export default Clients;
