export default function PortfolioCard({ project }) {
    return (
        <div className="flex h-[500px] max-w-sm flex-col border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
            <a href={project.project_url || '#'}>
                <img
                    className="h-56 w-full bg-gray-100 object-contain p-4"
                    src={project.image_url || '/backup.jpg'}
                    alt={project.title}
                />
            </a>
            <div className="flex flex-1 flex-col p-5">
                <a href={project.project_url || '#'}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {project.title}
                    </h5>
                </a>
                <p className="mb-3 line-clamp-3 overflow-hidden text-ellipsis text-gray-700 dark:text-gray-400">
                    {project.description}
                </p>
                <div className="mb-4">
                    {project.tags &&
                        JSON.parse(project.tags).map((tag, index) => (
                            <span
                                key={index}
                                className="mr-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-400"
                            >
                                {tag}
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
