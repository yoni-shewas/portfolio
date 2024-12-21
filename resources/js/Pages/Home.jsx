import About from '@/Layouts/About';
import Hero from '@/Layouts/Hero';
import Navbar from '@/Layouts/Navbar';
export default function Home() {
    return (
        <div className="align-center mg-0 flex min-h-screen flex-col gap-20 bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900">
            <Navbar />
            <Hero />
            <About />
        </div>
    );
}
