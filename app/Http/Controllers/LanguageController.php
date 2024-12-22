<?php

namespace App\Http\Controllers;


use App\Models\Language;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LanguageController extends Controller
{
    /**
     * Update or create a language.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */

    public function view()
    {
        $language = Language::all();
        return Inertia::render('Dashboard/Skills', [
            'languages' => $language,
        ]);
    }
    public function updateOrCreate(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'level' => 'required|string|max:255',
            'icon_url' => 'nullable|url',
        ]);

        
        $language = Language::updateOrCreate(
            ['name' => $validated['name']], 
            $validated 
        );

        return Inertia::render('Dashboard/Skills', [
            'message' => 'Language updated successfully!',
            'languages' => Language::all()
        ]);
    }
    public function destroy(Request $request, $id)
    {
        $language = Language::findOrFail($id);
        $language->delete();

        return Inertia::render('Dashboard/Skills', [
            'message' => 'Language deleted successfully!',
            'languages' => Language::all()
        ]);
    }
}
