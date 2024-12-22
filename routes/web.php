<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PersonalInfoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\PersonalInfo;
use App\Http\Controllers\LanguageController;
use App\Models\Language;

Route::get('/', function () {
    $PersonalInfo = PersonalInfo::first();
    $languages = Language::all();

    
    if ($PersonalInfo->count() > 0) {
        return Inertia::render('Home', [
            'PersonalInfo' => $PersonalInfo,
            'languages' => $languages
        ]);  
    }
      
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/PersonalInfo', [PersonalInfoController::class, 'view'])->name('PersonalInfoController.view');
    Route::post('/PersonalInfo', [PersonalInfoController::class, 'updateOrCreate'])->name('PersonalInfoController.updateOrCreate');
});


Route::get('/language', [LanguageController::class, 'view'])->name('LanguageController.view');
Route::post('/language', [LanguageController::class, 'updateOrCreate'])->name('LanguageController.updateOrCreate');
Route::delete('/languages/{id}', [LanguageController::class, 'destroy'])->name('LanguageController.destroy');

require __DIR__.'/auth.php';
