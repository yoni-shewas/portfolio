import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
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
                                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                            <path d="M15 7a2 2 0 0 1 2 2"></path>
                                            <path d="M15 3a6 6 0 0 1 6 6"></path>
                                        </svg>
                                    </div>
                                    <div className="mb-4 ml-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                            Contact
                                        </h3>
                                        <p className="text-gray-600 dark:text-slate-400">
                                            Mobile: +251 911 111 111
                                        </p>
                                        <p className="text-gray-600 dark:text-slate-400">
                                            Email: yonatanmekuriya@gmail.com
                                        </p>
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
