import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const { auth } = usePage().props;
    const user = auth.user;

    const navigationItems = [
        { name: 'Projects', href: '/projects' },
        { name: 'Skills', href: '/language' },
        { name: 'Profile Info', href: '/PersonalInfo' },
        { name: 'Contact Messages', href: '/contact-messages' },
    ];

    return (
        <AuthenticatedLayout header="Dashboard">
            <div className="min-h-screen bg-gray-100">
                <div className="flex">
                    <aside className="h-160 w-64 bg-gray-800 text-white">
                        <nav className="space-y-2 py-4">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-4 py-2 text-sm hover:bg-gray-700"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </aside>

                    <main className="flex-1 flex-wrap p-6">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {navigationItems.map((item) => (
                                <div
                                    key={item.name}
                                    className="rounded-lg bg-white p-4 shadow transition hover:shadow-lg"
                                >
                                    <h2 className="text-lg font-semibold text-gray-700">
                                        {item.name}
                                    </h2>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Manage and view your{' '}
                                        {item.name.toLowerCase()} here.
                                    </p>
                                    <Link
                                        href={item.href}
                                        className="mt-4 inline-block text-blue-600 hover:underline"
                                    >
                                        Go to {item.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
