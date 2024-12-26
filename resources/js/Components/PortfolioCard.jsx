export default function PortfolioCard({ project }) {
    return (
        <div className="flex h-auto max-w-sm flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            <a href={project.project_url || '#'}>
                <div className="relative w-full bg-gray-100">
                    <img
                        className="h-auto w-full"
                        src={project.image_url || '/backup.jpg'}
                        alt={project.title}
                    />
                </div>
            </a>
            <div className="flex flex-1 flex-col p-5">
                <a href={project.project_url || '#'}>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl dark:text-white">
                        {project.title}
                    </h5>
                </a>
                <p className="mb-3 line-clamp-3 text-ellipsis text-sm text-gray-700 sm:text-base dark:text-gray-400">
                    {project.description}
                </p>
                <div className="mb-4">
                    {project.tags &&
                        JSON.parse(project.tags).map((tag, index) => (
                            <span
                                key={index}
                                className="mr-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 sm:text-sm dark:bg-blue-900 dark:text-blue-400"
                            >
                                {tag}
                            </span>
                        ))}
                </div>
                <div className="mb-4">
                    {project.technologies &&
                        JSON.parse(project.technologies).map((tech, index) => (
                            <span
                                key={index}
                                className="mr-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 sm:text-sm dark:bg-green-900 dark:text-green-400"
                            >
                                {tech}
                            </span>
                        ))}
                </div>
            </div>
            <div className="mt-auto flex gap-4 p-5">
                <a
                    href={project.source || '#'}
                    className="inline-flex w-full items-center justify-center rounded-none bg-gray-700 py-2 text-center text-sm font-medium text-white transition hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                    Source
                </a>
                <a
                    href={project.project_url || '#'}
                    className="inline-flex w-full items-center justify-center rounded-none bg-blue-600 py-2 text-center text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4"
                >
                    Preview
                </a>
            </div>
        </div>
    );
}
