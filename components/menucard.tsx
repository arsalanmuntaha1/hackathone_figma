import { inter } from '@/app/fonts/index';
import Image from 'next/image';
import React from 'react';
type MenucardProps = {
    image: string; // Path to the image
    name: string; // Name of the menu item
    info: string; // Description or additional information
    price: string; // Price of the menu item
    className?: string;
};
function Menucard({ image, name, info, price, className }: MenucardProps) {
    return (
        <div className={`${className} ${inter.className} text-textColor flex gap-[9px]`}>
            <div>
                <Image src={image} alt="menucard" height={79} width={80} className="rounded-md" />
            </div>
            <div>
                <h1 className="font-bold text-xl">{name}</h1>
                <p className="text-sm py-1">{info}</p>
                <p className="text-lg font-bold text-primary3">{price}</p>
            </div>
        </div>
    );
}

export default Menucard;
