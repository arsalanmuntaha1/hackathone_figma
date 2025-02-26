import { greatVibes, helvetica, inter } from '@/app/fonts/index';
import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import Button from './ui/Button';

function ResturantActiveProcess() {
    return (
        <div
            className={`${inter.className} bg-[url("/assets/resturant.svg")] bg-no-repeat bg-cover flex justify-center text-right py-28  text-textColor`}
        >
            <div className="w-1/3"></div>
            <div className="w-1/3">
                {' '}
                <h1 className={`${greatVibes.className} text-primary3 text-[32px]`}>
                    Restaurant Active Process
                </h1>
                <h2 className={`${helvetica.className} text-primary3 font-bold text-5xl`}>
                    We{' '}
                    <span className="text-textColor">
                        Document Every Food Bean Process untile it is saved
                    </span>
                </h2>
                <p className="py-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                    pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue
                    urna,{' '}
                </p>
                <div className="flex gap-6 float-right">
                   <Button title='Read More' className="border-[1px] border-primary3 font-bold rounded-[30px] py-[18px] px-[59px] transition-all hover:border-textColor hover:bg-primary3 "/>
                    <div className="p-[18px] bg-primary3 rounded-full transition-all hover:text-primary3 hover:bg-textColor ">
                        {' '}
                        <CiPlay1 size={24} />
                    </div>
                    <span className="font-bold content-center">Play Video</span>
                </div>
            </div>
        </div>
    );
}

export default ResturantActiveProcess;
