import About from '@/Layouts/About';
import Contact from '@/Layouts/Contact';
import Footer from '@/Layouts/Footer';
import Hero from '@/Layouts/Hero';
import Languages from '@/Layouts/Languages';
import Navbar from '@/Layouts/Navbar';
import Portfolio from '@/Layouts/Portfolio';

export default function Home({ PersonalInfo, languages }) {
    return (
        <div className="align-center mg-0 flex min-h-screen flex-col gap-20 bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900">
            <Navbar />
            <Hero />
            <About PersonalInfo={PersonalInfo} />
            <Languages languages={languages} />
            <Portfolio />
            <Contact PersonalInfo={PersonalInfo} />
            <Footer />
        </div>
    );
}
