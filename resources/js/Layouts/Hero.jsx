import Lottie from 'lottie-react';
import { Link } from 'react-scroll';
import animationData from '../src/animation.json';

export default function Hero() {
    return (
        <div
            id="home"
            className="align-center gap-15 flex justify-center p-5 py-20"
        >
            <div className="items-left w-160 flex flex-col justify-center">
                <p className="my-0 py-0 text-gray-400"> Hello I'm a </p>
                <h1 className="mb-2 mt-0 p-0 pt-0 text-7xl font-bold text-gray-100">
                    Full-Stack Web{' '}
                    <section className="text-blue-400">Developer</section>
                </h1>
                <p className="mb-2 text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
                </p>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <button className="btn bg-blue-500 p-3 px-4 text-gray-100 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Portfolio
                    </button>
                </Link>
            </div>
            <div className="w-80">
                <Lottie
                    animationData={animationData}
                    loop={true}
                    className="h-96 w-96"
                />
            </div>
        </div>
    );
}
