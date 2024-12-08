import { greatVibes } from '@/app/layout';
import { Great_Vibes } from 'next/font/google';
import React from 'react';

function About() {
    return (
        <div>
            <div>
                <h3 className={`${greatVibes.className} text-[32px]`}>About us</h3>
                <p className='text-primary3'>
                    We <span className='text-textColor'>Create the best foody product</span>
                </p>
            </div>
            <div></div>
        </div>
    );
}

export default About;
