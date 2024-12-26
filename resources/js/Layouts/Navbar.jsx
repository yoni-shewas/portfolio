import { useState } from 'react';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { Link } from 'react-scroll';
import resume from '../src/Yonatan_Shewamoltot.pdf';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-blue-800 px-6 py-3 text-white shadow-md backdrop-blur-md">
            <div className="flex items-center justify-between">
                <div className="text-xl font-bold">MyPortfolio</div>

                {/* Hamburger Icon */}
                <button
                    className={`relative z-50 text-2xl md:hidden`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    {isOpen ? '✖' : '☰'}
                </button>

                {/* Navigation Menu */}
                <ul
                    className={`fixed left-0 top-0 max-h-screen w-full transform scroll-smooth bg-gray-900 bg-opacity-95 p-6 text-lg transition-transform duration-300 md:static md:flex md:h-auto md:w-auto md:bg-transparent md:p-0 ${
                        isOpen
                            ? 'translate-x-0'
                            : '-translate-x-full md:translate-x-0'
                    }`}
                >
                    {[
                        { label: 'Home', to: 'home', offset: -150 },
                        { label: 'About', to: 'about', offset: -50 },
                        { label: 'Projects', to: 'projects', offset: -70 },
                        { label: 'Contact', to: 'contact', offset: -2 },
                    ].map((item) => (
                        <li
                            key={item.to}
                            className="block scroll-smooth px-4 py-2"
                        >
                            <Link
                                activeClass="text-blue-400 underline underline-active underline-offset-6"
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={item.offset}
                                duration={500}
                                className="group relative scroll-smooth transition-all transition-transform duration-300 ease-in-out hover:text-blue-400"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 h-[3px] w-full scale-x-0 bg-blue-400 transition-all duration-300 ease-in-out group-hover:scale-x-100" />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Resume Button */}
                <div className="hidden md:block">
                    <a
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                        <HiOutlineDocumentText className="h-5 w-5" />
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    );
}
