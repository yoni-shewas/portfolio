# Use the official PHP image with FPM (FastCGI Process Manager)
FROM php:8.4-fpm AS php-fpm

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    libsqlite3-dev \
    libzip-dev \
    unzip \
    git \
    curl \
    nodejs \
    npm \
    sqlite3 \
    libonig-dev && \  # Correct syntax for && at the end of the line
    docker-php-ext-install pdo pdo_sqlite zip bcmath ctype fileinfo mbstring && \  # Another &&
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /var/www

# Copy project files (including the .env file) to the container
COPY . .

# Install Composer globally
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install PHP dependencies using Composer
RUN composer install --optimize-autoloader --no-scripts

# Install Node.js dependencies
RUN npm install

# Compile assets (use npm run production for production-ready assets)
RUN npm run build

# Set permissions for Laravel's storage, cache, and database directories
RUN chown -R www-data:www-data /var/www && \
    chmod -R 775 /var/www/storage /var/www/bootstrap/cache /var/www/database && \
    chmod -R 775 /var/www/public/build

# Create an SQLite database file
RUN touch /var/www/database/database.sqlite && \
    chown www-data:www-data /var/www/database/database.sqlite && \
    chmod 775 /var/www/database/database.sqlite

# Check if .env exists and run Laravel commands only when appropriate
RUN if [ -f .env ]; then \
    php artisan storage:link && \
    php artisan config:cache && \
    php artisan route:cache && \
    php artisan view:cache; \
    else \
    echo "Warning: .env file not found, skipping Laravel artisan commands."; \
    fi

# Expose port 8000 for Laravel's built-in server
EXPOSE 8000

# Start the Laravel application using the built-in PHP server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
