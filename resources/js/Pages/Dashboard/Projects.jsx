import { Link, useForm } from '@inertiajs/react';
import { useState } from 'react';
import { FaProjectDiagram } from 'react-icons/fa';

export default function Projects({ projects }) {
    const {
        data,
        setData,
        post,
        put,
        delete: destroy,
    } = useForm({
        id: null,
        title: '',
        description: '',
        technologies: [],
        image_url: '',
        source: '',
        project_url: '',
        tags: [],
    });

    const [editing, setEditing] = useState(false);

    const handleEditClick = (project) => {
        setData({
            id: project.id,
            title: project.title,
            description: project.description,
            technologies: Array.isArray(project.technologies)
                ? project.technologies
                : project.technologies
                  ? project.technologies.split(',').map((t) => t.trim())
                  : [],
            image_url: project.image_url || '',
            source: project.source || '',
            project_url: project.project_url || '',
            tags: Array.isArray(project.tags)
                ? project.tags
                : project.tags
                  ? project.tags.split(',').map((t) => t.trim())
                  : [],
        });
        setEditing(true);
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this project?')) {
            destroy(route('projects.destroy', id), {
                onSuccess: () => alert('Project deleted successfully!'),
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editing) {
            put(route('projects.update', data.id), {
                onSuccess: () => {
                    alert('Project updated successfully!');
                    setEditing(false);
                    setData({
                        id: null,
                        title: '',
                        description: '',
                        technologies: [],
                        image_url: '',
                        source: '',
                        project_url: '',
                        tags: [],
                    });
                },
            });
        } else {
            console.log(data);
            post(route('projects.store'), {
                onSuccess: () => {
                    alert('Project added successfully!');
                    setData({
                        id: null,
                        title: '',
                        description: '',
                        technologies: [],
                        image_url: '',
                        source: '',
                        project_url: '',
                        tags: [],
                    });
                },
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 px-5 py-8">
            <div className="mx-auto max-w-6xl rounded-md bg-white p-8 shadow-md">
                <Link
                    href="/dashboard"
                    className="mb-6 inline-block text-blue-600 hover:underline"
                >
                    Go back to dashboard
                </Link>
                <h1 className="mb-6 text-3xl font-bold text-gray-800">
                    Manage Projects
                </h1>

                <div className="mb-6 flex flex-wrap gap-4">
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            <div
                                key={project.id}
                                className="relative flex cursor-pointer flex-col items-center rounded-md border bg-gray-100 p-6 shadow-sm transition-all hover:scale-105"
                                onClick={() => handleEditClick(project)}
                            >
                                <FaProjectDiagram
                                    className="text-gray-500"
                                    size={50}
                                />
                                <p className="mt-2 text-lg font-semibold text-gray-800">
                                    {project.title}
                                </p>
                                <p className="mt-1 text-center text-sm text-gray-600">
                                    {project.description.slice(0, 50)}...
                                </p>
                                <button
                                    className="absolute right-0 top-0 rounded bg-red-500 px-2 py-1 text-xs text-white hover:bg-red-600"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDelete(project.id);
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">
                            No projects available. Add a new project to get
                            started.
                        </p>
                    )}
                </div>

                <div className="mt-10 rounded-md bg-gray-50 p-6 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {editing ? 'Edit Project' : 'Add New Project'}
                    </h2>
                    <form className="mt-4" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Project Title
                            </label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) =>
                                    setData('title', e.target.value)
                                }
                                className="mt-1 w-full rounded-md border border-gray-300 p-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                value={data.description}
                                onChange={(e) =>
                                    setData('description', e.target.value)
                                }
                                className="mt-1 w-full rounded-md border border-gray-300 p-2"
                                rows={4}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Technologies (Comma-separated)
                            </label>
                            <input
                                type="text"
                                value={data.technologies.join(', ')}
                                onChange={(e) =>
                                    setData(
                                        'technologies',
                                        e.target.value
                                            .split(',')
                                            .map((t) => t.trim()),
                                    )
                                }
                                className="mt-1 w-full rounded-md border border-gray-300 p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Upload Image
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        const formData = new FormData();
                                        formData.append('image', file);

                                        axios
                                            .post(
                                                route('projects.uploadImage'),
                                                formData,
                                                {
                                                    headers: {
                                                        'Content-Type':
                                                            'multipart/form-data',
                                                    },
                                                },
                                            )
                                            .then((response) => {
                                                setData(
                                                    'image_url',
                                                    response.data.path,
                                                );
                                                alert(
                                                    'Image uploaded successfully!',
                                                );
                                            })
                                            .catch((error) => {
                                                console.error(error);
                                                alert('Failed to upload image');
                                            });
                                    }
                                }}
                                className="mt-1 w-full rounded-md border border-gray-300 p-2"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Source Code URL
                            </label>
                            <input
                                type="url"
                                value={data.source}
                                onChange={(e) =>
                                    setData('source', e.target.value)
                                }
                                className="mt-1 w-full rounded-md border border-gray-300 p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Live Project URL
                            </label>
                            <input
                                type="url"
                                value={data.project_url}
                                onChange={(e) =>
                                    setData('project_url', e.target.value)
                                }
                                className="mt-1 w-full rounded-md border border-gray-300 p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Tags (Comma-separated)
                            </label>
                            <input
                                type="text"
                                value={data.tags.join(', ')}
                                onChange={(e) =>
                                    setData(
                                        'tags',
                                        e.target.value
                                            .split(',')
                                            .map((tag) => tag.trim()),
                                    )
                                }
                                className="mt-1 w-full rounded-md border border-gray-300 p-2"
                            />
                        </div>
                        <button
                            type="submit"
                            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                        >
                            {editing ? 'Update Project' : 'Add Project'}
                        </button>
                        {editing && (
                            <button
                                type="button"
                                className="ml-4 rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                                onClick={() => {
                                    setEditing(false);
                                    setData({
                                        id: null,
                                        title: '',
                                        description: '',
                                        technologies: [],
                                        image_url: '',
                                        source: '',
                                        project_url: '',
                                        tags: [],
                                    });
                                }}
                            >
                                Cancel
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
