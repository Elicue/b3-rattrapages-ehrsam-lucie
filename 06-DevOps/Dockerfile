FROM php
  
# Installer les dépendances nécessaires
RUN apt-get update && apt-get install -y \
  git \
  curl \
  libpng-dev \
  libjpeg-dev \
  libfreetype6-dev \
  locales \
  zip \
  unzip \
  npm \
  nodejs \
  && docker-php-ext-configure gd --with-freetype --with-jpeg \
  && docker-php-ext-install pdo pdo_mysql gd

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Définir le répertoire de travail
WORKDIR /var/www

# Copier le fichier Composer et installer les dépendances PHP
COPY composer.json composer.lock ./
RUN composer install --prefer-dist --no-scripts --no-dev --no-autoloader

# Copier le package.json et installer les dépendances Node.js
COPY package.json package-lock.json ./
RUN npm install

# Copier le reste du code de l'application
COPY . .

# Compiler les assets front-end
RUN npm run build

# Changer les permissions du répertoire de stockage et de cache
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Exposer le port 9000 et démarrer PHP-FPM
EXPOSE 9000
CMD ["php-fpm"]
