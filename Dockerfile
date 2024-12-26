# Stage 1: Build React Application
FROM node:18 AS react-builder

WORKDIR /app

# Copy the React application code to the container
COPY ./ ./

# Install dependencies and build the React application
RUN npm install && npm run build

# Stage 2: Set up Laravel Application
FROM php:8.2-fpm AS laravel-backend

# Install system dependencies
RUN apt-get update \
    && apt-get install -y \
        zip \
        unzip \
        git \
        curl \
        libpng-dev \
        libonig-dev \
        libxml2-dev \
        libzip-dev \
        sqlite3 \
        libsqlite3-dev \
    && docker-php-ext-install pdo pdo_sqlite pdo_mysql mbstring zip exif pcntl tokenizer xml gd

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copy Laravel application code
COPY ./ ./

# Copy React build to Laravel's public directory
COPY --from=react-builder /app/public/build ./public/build

# Install Laravel dependencies
RUN composer install --optimize-autoloader --no-dev

# Set permissions for Laravel storage and cache
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Set SQLite database directory and permissions
RUN mkdir -p /var/www/html/database && touch /var/www/html/database/database.sqlite \
    && chown -R www-data:www-data /var/www/html/database

# Expose the default Laravel port
EXPOSE 8000

# Set the entrypoint for Laravel
CMD ["php", "artisan", "serve", "--host", "0.0.0.0", "--port", "8000"]
