# FROM php

# # Install necessary dependencies
# RUN apt-get update && apt-get install -y \
#   git \
#   curl \
#   locales \
#   zip \
#   unzip \
#   npm \
#   nodejs \
#   && docker-php-ext-configure gd --with-freetype --with-jpeg \
#   && docker-php-ext-install pdo pdo_mysql gd

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
