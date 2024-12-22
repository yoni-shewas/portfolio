import {
    SiCplusplus,
    SiCss3,
    SiDotnet,
    SiGo,
    SiHtml5,
    SiJavascript,
    SiKotlin,
    SiNodedotjs,
    SiOracle,
    SiPhp,
    SiPython,
    SiReact,
    SiRuby,
    SiSwift,
} from 'react-icons/si';

export default function Languages({ languages }) {
    const iconMap = {
        javascript: <SiJavascript className="text-blue-500" size={50} />,
        python: <SiPython className="text-blue-500" size={50} />,
        react: <SiReact className="text-blue-500" size={50} />,
        nodejs: <SiNodedotjs className="text-blue-500" size={50} />,
        php: <SiPhp className="text-blue-500" size={50} />,
        html5: <SiHtml5 className="text-blue-500" size={50} />,
        css3: <SiCss3 className="text-blue-500" size={50} />,
        csharp: <SiDotnet className="text-blue-500" size={50} />,
        go: <SiGo className="text-blue-500" size={50} />,
        ruby: <SiRuby className="text-blue-500" size={50} />,
        swift: <SiSwift className="text-blue-500" size={50} />,
        kotlin: <SiKotlin className="text-blue-500" size={50} />,
        java: <SiOracle className="text-blue-500" size={50} />,
        cplusplus: <SiCplusplus className="text-blue-500" size={50} />,
    };

    return (
        <div
            id="languages-container"
            className="mt-0 flex snap-x flex-col items-center justify-center overflow-x-auto pb-10 pt-0"
        >
            <h2 className="mb-6 text-4xl font-bold text-gray-200">
                Languages & Technologies
            </h2>

            <div className="flex gap-4">
                {languages.map((language, index) => (
                    <div
                        key={index}
                        className="flex cursor-pointer flex-col items-center opacity-80 transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-100"
                    >
                        {iconMap[language.name.toLowerCase()] || (
                            <div className="text-gray-400">Icon Missing</div>
                        )}
                        <p className="mt-2 text-sm text-gray-700">
                            {language.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
