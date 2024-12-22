import { inter } from '@/app/fonts/index';
import Image from 'next/image';
import React from 'react';

type chefsProps = {
    image: string;
    name: string;
    info: string;
};
function ChefCard({ image, name, info }: chefsProps) {
    return (
        <div
            className={`${inter.className} text-text relative w-[312px] z-0 transition-all duration-300 hover:scale-110 `}
        >
            <div className="absolute bottom-0 px-5 rounded-bl-[6px] bg-white w-1/2 hover:bg-primary3">
                <p className="font-bold text-lg my-1">{name}</p>
                <p className="text-sm mb-[9px]">{info}</p>
            </div>
            <Image src={image} alt="chefs" height={391} width={312} className="rounded-md" />
        </div>
    );
}

export default ChefCard;
