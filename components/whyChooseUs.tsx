import { inter } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

function WhyChooseUs() {
    return (
        <div className="bg-black text-white p-8">
            <div className="grid md:grid-cols-2 gap-8">
                {/* <!-- Left Side: Image Grid --> */}
                <div className="grid grid-cols-2 gap-4">
                <div className="row-span-2">
                    <Image height={100} width={100} src="path-to-image1.jpg" alt="Tacos" className="rounded-lg w-full h-full object-cover" />
                </div>
                <div>
                    <Image height={100} width={100} src="path-to-image2.jpg" alt="Burger" className="rounded-lg w-full h-full object-cover" />
                </div>
                <div>
                    <Image height={100} width={100} src="path-to-image3.jpg" alt="Chicken Dip" className="rounded-lg w-full h-full object-cover" />
                </div>
                <div className="col-span-2">
                    <Image height={100} width={100} src="path-to-image4.jpg" alt="Cheeseburger" className="rounded-lg w-full h-full object-cover" />
                </div>
                <div>
                    <Image height={100} width={100} src="path-to-image5.jpg" alt="Fries and Burger" className="rounded-lg w-full h-full object-cover" />
                </div>
                <div>
                    <Image height={100} width={100} src="path-to-image6.jpg" alt="Salad" className="rounded-lg w-full h-full object-cover" />
                </div>
                </div>
                
                {/* <!-- Right Side: Text Content --> */}
                <div className="flex flex-col justify-center">
                <div>
                    <h3 className="text-orange-400 text-xl font-semibold mb-2">Why Choose us</h3>
                    <h2 className="text-4xl font-bold mb-4">
                    <span className="text-orange-400">Extra</span> ordinary taste <br> And Experienced
                    </h2>
                    <p className="text-gray-400 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
                    </p>
                    <div className="flex space-x-8 mb-8">
                    <div className="text-center">
                        <div className="text-orange-400 text-3xl mb-2">🍔</div>
                        <p>Fast Food</p>
                    </div>
                    <div className="text-center">
                        <div className="text-orange-400 text-3xl mb-2">🥗</div>
                        <p>Lunch</p>
                    </div>
                    <div className="text-center">
                        <div className="text-orange-400 text-3xl mb-2">🍷</div>
                        <p>Dinner</p>
                    </div>
                    </div>
                    <div className="text-2xl font-bold">
                    <span className="text-orange-400 text-5xl">30+</span> Years of <span className="text-orange-400">Experienced</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default WhyChooseUs;
