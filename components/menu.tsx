import { greatVibes, inter } from '@/app/fonts/index';
import Image from 'next/image';
import React from 'react';
import Menucard from './menucard';

function Menu() {
    return (
        <div className={`${inter.className} text-textColor place-items-center mt-[121px] `}>
            <div className="text-center">
                <h1 className={`${greatVibes.className} text-[32px] text-primary3`}>
                    Choose & pick
                </h1>
                <h2 className="font-bold text-5xl text-primary3">
                    Fr<span className="text-textColor">om Our Menu</span>
                </h2>
            </div>
            <div className="py-14">
                <ul className="flex flex-row gap-[100px] text-xl">
                    <li className="hover:text-primary3 hover:font-bold">Breakfast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                    <li>Desert</li>
                    <li>Drink</li>
                    <li>Snack</li>
                    <li>Soups</li>
                </ul>
            </div>
            <div className="flex gap-5">
                <div className="w-1/3">
                    <Image src={'/assets/menudish.svg'} alt="Menu" height={406} width={515} />
                </div>
                <div className="grid grid-cols-2 w-2/3">
                    <Menucard
                        image="/assets/menu_1.svg"
                        name="Lettuce Leaf"
                        info="Lacus nisi, et ac dapibus velit in consequat."
                        price="12.5$"
                    />
                    <Menucard
                        image="/assets/menu_2.svg"
                        name="Fresh Breakfast"
                        info="Lacus nisi, et ac dapibus velit in consequat."
                        price="1.45$"
                    />
                    <Menucard
                        image="/assets/menu_3.svg"
                        name="Mild Butter"
                        info="Lacus nisi, et ac dapibus velit in consequat."
                        price="12.5$"
                    />
                    <Menucard
                        image="/assets/menu_4.svg"
                        name="Fresh Bread"
                        info="Lacus nisi, et ac dapibus velit in consequat."
                        price="12.5$"
                    />
                    <Menucard
                        image="/assets/menu_5.svg"
                        name="Glow Cheese"
                        info="Lacus nisi, et ac dapibus velit in consequat."
                        price="12.5$"
                    />
                    <Menucard
                        image="/assets/menu_6.svg"
                        name="Italian Pizza"
                        info="Lacus nisi, et ac dapibus velit in consequat."
                        price="14.5$"
                    />
                    <Menucard
                        image="/assets/menu_7.svg"
                        name="Slice Beef"
                        info="Lacus nisi, et ac dapibus velit in consequat."
                        price="12.5$"
                    />
                    <Menucard
                        image="/assets/menu_8.svg"
                        name="Mushroom Pizza"
                        info="Lacus nisi, et ac dapibus velit in consequat."
                        price="12.5$"
                    />
                </div>
            </div>
        </div>
    );
}

export default Menu;
