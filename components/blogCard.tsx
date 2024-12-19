import { inter } from '@/app/layout';
import Image from 'next/image';
import React from 'react';
import { FaRegThumbsUp, FaShareAlt } from 'react-icons/fa';
import { PiChatText } from 'react-icons/pi';

type blogProps={
    image: string,
    date: string,
    details: string,
}
function BlogCard({image, date, details}:blogProps) {
    return (
        <div className={`${inter.className} text-textColor border-[1px] w-1/5 rounded-xl relative z-0 transition-all duration-300 hover:scale-110  shadow-[0px_10px_15px_-3px_rgba(231,_215,_157,_0.15)] border-textColor`}>
            <div>
                <Image src={image} alt="blogCard" height={349} width={423} className='rounded-xl'/>
            </div>
            <div className='my-5 px-10'>
                <p className='text-primary3'>{date}</p>
                <h5 className='font-bold text-2xl pt-4 pb-8'>{details}</h5>
                <div className='flex justify-between'>
                    <button>Learn More</button>
                    <div className='flex gap-2'>
                    <FaRegThumbsUp size={24}/>
                    <PiChatText size={24} className='text-primary3'/>
                    <FaShareAlt size={24}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
