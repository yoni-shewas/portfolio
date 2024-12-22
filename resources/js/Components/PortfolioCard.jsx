import image from '../src/backup.jpg';

export default function PortfolioCard() {
    return (
        <div className="max-w-sm border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            <a href="#">
                <img
                    className="h-56 w-full object-cover"
                    src={image}
                    alt="Portfolio image"
                />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy Technology Acquisitions
                    </h5>
                </a>
                <p className="mb-3 text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                </p>

                {/* Tag Section */}
                <div className="mb-4">
                    <span className="mr-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-400">
                        Technology
                    </span>
                    <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-400">
                        Acquisition
                    </span>
                </div>

                {/* Buttons Section */}
                <div className="flex gap-4">
                    <a
                        href="#"
                        className="inline-flex w-full items-center justify-center rounded-none bg-gray-700 py-2 text-center text-sm font-medium text-white transition hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        Source
                        <svg
                            className="ml-2 h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="inline-flex w-full items-center justify-center rounded-none bg-blue-600 py-2 text-center text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4"
                    >
                        Preview
                        <svg
                            className="ml-2 h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
