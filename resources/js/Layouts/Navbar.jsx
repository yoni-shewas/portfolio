import { HiOutlineDocumentText } from 'react-icons/hi';
import { Link } from 'react-scroll';

export default function Navbar() {
    return (
        <nav className="navbar sticky top-0 z-50 flex flex-col items-center justify-center gap-4 bg-opacity-25 bg-gradient-to-r from-gray-900 via-gray-800 to-blue-800 px-6 py-2 text-white shadow-xl backdrop-blur-lg md:flex-row">
            <ul className="nav-links mb-4 flex flex-1 items-center justify-center gap-10 sm:flex-col md:mb-0 md:flex-row">
                <li className="nav-item block px-4 py-2 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                        className="relative"
                    >
                        Home
                        <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-300 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 group-active:opacity-100" />
                    </Link>
                </li>
                <li className="nav-item block px-4 py-2 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className="relative"
                    >
                        About
                        <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-300 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 group-active:opacity-100" />
                    </Link>
                </li>
                <li className="nav-item block px-4 py-2 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="relative"
                    >
                        Projects
                        <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-300 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 group-active:opacity-100" />
                    </Link>
                </li>
                <li className="nav-item block px-4 py-2 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-2}
                        duration={500}
                        className="relative"
                    >
                        Contact
                        <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-300 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 group-active:opacity-100" />
                    </Link>
                </li>
            </ul>

            <div>
                <button className="btn flex items-center gap-2 bg-blue-600 p-2 px-4 text-white transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                    >
                        <HiOutlineDocumentText className="h-5 w-5" />
                        Resume
                    </a>
                </button>
            </div>
        </nav>
    );
}
