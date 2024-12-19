import About from '@/components/about';
import Blog from '@/components/blog';
import Chefs from '@/components/chefs';
import Clients from '@/components/clients';
import FoodCategory from '@/components/foodCategory';
import Hero from '@/components/hero';
import Menu from '@/components/menu';
import ResturantActiveProcess from '@/components/resturantActiveProcess';
import Testimonials from '@/components/testimonials';
import WhyChooseUs from '@/components/whyChooseUs';

export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <FoodCategory />
            <WhyChooseUs />
            <Clients />
            <Menu />
            <Chefs />
            <Testimonials />
            <ResturantActiveProcess />
            <Blog />
        </div>
    );
}
