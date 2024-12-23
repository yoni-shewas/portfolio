<?php

use App\Http\Controllers\PersonalInfoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\PersonalInfo;
use App\Http\Controllers\LanguageController;
use App\Models\Language;
use App\Models\Projects;
use App\Http\Controllers\ContactMessageController;
use App\Http\Controllers\ProjectController; 

Route::get('/', function () {
    $PersonalInfo = PersonalInfo::first();
    $languages = Language::all();
    $projects = Projects::all();

    if ($PersonalInfo->count() > 0) {
        return Inertia::render('Home', [
            'PersonalInfo' => $PersonalInfo,
            'languages' => $languages,
            'projects' => $projects,
        ]);  
    }

    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::post('/contact', [ContactMessageController::class, 'create'])->name('ContactMessageController.create');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Dashboard routes
Route::middleware('auth')->group(function () {
    Route::get('/PersonalInfo', [PersonalInfoController::class, 'view'])->name('PersonalInfoController.view');
    Route::post('/PersonalInfo', [PersonalInfoController::class, 'updateOrCreate'])->name('PersonalInfoController.updateOrCreate');
    Route::get('/language', [LanguageController::class, 'view'])->name('LanguageController.view');
    Route::post('/language', [LanguageController::class, 'updateOrCreate'])->name('LanguageController.updateOrCreate');
    Route::delete('/languages/{id}', [LanguageController::class, 'destroy'])->name('LanguageController.destroy');   
    Route::get('/contact-messages', [ContactMessageController::class, 'index'])->name('contact-messages.index');
    Route::delete('/contact-messages/{id}', [ContactMessageController::class, 'destroy'])->name('ContactMessageController.destroy');
});

// Projects routes 
Route::middleware(['auth'])->group(function () {
    Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
    Route::post('/projects', [ProjectController::class, 'store'])->name('projects.store');
    Route::put('/projects/{id}', [ProjectController::class, 'update'])->name('projects.update');
    Route::delete('/projects/{id}', [ProjectController::class, 'destroy'])->name('projects.destroy');
    Route::post('/projects/upload-image', [ProjectController::class, 'uploadImage'])->name('projects.uploadImage');

});

require __DIR__.'/auth.php';
