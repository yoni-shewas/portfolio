import { Link } from '@inertiajs/react';
export default function DashboardNav() {
    const navigationItems = [
        { name: 'Projects', href: '/projects' },
        { name: 'Skills', href: '/language' },
        { name: 'Profile Info', href: '/PersonalInfo' },
        { name: 'Contact Messages', href: '/contact-messages' },
    ];

    return (
        <nav className="w-64 space-y-2 bg-gray-800 py-4 text-white">
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
    );
}
