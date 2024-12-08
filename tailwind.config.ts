import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary1: '#195A00',
                secondary1: '#AF872F',
                primary2: '#BC9A6C',
                secondary2: '#EDEAE3',
                primary3: '#FF9F0D',
                secondary3: '#999966',
                textColor: '#FFFFFF',
                bg: '#0D0D0D',
                grey: '#4F4F4F',
            },
            backgroundImage: {
                hero_img: "url('/assets/heroBg.svg')",
            },
        },
    },
    plugins: [],
};
export default config;
