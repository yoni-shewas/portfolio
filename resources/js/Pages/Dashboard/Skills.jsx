import Link from '@/Components/Link';
import { useForm } from '@inertiajs/react';
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

export default function Skills({ languages }) {
    const form = useForm({
        id: null,
        name: '',
        level: '',
        icon_url: '',
    });

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

    const handleEditClick = (language) => {
        form.setData({
            id: language.id,
            name: language.name || '',
            level: language.level || '',
            icon_url: language.icon_url || '',
        });
    };

    const handleDelete = (languageId) => {
        if (confirm('Are you sure you want to delete this language?')) {
            form.delete(route('LanguageController.destroy', languageId), {
                onSuccess: () => alert('Language deleted successfully!'),
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        form.post(route('LanguageController.updateOrCreate'), {
            onSuccess: () => alert('Language updated successfully!'),
        });
    };

    return (
        <div>
            <div className="mt-5 flex snap-x flex-col items-center justify-center overflow-x-auto bg-gray-100 pb-12 pt-2">
                <Link
                    href="/dahsboard"
                    className="text-blue-600 hover:underline"
                >
                    Go back to dashboard
                </Link>
                <h2 className="mb-6 text-4xl font-bold text-blue-600">
                    Languages & Technologies
                </h2>
                <div className="flex gap-4">
                    {languages.map((language, index) => (
                        <div
                            key={index}
                            className="relative flex cursor-pointer flex-col items-center opacity-80 transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-100"
                        >
                            {iconMap[language.name.toLowerCase()] || (
                                <div className="text-gray-400">
                                    Icon Missing
                                </div>
                            )}
                            <p className="mt-2 text-sm text-gray-700">
                                {language.name}
                            </p>
                            <button
                                className="absolute right-0 top-0 rounded bg-red-500 px-2 py-1 text-xs text-white hover:bg-red-600"
                                onClick={() => handleDelete(language.id)}
                            >
                                Delete
                            </button>
                            <button
                                className="mt-2 rounded bg-blue-500 px-3 py-1 text-xs text-white hover:bg-blue-600"
                                onClick={() => handleEditClick(language)}
                            >
                                Edit
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="min-h-screen bg-gray-100 py-8">
                <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow">
                    <h1 className="mb-4 text-2xl font-bold text-gray-800">
                        {form.data.id ? 'Edit Language' : 'Add New Language'}
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Language Name
                            </label>
                            <input
                                type="text"
                                className="mt-1 w-full rounded-md border border-gray-300 p-2"
                                value={form.data.name}
                                onChange={(e) =>
                                    form.setData('name', e.target.value)
                                }
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Skill Level
                            </label>
                            <input
                                type="text"
                                className="mt-1 w-full rounded-md border border-gray-300 p-2"
                                value={form.data.level}
                                onChange={(e) =>
                                    form.setData('level', e.target.value)
                                }
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Icon URL (Optional)
                            </label>
                            <input
                                type="text"
                                className="mt-1 w-full rounded-md border border-gray-300 p-2"
                                value={form.data.icon_url}
                                onChange={(e) =>
                                    form.setData('icon_url', e.target.value)
                                }
                            />
                        </div>
                        <button
                            type="submit"
                            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                        >
                            {form.data.id ? 'Update Language' : 'Add Language'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
