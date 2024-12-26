import PortfolioCard from '../Components/PortfolioCard';

export default function Portfolio({ projects }) {
    return (
        <div
            id="projects"
            className="flex flex-col items-center justify-center px-4 py-5 pb-10 sm:px-6 lg:px-8"
        >
            <h2 className="mb-6 text-4xl font-bold text-blue-400">Portfolio</h2>

            <div className="relative w-full overflow-x-auto">
                {' '}
                <div className="flex snap-x snap-mandatory justify-start gap-6 scroll-smooth pb-4 sm:snap-x md:pb-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 transform p-4 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
                        >
                            <PortfolioCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
