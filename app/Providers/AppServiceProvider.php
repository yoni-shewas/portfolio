<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Log;
use Illuminate\Foundation\Vite;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    

    public function boot()
    {
        Log::info('Debug message', ['context' => []]);
    
        // Create an instance of Vite
        if (class_exists(Vite::class)) {
            $vite = app(Vite::class); 
            $vite->prefetch(concurrency: 3); 
        }
    }
    
    
}
