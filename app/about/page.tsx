import Header from '@/components/header';
import { helvetica, inter, miniver } from '../fonts';
import Button from '@/components/ui/Button';
import { PiCoffee, PiPersonLight, PiPlayBold, PiStudent } from 'react-icons/pi';
import Image from 'next/image';
import ChefCard from '@/components/chefCard';

export default function About() {
    return (
        <div className={`${inter.className} bg-textColor`}>
            <Header pageName="About Us" pageRoute="About" />
            <div className="flex gap-32 py-[120px] justify-center">
                <div className="w-1/4 grid grid-cols-4 gap-4">
                    <Image
                        src={'/assets/food (1).svg'}
                        alt="foodItem"
                        height={536}
                        width={336}
                        className="col-span-2 row-span-2 rounded-lg object-cover w-full h-full"
                    />

                    <Image
                        src={'/assets/recentpost1.svg'}
                        alt="foodItem"
                        height={271}
                        width={309}
                        className="rounded-lg col-span-2 pt-9 w-full h-full"
                    />
                    <Image
                        src={'/assets/food (2).svg'}
                        alt="foodItem"
                        height={382}
                        width={309}
                        className="col-span-2 row-span-2 rounded-lg w-full h-full"
                    />
                </div>
                <div className=" w-1/4">
                    <p className={`${miniver.className} text-primary3 text-lg`}>About us</p>
                    <h2 className={`${helvetica.className} font-bold text-5xl text-text pt-2`}>
                        Food is an important part Of a balanced Diet
                    </h2>
                    <p className={`${helvetica.className} text-grey py-8`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                        pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue
                        urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus
                        risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                    </p>
                    <div className="flex gap-4">
                        <Button
                            title="Show more"
                            className="font-bold py-4 px-12 text-textColor rounded-md hover:bg-textColor hover:text-primary3 "
                        />
                        <div className="p-[18px] bg-primary3 rounded-full transition-all hover:text-primary3 hover:bg-textColor drop-shadow-md ">
                            <PiPlayBold size={24} className="text-textColor hover:text-primary3" />
                        </div>
                        <span className="font-bold content-center">Watch Video</span>
                    </div>
                </div>
            </div>
            <div>
                <div className="text-center">
                    <h2 className={`${helvetica.className} font-bold text-5xl text-text`}>
                        Why Choose us
                    </h2>
                    <p className={`${helvetica.className} text-grey pt-2`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br />
                        pellentesque bibendum non dui volutpat fringilla bibendum.{' '}
                    </p>
                </div>
                <div className="flex justify-center py-14">
                    <Image src={'/assets/banner.svg'} alt="banner" height={386} width={1320} />
                </div>
                <div className="py-28 flex justify-center gap-[122px]">
                    <div className=" w-1/5 flex flex-col gap-6 items-center">
                        <PiStudent size={80} />
                        <h5 className={`${helvetica.className} text-text font-bold text-2xl`}>
                            Best Chef
                        </h5>
                        <h3 className={`${helvetica.className} text-center`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                            pellentesque bibendum non dui volutpat
                        </h3>
                    </div>
                    <div className="w-1/5 flex flex-col gap-6 items-center">
                        <PiCoffee size={80} />
                        <h5 className={`${helvetica.className} text-text font-bold text-2xl`}>
                            120 Food Item
                        </h5>
                        <h3 className={`${helvetica.className} text-center`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                            pellentesque bibendum non dui volutpat
                        </h3>
                    </div>
                    <div className="w-1/5 flex flex-col gap-6 items-center">
                        <PiPersonLight size={80} />
                        <h5 className={`${helvetica.className} text-text font-bold text-2xl`}>
                            Clean Environment
                        </h5>
                        <h3 className={`${helvetica.className} text-center`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                            pellentesque bibendum non dui volutpat
                        </h3>
                    </div>
                </div>
            </div>
            <div className="flex gap-6 justify-center mb-[100px]">
                <div className='bg-[url("/assets/Bg.svg")] bg-cover bg-no-repeat h-[460px]'></div>
                <div>
                    <ChefCard image="/assets/chef.svg" name="Mark Henry" info="Owner" />
                    <ChefCard image="/assets/chef.svg" name="Lucky Helen" info="Chef" />
                    <ChefCard image="/assets/chef.svg" name="Moon Henry" info="Founder" />
                    <ChefCard image="/assets/chef.svg" name="Tom Monrow" info="Specialist" />
                </div>
            </div>
        </div>
    );
}
