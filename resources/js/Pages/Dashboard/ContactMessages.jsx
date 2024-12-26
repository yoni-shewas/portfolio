import { Link, useForm } from '@inertiajs/react';

export default function ContactMessages({ messages }) {
    const form = useForm({
        id: null,
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleViewClick = (message) => {
        form.setData({
            id: message.id,
            name: message.name,
            email: message.email,
            phone: message.phone || 'N/A',
            message: message.message,
        });
    };
    const handleDelete = (messageId) => {
        if (confirm('Are you sure you want to delete this message?')) {
            form.delete(route('ContactMessageController.destroy', messageId), {
                onSuccess: () => {
                    alert('Message deleted successfully!');
                },
            });
        }
    };

    return (
        <div>
            <div className="mt-5 flex flex-col items-center justify-center bg-gray-100 pb-12 pt-2">
                <Link
                    href="/dahsboard"
                    className="text-blue-600 hover:underline"
                >
                    Go back to dashboard
                </Link>
                <h2 className="mb-6 text-4xl font-bold text-blue-600">
                    Contact Messages
                </h2>

                <div className="w-full max-w-5xl overflow-x-auto">
                    <table className="w-full table-auto border-collapse rounded bg-white shadow">
                        <thead className="bg-blue-500 text-white">
                            <tr>
                                <th className="p-4 text-left">Name</th>
                                <th className="p-4 text-left">Email</th>
                                <th className="p-4 text-left">Phone</th>
                                <th className="p-4 text-left">Message</th>
                                <th className="p-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((message) => (
                                <tr
                                    key={message.id}
                                    className="border-t bg-gray-50 hover:bg-gray-100"
                                >
                                    <td className="p-4">{message.name}</td>
                                    <td className="p-4">{message.email}</td>
                                    <td className="p-4">
                                        {message.phone || 'N/A'}
                                    </td>
                                    <td className="truncate p-4">
                                        {message.message.length > 50
                                            ? `${message.message.slice(0, 50)}...`
                                            : message.message}
                                    </td>
                                    <td className="flex justify-center gap-2 p-4">
                                        <button
                                            className="rounded bg-blue-500 px-3 py-1 text-xs text-white hover:bg-blue-600"
                                            onClick={() =>
                                                handleViewClick(message)
                                            }
                                        >
                                            View
                                        </button>
                                        <button
                                            className="rounded bg-red-500 px-3 py-1 text-xs text-white hover:bg-red-600"
                                            onClick={() =>
                                                handleDelete(message.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {form.data.id && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="max-w-lg rounded-lg bg-white p-8 shadow-lg">
                        <h2 className="mb-4 text-2xl font-bold text-gray-800">
                            Message Details
                        </h2>
                        <p>
                            <strong>Name:</strong> {form.data.name}
                        </p>
                        <p>
                            <strong>Email:</strong> {form.data.email}
                        </p>
                        <p>
                            <strong>Phone:</strong> {form.data.phone}
                        </p>
                        <p>
                            <strong>Message:</strong> {form.data.message}
                        </p>
                        <button
                            className="mt-4 rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                            onClick={() => form.setData({ id: null })}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
