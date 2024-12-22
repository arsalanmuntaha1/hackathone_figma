import { greatVibes, inter } from '@/app/fonts/index';
import Image from 'next/image';
import React from 'react';
import { LuCookie } from 'react-icons/lu';
import { PiWineDuotone } from 'react-icons/pi';
import { SiBurgerking } from 'react-icons/si';

function WhyChooseUs() {
    return (
        <div className={`${inter.className} text-textColor flex gap-32 justify-center py-28 `}>
            <div className="w-1/4">
                {/* <!-- Left Side --> */}
                <div className="flex gap-4">
                    <div>
                        {' '}
                        <Image
                            height={356}
                            width={362}
                            src="/assets/wraps.svg"
                            alt="Tacos"
                            className="rounded-md "
                        />
                    </div>
                    <div>
                        {' '}
                        <Image
                            height={231}
                            width={281}
                            src="/assets/burger.svg"
                            alt="Burger"
                            className="rounded-md mt-[66px] "
                        />
                    </div>
                </div>
                <div className="flex gap-4 pt-4">
                    <div>
                        <Image
                            height={306}
                            width={244}
                            src="/assets/chickenDip.svg"
                            alt="Chicken Dip"
                            className="rounded-md"
                        />
                    </div>

                    <div>
                        <Image
                            height={226}
                            width={221}
                            src="/assets/menu_2.svg"
                            alt="Cheeseburger"
                            className="rounded-md "
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            {' '}
                            <Image
                                height={168}
                                width={161}
                                src="/assets/dip.svg"
                                alt="Fries and Burger"
                                className="rounded-md "
                            />
                        </div>
                        <div>
                            {' '}
                            <Image
                                height={166}
                                width={161}
                                src="/assets/plate.svg"
                                alt="Salad"
                                className="rounded-md "
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Right Side: Text Content --> */}
            <div className="w-1/4">
                <h1 className={`${greatVibes.className} text-primary3 text-[32px]`}>
                    Why Choose us
                </h1>
                <h2 className="text-primary3 font-bold text-5xl mt-2">
                    Ex<span className="text-textColor">tra ordinary taste And Experienced </span>
                </h2>
                <p className="my-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                    pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue
                    urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus
                    risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                </p>
                <div className="flex gap-9 text-center">
                    <div>
                        <div className="p-6 flex bg-primary3 rounded-md">
                            <SiBurgerking size={56} />
                        </div>
                        <p>Fast Food</p>
                    </div>
                    <div>
                        <div className="p-6 bg-primary3 rounded-md">
                            <LuCookie size={56} />
                        </div>
                        <p>Lunch</p>
                    </div>
                    <div>
                        <div className="p-6 bg-primary3 rounded-md">
                            <PiWineDuotone size={56} />
                        </div>
                        <p>Dinner</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;
