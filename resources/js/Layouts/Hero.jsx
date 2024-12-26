import Lottie from 'lottie-react';
import { Link } from 'react-scroll';
import { SocialIcon } from 'react-social-icons';
import animationData from '../src/animation.json';

export default function Hero({ PersonalInfo }) {
    const socialLinks = PersonalInfo?.social_links
        ? [...new Set(Object.values(JSON.parse(PersonalInfo.social_links)))]
        : [];

    return (
        <>
            <div
                id="home"
                className="flex flex-wrap justify-center gap-10 p-6 py-12 sm:flex-col sm:py-2 md:flex-row md:gap-20"
            >
                {/* Left Section */}
                <div className="flex max-w-lg flex-col items-start justify-center">
                    <p className="mb-2 text-gray-400">Hello, I'm a</p>
                    <h1 className="text-5xl font-bold text-gray-100 sm:text-4xl">
                        Full-Stack Web{' '}
                        <span className="text-blue-400">Developer</span>
                    </h1>
                    <p className="mb-6 mt-4 text-lg text-gray-400">
                        I specialize in building dynamic and responsive web
                        applications with a focus on user-friendly experiences.
                    </p>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <button className="rounded bg-blue-500 px-6 py-3 text-lg text-white shadow-md transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                            View Portfolio
                        </button>
                    </Link>
                </div>

                {/* Right Section */}
                <div className="flex justify-center">
                    <Lottie
                        animationData={animationData}
                        loop={true}
                        className="h-80 w-80 sm:h-96 sm:w-96"
                    />
                </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex flex-col items-center gap-3">
                <h2 className="text-lg font-medium text-gray-300">
                    Connect with me on social media
                </h2>
                <div className="flex gap-4">
                    {socialLinks.map((link, index) => (
                        <SocialIcon
                            key={index}
                            url={link}
                            target="_blank"
                            fgColor="#fff"
                            bgColor="transparent"
                            style={{ height: 50, width: 50 }}
                            className="transition-transform duration-300 hover:scale-110"
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
