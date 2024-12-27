<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Log;


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
        Log::debug('Debug message', ['context' => []]);
        Log::warning('Debug message', ['context' => []]);
        Log::error('Debug message', ['context' => []]);
        Log::critical('Debug message', ['context' => []]);
        Log::alert('Debug message', ['context' => []]);
        Log::emergency('Debug message', ['context' => []]);
    
        // Ensure Vite::prefetch is correctly called
        if (class_exists(\Illuminate\Foundation\Vite::class)) {
            \Illuminate\Foundation\Vite::prefetch(concurrency: 3);
        }
    }
    
}
