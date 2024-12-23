<?php

namespace App\Http\Controllers;

use App\Models\Projects;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of projects.
     */
    public function index()
    {
        $projects = Projects::all();

        return Inertia::render('Dashboard/Projects', [
            'projects' => $projects,
        ]);
    }

    /**
     * Store a newly created project.
     */
    public function store(Request $request)
    {
        // Validate incoming request
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'technologies' => 'nullable|array',
            'image_url' => 'nullable|string',
            'source' => 'nullable|string|url',
            'project_url' => 'nullable|string|url',
            'tags' => 'nullable|array',
        ]);
    
        // Convert arrays to JSON
        $validated['technologies'] = json_encode($validated['technologies']);
        $validated['tags'] = json_encode($validated['tags']);
    
        // Create new project
        Projects::create($validated);
    
        // Redirect with success message
        return redirect()
            ->route('projects.index')
            ->with('success', 'Project created successfully!');
    }
    
    /**
     * Update an existing project.
     */
    public function update(Request $request, $id)
    {
        // Find the project by ID
        $project = Projects::findOrFail($id);

        // Validate incoming request
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'technologies' => 'nullable|array',
            'source' => 'nullable|string|url',
            'project_url' => 'nullable|string|url',
            'tags' => 'nullable|array',
        ]);
        
        // Remove empty strings from arrays
        $validated['tags'] = array_filter($validated['tags'] ?? []);
        $validated['technologies'] = array_filter($validated['technologies'] ?? []);
        

        // Update project
        $project->update($validated);

        // Redirect with success message
        return redirect()
            ->route('projects.index')
            ->with('success', 'Project updated successfully!');
    }

    /**
     * Delete a project.
     */
    public function destroy($id)
    {
        // Find the project by ID
        $project = Projects::findOrFail($id);

        // Delete the project
        $project->delete();

        // Redirect with success message
        return redirect()
            ->route('projects.index')
            ->with('success', 'Project deleted successfully!');
    }

    public function uploadImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->file('image')) {
            $path = $request->file('image')->store('uploads', 'public');
            return response()->json(['path' => "/storage/$path"], 200);
        }

        return response()->json(['error' => 'Invalid file upload'], 400);
    }

}
