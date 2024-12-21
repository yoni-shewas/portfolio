import PortfolioCard from '../Components/PortfolioCard';

export default function Portfolio() {
    const portfolioCards = Array.from({ length: 10 });

    return (
        <div
            id="projects"
            className="flex flex-col items-center justify-center pb-10"
        >
            <h2 className="mb-6 text-4xl font-bold text-blue-400">Portfolio</h2>

            <div className="scrollbar-hidden relative h-full w-full snap-x overflow-x-hidden hover:overflow-x-scroll">
                <div className="flex gap-8">
                    {portfolioCards.map((_, index) => (
                        <div
                            key={index}
                            className="flex cursor-pointer flex-col items-center transition-all duration-300 ease-in-out hover:scale-105"
                        >
                            <PortfolioCard />
                        </div>
                    ))}
                </div>

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-800 blur-3xl"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2))',
                    }}
                ></div>
            </div>
        </div>
    );
}
