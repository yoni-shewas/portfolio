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

# Copy project files to the container, including the build directories
COPY . .

# Install Composer globally
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install PHP dependencies using Composer
RUN composer install --optimize-autoloader

# Set permissions for Laravel's storage, cache, and build directories
RUN chown -R www-data:www-data /var/www && \
    chmod -R 775 /var/www/storage /var/www/bootstrap/cache /var/www/database && \
    chmod -R 775 /var/www/public/build  # Set proper permissions for the build directory

# Ensure the build directory in the root (if needed) is also accessible
RUN chmod -R 775 /var/www/build  # If there's a build directory at the root

# Set the Laravel APP_ENV to production and cache the configuration
RUN php artisan storage:link && \
    php artisan config:cache && \
    php artisan route:cache && \
    php artisan view:cache

# Expose port 8000 for Laravel's built-in server
EXPOSE 8000

# Start the Laravel application using the built-in PHP server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
