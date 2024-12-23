<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactMessageController extends Controller
{
    /**
     * Display a listing of contact messages.
     */
    public function index()
    {
        // Fetch all contact messages
        $messages = Contact::latest()->get();

        // Pass messages to Inertia view
        return Inertia::render('Dashboard/ContactMessages', [
            'messages' => $messages,
        ]);
    }
    public function create(request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        $message = Contact::create($validated);

        return redirect()
            ->route('home')
            ->with('success', 'Message sent successfully!');
    }

    /**
     * Delete a contact message.
     */
    public function destroy($id)
    {
        // Find the contact message by ID
        $message = Contact::findOrFail($id);

        // Delete the message
        $message->delete();

        // Return a redirect response with a success message
        return redirect()
            ->route('contact-messages.index')
            ->with('success', 'Message deleted successfully!');
    }
}
