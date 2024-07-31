# Use an official PHP image with Apache as the base image.
FROM php:8.2-apache

# Set environment variables.
ENV ACCEPT_EULA=Y

# Install system dependencies.
RUN apt-get update && apt-get install -y \
  libpng-dev \
  libjpeg-dev \
  libfreetype6-dev \
  zip \
  unzip \
  git \
  nodejs \
  npm \
  && rm -rf /var/lib/apt/lists/*

# Enable Apache modules required for Laravel.
RUN a2enmod rewrite

# Set the Apache document root
ENV APACHE_DOCUMENT_ROOT /var/www/html/public

# Update the default Apache site configuration
COPY apache-config.conf /etc/apache2/sites-available/000-default.conf

# Install PHP extensions.
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
  && docker-php-ext-install -j$(nproc) gd pdo pdo_mysql

# Install Composer globally.
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Create a directory for your Laravel application.
WORKDIR /var/www/html

# Copy the Laravel application files into the container.
COPY . .

# Install Laravel dependencies using Composer.
RUN composer install --no-interaction --optimize-autoloader
# RUN composer install --prefer-dist --no-scripts --no-dev --no-autoloader

# Set permissions for Laravel.
RUN chown -R www-data:www-data storage bootstrap/cache

# Copy the package.json file and install Node.js dependencies
# COPY package.json package-lock.json ./
RUN npm install

# Compile the front-end assets
RUN npm run build

# Expose port 80 for Apache.
EXPOSE 80

# Start Apache web server.
CMD ["apache2-foreground"]

# You can add any additional configurations or commands required for Laravel 10 here.

# FROM php:8.3-fpm-alpine

# # Install necessary dependencies
# RUN apt-get update && apt-get install -y \
#   libjpeg-dev \
#   libpng-dev\
#   libzip-dev \
#   libfreetype6-dev \
#   git \
#   curl \
#   locales \
#   zip \
#   unzip \
#   npm \
#   nodejs 

# # RUN docker-php-ext-configure gd --with-freetype --with-jpeg 
# RUN docker-php-ext-install pdo pdo_mysql

# # Install Composer
# COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# # Set the working directory
# WORKDIR /var/www

# # Copy the Composer file and install PHP dependencies
# COPY composer.json composer.lock ./

# RUN composer install --prefer-dist --no-scripts --no-dev --no-autoloader


# # Copy the package.json file and install Node.js dependencies
# COPY package.json package-lock.json ./
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Compile the front-end assets
# RUN npm run build

# # Change the permissions of the storage and cache directory
# RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# # Expose port 9000 and start PHP-FPM
# EXPOSE 9000
# CMD ["php-fpm"]
