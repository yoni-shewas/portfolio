<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\PersonalInfo;

class PersonalInfoController extends Controller
{
    /**
     * Display the user's profile or show a form to add profile info.
     */
    public function view(Request $request): Response
    {

        // Retrieve profile info from the database
        $PersonalInfo = PersonalInfo::first();

        return Inertia::render('Dashboard/Profile', [
            'PersonalInfo' => $PersonalInfo,
        ]);
    }

    /**
     * Store a new profile if none exists or update the existing one.
     */
    public function updateOrCreate(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'bio' => ['nullable', 'string', 'max:500'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:15'],
            'address' => ['nullable', 'string', 'max:255'],
            'profile_image' => ['nullable', 'string', 'max:255'],
            'social_links' => ['nullable', 'json'],
        ]);

        $userId = Auth::id();

        // Update or create profile information
        PersonalInfo::updateOrCreate(
            [],  // No conditions, update the first record or create a new one
            $validated 
        );
    }
}
