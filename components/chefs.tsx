import React from 'react';
import ChefCard from './chefCard';
import { greatVibes, helvetica, inter } from '@/app/fonts/index';
import Button from './ui/Button';

function Chefs() {
    return (
        <div
            className={`${inter.className} bg-[url("/assets/MaskGroup1.png")] bg-cover bg-no-repeat bg-center text-textColor py-28`}
        >
            <div className="place-items-center">
                <h1 className={`${greatVibes.className} text-primary3 text-[32px]`}>Chefs</h1>
                <h2 className={`${helvetica.className} text-primary3 font-bold text-5xl`}>
                    Me<span className="text-textColor">et Our Chef</span>
                </h2>
            </div>
            <div className="flex gap-6 py-14 justify-center">
                <ChefCard image="/assets/chef1.svg" name="D.Estwood" info="Chief Chef" />
                <ChefCard image="/assets/chef2.svg" name="D.Scoriesh" info="Assistant Chef" />
                <ChefCard image="/assets/chef3.svg" name="M. William" info="Advertising Chef" />
                <ChefCard image="/assets/chef4.svg" name="W.Readfroad" info="Chef" />
            </div>
            <div className="place-self-center">
                <Button
                    title="See More"
                    className="border-[1px] bg-transparent border-primary3 rounded-[25px] py-[13px] px-[41px] hover:bg-primary3 hover:border-textColor"
                />
            </div>
        </div>
    );
}

export default Chefs;
