import Lottie from 'lottie-react';
import { useState } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import animationData from '../src/programmer.json';

export default function About({ PersonalInfo }) {
    const [notification, setNotification] = useState('');

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text).then(
            () => {
                setNotification(`${type} copied to clipboard!`);
                setTimeout(() => setNotification(''), 3000);
            },
            (err) => {
                console.error('Failed to copy: ', err);
            },
        );
    };

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
                    {PersonalInfo && PersonalInfo.bio ? (
                        <>{PersonalInfo.bio}</>
                    ) : (
                        <>
                            Hello! I’m{' '}
                            <span className="text-blue-400">Yonatan.</span>{' '}
                            <br className="m-0 p-1" />
                            I’m a web developer specializing in JavaScript,
                            React, Django, and building user-centric
                            applications. Passionate about solving complex
                            problems and creating intuitive UIs. I’m always
                            exploring new technologies and eager to collaborate
                            on innovative web projects.
                        </>
                    )}
                </p>

                <h2 className="mb-6 text-4xl font-bold text-blue-400">
                    Contact
                </h2>
                <div className="mb-4">
                    <div className="flex items-center gap-4 border-b border-gray-700 pb-4">
                        <div className="flex items-center">
                            <FaPhone className="mr-3 h-5 w-5 text-blue-400" />
                            <p className="text-gray-300">
                                {PersonalInfo?.phone || '+251 912 345 678'}
                            </p>
                        </div>
                        <button
                            className="flex items-center text-sm text-blue-500 hover:text-blue-700"
                            onClick={() =>
                                handleCopy(
                                    PersonalInfo?.phone || '+251 912 345 678',
                                    'Mobile number',
                                )
                            }
                            aria-label="Copy mobile number"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 15.75v3a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0020.25 18v-7.5M15.75 3.75h-7.5A2.25 2.25 0 006 6v10.5a2.25 2.25 0 002.25 2.25h7.5M15 9.75h3.75M6.75 12h4.5"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                        <div className="flex items-center">
                            <FaEnvelope className="mr-3 h-5 w-5 text-blue-400" />
                            <p className="mr-0 pr-1 text-gray-300">
                                {PersonalInfo?.email ||
                                    'yonatanmekuriya@gmail.com'}
                            </p>
                        </div>
                        <button
                            className="flex items-center text-sm text-blue-500 hover:text-blue-700"
                            onClick={() =>
                                handleCopy(
                                    PersonalInfo?.email ||
                                        'yonatanmekuriya@gmail.com',
                                    'Email address',
                                )
                            }
                            aria-label="Copy email address"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 15.75v3a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0020.25 18v-7.5M15.75 3.75h-7.5A2.25 2.25 0 006 6v10.5a2.25 2.25 0 002.25 2.25h7.5M15 9.75h3.75M6.75 12h4.5"
                                />
                            </svg>
                        </button>
                    </div>
                    {notification && (
                        <div className="mt-4 rounded bg-blue-200 p-2 text-center text-sm text-green-700">
                            {notification}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
