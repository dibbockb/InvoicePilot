import Hero from './Landing/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            // disable: 'mobile',
            // easing: 'ease-out-back',
            // offset: 120,
        });

        // Optional but often helpful: refresh AOS after init
        // (especially useful if content loads dynamically later)
        // AOS.refresh();

        // Optional cleanup (rarely needed for AOS, but harmless)
        return () => {
            // AOS doesn't have a built-in destroy, but refresh can help in some cases
            // AOS.refresh();
        };
    }, []); // ← empty array = run once on mount

    return (
        <main>
            <Hero />
        </main>
    );
};

export default Home;