import PortfolioCard from '../Components/PortfolioCard';

export default function Portfolio() {
    const portfolioCards = Array.from({ length: 10 });

    return (
        <div
            id="projects"
            className="flex flex-col items-center justify-center px-4 py-5 pb-10 sm:px-6 lg:px-8"
        >
            <h2 className="mb-6 text-4xl font-bold text-blue-400">Portfolio</h2>

            <div className="relative w-full overflow-x-auto">
                <div className="flex snap-x snap-mandatory gap-6 scroll-smooth pb-4 sm:snap-x md:pb-6">
                    {portfolioCards.map((_, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 p-4 shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
                        >
                            <PortfolioCard />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
