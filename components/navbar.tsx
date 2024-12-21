import { inter } from '@/app/layout';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { MdKeyboardArrowDown } from 'react-icons/md';

function Navbar() {
    return (
        <div className="pt-[45px] ">
            <div className="text-center pb-4 ">
                <h1 className="font-bold text-2xl text-primary3">
                    Food
                    <span className="text-textColor">tuck</span>
                </h1>
            </div>
            <div className="container flex justify-between items-center">
                <div className="">
                    <ul className="text-textColor flex gap-8 ">
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Blog</li>
                        <li>Pages</li>
                        <li className="flex">
                            About <MdKeyboardArrowDown className="self-center " />{' '}
                        </li>
                        <li>Shop</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="flex gap-2">
                    <div
                        className={`${inter.className} flex border-[1px] rounded-[27px] border-primary3 py-[14px] px-[26px]`}
                    >
                        <input type="search" placeholder="Search..." className="bg-transparent" />
                        <FiSearch color="#FFFFFF" size={24} />
                    </div>
                    <LiaShoppingBagSolid size={24} color="#FFFFFF" className="self-center " />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
