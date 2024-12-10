import { greatVibes, inter } from '@/app/layout';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import Image from 'next/image';

function About() {
    return (
        <div className={`${inter.className} w-[100%] flex justify-center gap-[98px] mt-[120px] mb-[72px] text-textColor`}>
            <div className=" w-[30%] flex flex-col ">
                <h3 className={`${greatVibes.className} text-[32px] text-primary3`}>About us</h3>
                <p className={`text-primary3 font-bold text-5xl mt-2 mb-8 `}>
                    We <span className="text-textColor">Create the best foody product</span>
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                    pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue
                    urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus
                    risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </p>
                <ul className='flex flex-col gap-6 mt-6 mb-8'>
                    <li className="flex gap-[7px] items-center">
                        <span>
                            <FaCheck />
                        </span>
                        Lacus nisi, et ac dapibus sit eu velit in consequat.
                    </li>
                    <li className="flex gap-[7px] items-center">
                        <span>
                            <FaCheck />
                        </span>
                        Quisque diam pellentesque bibendum non dui volutpat fringilla
                    </li>
                    <li className="flex gap-[7px] items-center">
                        <span>
                            <FaCheck />
                        </span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </li>
                </ul>

                <button className=" py-[18px] px-[54px] text-textColor bg-primary3 rounded-[30px] w-fit">
                    Read More
                </button>
            </div>

            <div className="w-[30%] grid grid-cols-2 grid-rows-2 gap-4">
                <Image
                    src={'/assets/about1.svg'}
                    alt="about"
                    height={330}
                    width={660}
                    className="rounded-md col-span-2 row-span-1"
                />
                <Image
                    src={'/assets/about2.svg'}
                    alt="about"
                    height={194}
                    width={322}
                    className="rounded-md"
                />
                <Image
                    src={'/assets/about3.svg'}
                    alt="about"
                    height={194}
                    width={322}
                    className="rounded-md"
                />
            </div>
        </div>
    );
}

export default About;
