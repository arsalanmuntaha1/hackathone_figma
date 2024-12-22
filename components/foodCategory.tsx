import { greatVibes, inter } from '@/app/fonts/index';
import Image from 'next/image';
import React from 'react';

function FoodCategory() {
    return (
        <div
            className={`${inter.className} bg-[url("/assets/MaskGroup.png")] text-textColor bg-cover bg-no-repeat bg-center py-[120px]`}
        >
            <div className="place-items-center">
                <h1 className={`${greatVibes.className} text-primary3 text-[32px]`}>
                    Food Category
                </h1>
                <h2 className="text-primary3 font-bold text-5xl mt-2 mb-14">
                    Ch<span className="text-textColor">oose Food Iteam</span>
                </h2>
            </div>
            <div className="flex justify-center gap-8">
                <div className="relative z-0 transition-all duration-300 hover:scale-110 hover:font-bold ">
                    {' '}
                    <Image src={'/assets/sushi.svg'} alt="sushi" height={328} width={305} />
                    <p className="absolute bottom-0 py-2 px-5 text-primary3 bg-textColor rounded-r-lg text-xl">
                        Sea Food
                    </p>
                    <div className="absolute top-5 bg-primary3 py-2 px-5 rounded-r-lg ">
                        <p>Save 30%</p>
                    </div>
                </div>
                <div className="relative z-0 transition-all duration-300 hover:scale-110 hover:font-bold ">
                    <Image src={'/assets/burger1.svg'} alt="burger" height={328} width={305} />
                    <p className="absolute bottom-0 py-2 px-5 text-primary3 bg-textColor rounded-r-lg text-xl">
                        Meaty Burger
                    </p>
                </div>

                <div className="relative z-0 transition-all duration-300 hover:scale-110 hover:font-bold ">
                    <Image src={'/assets/salad.svg'} alt="salad" height={328} width={305} />
                    <p className="absolute bottom-0 py-2 px-5 text-primary3 bg-textColor rounded-r-lg text-xl">
                        Russian Salad
                    </p>
                </div>
                <div className="relative z-0 transition-all duration-300 hover:scale-110 hover:font-bold ">
                    <Image src={'/assets/donuts.svg'} alt="donuts" height={328} width={305} />
                    <p className="absolute bottom-0 py-2 px-5 text-primary3 bg-textColor rounded-r-lg text-xl">
                        Desserts
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FoodCategory;
