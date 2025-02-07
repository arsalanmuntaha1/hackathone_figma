import { inter } from '@/app/fonts/index';
import React from 'react';
import { PiCaretRightBold } from 'react-icons/pi';

function OurMenu() {
    return (
        <div className={`${inter.className} bg-[url-(/assets/menubg.svg)] text-textColor`}>
            <div></div>
            <div className="py-[108px] text-center">
                <h2 className="text-5xl font-bold">Our Menu</h2>
                <div>
                    <p className="text-xl">Home</p>
                    <PiCaretRightBold />
                    <p className="text-xl text-primary3">Menu</p>
                </div>
            </div>
        </div>
    );
}

export default OurMenu;
