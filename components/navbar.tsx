'use client';
import { helvetica, inter } from '@/app/fonts/index';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { LiaShoppingBagSolid } from 'react-icons/lia';

function Navbar() {
    const [searchInputCollapse, setSearchInputCollapse] = useState(false);

    return (
        <div className={`${inter.className} pt-[45px] `}>
            <div className="container-fluid flex justify-between md:text-center pb-4">
                <h1 className={`${helvetica.className} font-bold text-2xl text-primary3`}>
                    Food
                    <span className="text-textColor">tuck</span>
                </h1>
                <GiHamburgerMenu className="text-textColor" size={24} />
            </div>
            <div className="container-fluid flex justify-between md:gap-2 flex-col lg:flex-row">
                <ul className="text-textColor  flex flex-col md:flex-row gap-x-8 gap-y-2">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Blog</li>
                    <li>Pages</li>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>
                <div className="flex gap-2">
                    <div
                        className={`${inter.className} flex border-[1px] rounded-[27px] border-primary3 py-[14px] px-[14px]`}
                        onMouseOver={() => setSearchInputCollapse(false)}
                        onMouseOut={() => setSearchInputCollapse(true)}
                    >
                        <input
                            type="search"
                            placeholder="Search..."
                            className={`bg-transparent ${
                                searchInputCollapse ? 'max-w-0' : 'max-w-[200px]'
                            } transition-all`}
                        />
                        <FiSearch color="#FFFFFF" size={24} />
                    </div>
                    <LiaShoppingBagSolid size={24} color="#FFFFFF" className="self-center " />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
