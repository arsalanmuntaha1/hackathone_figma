import { inter } from '@/app/fonts/index';
import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import { PiClockClockwiseLight } from 'react-icons/pi';

function Footer() {
    return (
        <div className={`${inter.className} text-textColor mt-[120px]`}>
            <div className="flex justify-around pb-16">
                <div>
                    <h4 className="text-primary3 font-bold text-[32px] pb-[17px]">
                        St<span className="text-textColor  ">ill You Need Our Support ?</span>
                    </h4>
                    <p>Don’t wait make a smart & logical quote here. Its pretty easy.</p>
                </div>
                <div>
                    <div className="bg-primary3 py-4 pl-5 rounded">
                        <input
                            type="text"
                            className="form-control bg-primary3 placeholder-textColor placeholder-opacity-[59%]"
                            placeholder=" Enter Your Email"
                        />
                        <span className="text-primary3 bg-textColor py-4 px-6 border-2 rounded border-textColor ">
                            Subscribe Now
                        </span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container flex justify-self-center py-[46px] ">
                <div className="w-4/12">
                    <h5 className="font-bold text-2xl mb-6">About Us.</h5>
                    <p>
                        orporate clients and leisure travelers has been relying on Groundlink for
                        dependab safe, and professional chauffeured car service in major cities
                        across World.
                    </p>
                    <div className="flex gap-4 mt-[34px]">
                        <div className="bg-primary3 py-4 px-[19px] rounded-[3px]">
                            <PiClockClockwiseLight size={40} />
                        </div>
                        <div>
                            <p className="text-lg">Opening Houres</p>
                            <p className="text-sm">Mon - Sat(8.00 - 6.00)</p>
                            <p className="text-sm">Sunday - Closed</p>
                        </div>
                    </div>
                </div>
                <div className="w-2/12"></div>
                <div className="w-2/12">
                    <h5 className="font-bold text-2xl mb-6">Useful Links</h5>
                    <ul className="text-xl flex flex-col gap-6">
                        <li>About</li>
                        <li>News</li>
                        <li>Partners</li>
                        <li>Team</li>
                        <li>Menu</li>
                        <li>Contacts</li>
                    </ul>
                </div>
                <div className="w-2/12">
                    <h5 className="font-bold text-2xl mb-6">Help?</h5>
                    <ul className="text-xl flex flex-col gap-6">
                        <li>FAQ</li>
                        <li>Term & conditions</li>
                        <li>Reporting</li>
                        <li>Documentation</li>
                        <li>Support Policy</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className="w-2/12">
                    <h5 className="font-bold text-2xl mb-6">Recent Post</h5>
                    <div className="flex gap-4">
                        <div>
                            <Image
                                src={'/assets/recentpost1.svg'}
                                alt="post"
                                height={48}
                                width={59}
                            />
                        </div>
                        <div>
                            <p className="opacity-[49%]">20 Feb 2022</p>
                            <p className="text-lg">Keep Your Business </p>
                        </div>
                    </div>
                    <div className="flex gap-4 my-[14px]">
                        <div>
                            <Image
                                src={'/assets/recentpost2.svg'}
                                alt="post"
                                height={48}
                                width={59}
                            />
                        </div>
                        <div>
                            <p className="opacity-[49%]">20 Feb 2022</p>
                            <p className="text-lg">Keep Your Business </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <Image
                                src={'/assets/recentpost3.svg'}
                                alt="post"
                                height={48}
                                width={59}
                            />
                        </div>
                        <div>
                            <p className="opacity-[49%]">20 Feb 2022</p>
                            <p className="text-lg">Keep Your Business </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-grey flex justify-around py-[38px]">
                    <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
                    <div className="flex gap-[14px]">
                        <div className="bg-textColor p-2 rounded-sm">
                            <FaFacebookF className="text-grey" />
                        </div>
                        <div className="bg-textColor p-2 rounded-sm">
                            <FaTwitter className="text-grey" />
                        </div>
                        <div className="bg-textColor p-2 rounded-sm">
                            <FaInstagram className="text-grey" />
                        </div>
                        <div className="bg-textColor p-2 rounded-sm">
                            <FaYoutube className="text-primary3" />
                        </div>
                        <div className="bg-textColor p-2 rounded-sm">
                            <FaPinterest className="text-grey" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
