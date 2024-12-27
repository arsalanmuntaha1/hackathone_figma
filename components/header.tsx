import { helvetica, inter } from '@/app/fonts/index';
import Link from 'next/link';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { PiCaretRightBold, PiUser } from 'react-icons/pi';

type propsType = {
    pageName: string;
    pageRoute: string;
};

function Header({ pageName, pageRoute }: propsType) {
    return (
        <div
            className={`${inter.className} bg-[url("/assets/menubg.svg")] bg-no-repeat bg-cover text-textColor `}
        >
            <div className='flex justify-around py-7 bg-bg'>
                <div>
                    <h5 className="font-bold text-2xl">
                        Food<span className="text-primary3">tuck</span>
                    </h5>
                </div>
                <div>
                    <ul className="flex gap-8">
                        <li className="hover:text-primary3">
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className="hover:text-primary3">
                            <Link href={'/menu'}>Menu</Link>
                        </li>
                        <li className="hover:text-primary3">
                            <Link href={'/blog'}>Blog</Link>
                        </li>
                        <li className="hover:text-primary3">
                            <Link href={'/pages'}>Pages</Link>
                        </li>
                        <li className="hover:text-primary3">
                            <Link href={'/about'}>About</Link>
                        </li>
                        <li className="hover:text-primary3">
                            <Link href={'/shop'}>Shop</Link>
                        </li>
                        <li className="hover:text-primary3">
                            <Link href={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-4">
                    <FiSearch size={24} className="self-center " />
                    <PiUser size={24} className="self-center " />
                    <LiaShoppingBagSolid size={24} className="self-center " />
                </div>
            </div>
            <div className='py-28 place-items-center'>
                <h2 className={`${helvetica.className} font-bold text-5xl `}>{pageName}</h2>
                <div className="flex gap-2 mt-5">
                    <p className="text-xl">Home</p>
                    <PiCaretRightBold className="self-center" />
                    <p className="text-xl text-primary3">{pageRoute}</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
