import About from '@/Layouts/About';
import Contact from '@/Layouts/Contact';
import Footer from '@/Layouts/Footer';
import Hero from '@/Layouts/Hero';
import Languages from '@/Layouts/Languages';
import Navbar from '@/Layouts/Navbar';
import Portfolio from '@/Layouts/Portfolio';

export default function Home({ PersonalInfo, languages, projects }) {
    return (
        <div className="flex min-h-screen flex-col scroll-smooth bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900">
            <Navbar />
            <main className="flex flex-grow flex-col gap-10 scroll-smooth px-4 md:px-10 lg:px-20">
                <Hero PersonalInfo={PersonalInfo} />
                <About PersonalInfo={PersonalInfo} />
                <Languages languages={languages} />
                <Portfolio projects={projects} />
                <Contact PersonalInfo={PersonalInfo} />
            </main>
            <Footer />
        </div>
    );
}
