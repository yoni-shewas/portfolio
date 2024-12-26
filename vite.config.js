import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/build/',
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
    server: {
        proxy: {
            '/': 'https://portfolio-6q7j.onrender.com',
        },
        cors: true,
        host: true,
    },
    build: {
        outDir: 'public/build',
    },
});
