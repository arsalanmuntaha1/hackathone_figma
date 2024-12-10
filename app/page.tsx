import About from '@/components/about';
import Chefs from '@/components/chefs';
import Clients from '@/components/clients';
import FoodCategory from '@/components/foodCategory';
import Hero from '@/components/hero';
import Menu from '@/components/menu';
import Testimonials from '@/components/testimonials';
import WhyChooseUs from '@/components/whyChooseUs';

export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            {/* <WhyChooseUs /> */}
            <FoodCategory />
            <Clients />
            <Menu />
            <Chefs/>
            <Testimonials/>
        </div>
    );
}
