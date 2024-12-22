import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
    const [notification, setNotification] = useState('');

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text).then(
            () => {
                setNotification(`${type} copied to clipboard!`);
                setTimeout(() => setNotification(''), 3000); // Clear after 3 seconds
            },
            (err) => {
                console.error('Failed to copy: ', err);
            },
        );
    };
    return (
        <section id="contact">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mb-4">
                    <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                        <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                            Contact
                        </p>
                        <h2 className="font-heading mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                            Get in Touch
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                            I would love to hear from you. Whether you have a
                            question about my work, want to collaborate on a
                            project, or just want to say hi, feel free to drop
                            me a message.
                        </p>
                    </div>
                </div>
                <div className="flex items-stretch justify-center">
                    <div className="grid md:grid-cols-2">
                        <div className="h-full pr-6">
                            <ul className="mb-6 md:mb-0">
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-6 w-6"
                                        >
                                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                                        </svg>
                                    </div>
                                    <div className="mb-4 ml-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                            My Address
                                        </h3>
                                        <p className="text-gray-600 dark:text-slate-400">
                                            Addis Ababa, Ethiopia
                                        </p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="mb-4 ml-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                            Contact
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <p className="text-gray-600 dark:text-slate-400">
                                                Mobile: +251 911 111 111
                                            </p>
                                            <button
                                                className="ml-2 flex items-center text-sm text-blue-500 hover:text-blue-700"
                                                onClick={() =>
                                                    handleCopy(
                                                        '+251 911 111 111',
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
                                                    className="mr-1 h-5 w-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M8.25 15.75v3a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0020.25 18v-7.5M15.75 3.75h-7.5A2.25 2.25 0 006 6v10.5a2.25 2.25 0 002.25 2.25h7.5M15 9.75h3.75M6.75 12h4.5"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="mt-2 flex items-center justify-between">
                                            <p className="text-gray-600 dark:text-slate-400">
                                                Email: yonatanmekuriya@gmail.com
                                            </p>
                                            <button
                                                className="ml-2 flex items-center text-sm text-blue-500 hover:text-blue-700"
                                                onClick={() =>
                                                    handleCopy(
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
                                                    className="mr-1 h-5 w-5"
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
                                            <div className="mt-4 rounded bg-green-100 p-2 text-center text-sm text-green-700">
                                                {notification}
                                            </div>
                                        )}
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-6 w-6"
                                        >
                                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                            <path d="M12 7v5l3 3"></path>
                                        </svg>
                                    </div>
                                    <div className="mb-4 ml-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                            Working Hours
                                        </h3>
                                        <p className="text-gray-600 dark:text-slate-400">
                                            Monday - Friday: 5:00 - 9:00
                                        </p>
                                        <p className="text-gray-600 dark:text-slate-400">
                                            Saturday & Sunday: 12:00 - 1:00
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="card h-fit max-w-6xl p-5 md:p-12"
                            id="form"
                        >
                            <h2 className="mb-4 text-2xl font-bold dark:text-white">
                                Ready to Get Started?
                            </h2>
                            <form id="contactForm">
                                <div className="mb-6">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Your name"
                                            className="mb-2 w-full border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0 dark:text-gray-300"
                                            required
                                        />
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Your email address"
                                            className="mb-2 w-full border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0 dark:text-gray-300"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <textarea
                                        id="textarea"
                                        name="textarea"
                                        cols="30"
                                        rows="5"
                                        placeholder="Write your message..."
                                        className="mb-2 w-full border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0 dark:text-gray-300"
                                        required
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="font-xl w-full bg-blue-800 px-6 py-3 text-white sm:mb-0"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-center">
                    <a
                        href="https://github.com/Yonatan"
                        className="mx-3 text-2xl text-blue-600 dark:text-blue-400"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/Yonatan"
                        className="mx-3 text-2xl text-blue-600 dark:text-blue-400"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://x.com/Yonatan"
                        className="mx-3 text-2xl text-blue-600 dark:text-blue-400"
                        target="_blank"
                        rel="noopener noreferrer"
                    ></a>
                </div>
            </div>
        </section>
    );
}
