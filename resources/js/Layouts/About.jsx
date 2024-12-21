import Lottie from 'lottie-react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import animationData from '../src/programmer.json';

export default function About() {
    return (
        <div
            id="about"
            className="gap-35 pt-25 flex flex-col items-center justify-center p-20 pb-0 md:flex-row"
        >
            <div className="flex justify-center">
                <Lottie
                    animationData={animationData}
                    loop={true}
                    className="h-80 w-80 md:h-96 md:w-96"
                />
            </div>
            <div className="max-w-xl text-center md:text-left">
                <h2 className="mb-6 text-4xl font-bold text-blue-400">
                    About Me
                </h2>
                <p className="mb-6 text-gray-300">
                    Hello! I'm <span className="text-blue-400">Yonatan.</span>{' '}
                    <br className="m-0 p-1" />
                    I’m a web developer specializing in JavaScript, React,
                    Django, and building user-centric applications. Passionate
                    about solving complex problems and creating intuitive UIs.
                    I’m always exploring new technologies and eager to
                    collaborate on innovative web projects.
                </p>
                <h2 className="mb-6 text-4xl font-bold text-blue-400">
                    Contact
                </h2>
                <div className="flex flex-col items-center gap-4 md:items-start">
                    <p className="flex items-center text-gray-300">
                        <FaEnvelope className="mr-3 h-5 w-5" />
                        yonatanmekuriya@gmail.com
                    </p>
                    <p className="flex items-center text-gray-300">
                        <FaPhone className="mr-3 h-5 w-5" />
                        +251 912 345 678
                    </p>
                </div>
            </div>
        </div>
    );
}
