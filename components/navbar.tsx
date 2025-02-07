'use client';
import { helvetica, inter } from '@/app/fonts/index';
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { LiaShoppingBagSolid } from 'react-icons/lia';

function Navbar() {
    const [searchInputCollapse, setSearchInputCollapse] = useState(false);
    const [isMenuOpen, setisMenuOpen] = useState(false);

    return (
        <div className={`${inter.className} pt-[45px] `}>
            <div className="container-fluid flex justify-between md:text-center mb-9 md:mb-4">
                <h1 className={`${helvetica.className} font-bold text-2xl text-primary3`}>
                    Food
                    <span className="text-textColor">tuck</span>
                </h1>
                <GiHamburgerMenu
                    className="text-textColor md:hidden"
                    size={24}
                    onClick={() => setisMenuOpen(!isMenuOpen)}
                />
            </div>
            <div
                className={`container-fluid ${
                    isMenuOpen ? 'hidden' : ''
                } flex justify-between md:gap-2 flex-col lg:flex-row`}
            >
                <ul className="text-textColor text-lg md:text-base flex flex-col md:flex-row gap-x-8 gap-y-4">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Blog</li>
                    <li>Pages</li>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>
                <div className="flex gap-2 mt-9 md:mt-4">
                    <div
                        className={`${inter.className} flex border-[1px] rounded-[27px] border-primary3 py-2 px-2 md:py-[14px] md:px-[14px]`}
                    >
                        <input
                            type="search"
                            placeholder="Search..."
                            className={`bg-transparent ${
                                searchInputCollapse ? 'w-0' : 'w-[200px]'
                            } transition-all`}
                        />
                        <FiSearch
                            color="#FFFFFF"
                            size={24}
                            onClick={() => setSearchInputCollapse(!searchInputCollapse)}
                        />
                    </div>
                    <LiaShoppingBagSolid size={24} color="#FFFFFF" className="self-center " />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
