# Use the official PHP image with FPM (FastCGI Process Manager)
FROM php:8.2-fpm

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    libsqlite3-dev \
    libzip-dev \
    unzip \
    git \
    curl \
    && docker-php-ext-install pdo pdo_sqlite zip

# Set the working directory
WORKDIR /var/www

# Copy project files to the container
COPY . .

# Install Composer globally
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install PHP dependencies using Composer
RUN composer install --optimize-autoloader --no-dev

# Set permissions for Laravel's storage and cache directories
RUN chown -R www-data:www-data /var/www \
    && chmod -R 775 storage bootstrap/cache \
    && chmod -R 775 database

# Expose port 8000 for Laravel's built-in server
EXPOSE 8000

# Set the Laravel APP_ENV to production and cache the configuration
RUN php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

# Start the Laravel application using the built-in PHP server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
