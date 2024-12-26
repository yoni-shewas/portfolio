import { Link, useForm } from '@inertiajs/react';

export default function ProfileEdit({ PersonalInfo }) {
    const form = useForm({
        name: PersonalInfo?.name || '',
        bio: PersonalInfo?.bio || '',
        email: PersonalInfo?.email || '',
        phone: PersonalInfo?.phone || '',
        address: PersonalInfo?.address || '',
        profile_image: PersonalInfo?.profile_image || '',
        social_links: PersonalInfo?.social_links || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        form.post('/personal-info/update-or-create', {
            // Use the URL directly
            onSuccess: () => alert('Profile updated successfully!'),
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="flex">
                <Link
                    href="/dashboard"
                    className="text-blue-600 hover:underline"
                >
                    Go back to dashboard
                </Link>
                <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow">
                    <h1 className="mb-4 text-2xl font-bold text-gray-800">
                        Edit Profile
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Name
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
                                Bio
                            </label>
                            <textarea
                                className="mt-1 w-full rounded-md border border-gray-300 p-2"
                                rows="4"
                                value={form.data.bio}
                                onChange={(e) =>
                                    form.setData('bio', e.target.value)
                                }
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                className="mt-1 w-full rounded-md border border-gray-300 p-2"
                                value={form.data.email}
                                onChange={(e) =>
                                    form.setData('email', e.target.value)
                                }
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Phone
                            </label>
                            <input
                                type="text"
                                className="mt-1 w-full rounded-md border border-gray-300 p-2"
                                value={form.data.phone}
                                onChange={(e) =>
                                    form.setData('phone', e.target.value)
                                }
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Address
                            </label>
                            <input
                                type="text"
                                className="mt-1 w-full rounded-md border border-gray-300 p-2"
                                value={form.data.address}
                                onChange={(e) =>
                                    form.setData('address', e.target.value)
                                }
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Profile Image URL
                            </label>
                            <input
                                type="text"
                                className="mt-1 w-full rounded-md border border-gray-300 p-2"
                                value={form.data.profile_image}
                                onChange={(e) =>
                                    form.setData(
                                        'profile_image',
                                        e.target.value,
                                    )
                                }
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Social Links (JSON)
                            </label>
                            <textarea
                                className="mt-1 w-full rounded-md border border-gray-300 p-2"
                                rows="3"
                                value={form.data.social_links}
                                onChange={(e) =>
                                    form.setData('social_links', e.target.value)
                                }
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                        >
                            Save Profile
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
