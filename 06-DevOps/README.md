# 06 – DevOps : Docker

The project consists of creating a web application using PHP (here Laravel) and a front-end framework (here VueJS) to list and add Picard distributors. The application is orchestrated with Docker, using Docker Compose, and include a database.

The project allow easy import of initial data via a volume.

The following documentation includes instructions for building and running the containers.

## Prerequisites

-   [Docker Desktop](https://www.docker.com/products/docker-desktop/) (for Windows & macOS)
-   [Docker Engine](https://docs.docker.com/engine/) (for Linux)
-   [Node.js](https://nodejs.org/)
-   [npm](https://www.npmjs.com/)
-   [Composer]()

## Installation & Local development

Clone the Git Repository :

```bash
git clone <b3-rattrapages-ehrsam-lucie>

cd <b3-rattrapages-ehrsam-lucie/06-DevOps>
```

Create an .env file from the example .env.example file and adjust the environment variables if necessary.

Install front-end dependencies :

```bash
cd front-end

npm install

cd ..
```

Starting Containers with Docker Compose :

```bash
docker-compose up --build
```

If the volume for the initial data is configured, Docker will handle this step automatically. Otherwise, run the import script manually inside the container.

Open your browser and go to http://localhost:8000 to access the application.

## Features

-   Distributor List: Displays all installed Picard distributors in a list.
-   Add Form: Allows adding new distributors via a simple form.
-   Database: Stores distributor information and allows their management.

## Project Structure

```
06–DevOps/
├── app
│   ├── Console
│   │   └── Kernel.php
│   ├── Http
│   │   ├── Controllers
│   │   ├── Middleware
│   │   └── Kernel.php
│   ├── Models
│   │   ├── Dispenser.php
│   │   └── User.php
│   └── Providers
│       └── AppServiceProvider.php
├── bootstrap
│   ├── cache
│   │   ├── .gitignore
│   │   └── packages.php
│   ├── app.php
│   └── providers.php
├── config
│   ├── app.php
│   ├── auth.php
│   ├── cache.php
│   ├── database.php
│   ├── filesystems.php
│   ├── logging.php
│   ├── mail.php
│   ├── queue.php
│   ├── services.php
│   └── session.php
├── database
│   ├── factories
│   │   ├── DispenserFactory.php
│   │   └── UserFactory.php
│   ├── migrations
│   │   ├── 0001_01_01_000000_create_users_table.php
│   │   ├── 0001_01_01_000001_create_cache_table.php
│   │   ├── 0001_01_01_000002_create_jobs_table.php
│   │   └── 2024_07_29_182440_create_dispensers_table.php
│   ├── seeders
│   │   └── DatabaseSeeder.php
│   ├── .gitignore
│   └── database.sqlite
├── public
│   ├── .htaccess
│   ├── favicon.io
│   └── index.php
├── resources
│   ├── css
│   │   └── app.css
│   ├── js
│   │   ├── Components
│   │   │   └── DispenserInfos.vue
│   │   ├── Layouts
│   │   │   └── MainLayout.vue
│   │   ├── Pages
│   │   │   ├── Dispenser
│   │   │   │   ├── Create.vue
│   │   │   │   ├── Index.vue
│   │   │   │   └── Show.vue
│   │   │   └── Index
│   │   │   │   ├── Index.vue
│   │   │   │   └── Show.vue
│   │   └── app.js
│   └── views
│   │   └── app.blade.php
├── routes
│   ├── console.php
│   └── web.php
<!-- ├── storage -->
├── tests
│   ├── Feature
│   │   └── ExampleTest.php
│   ├── Unit
│   │   └── ExampleTest.php
│   └── TextCase.php
├── .dockerignore
├── .env.example
├── .gitattributes
├── .gitignore
├── artisan
├── composer.json
├── composer.lock
├── docker-compose.yml
├── Dockerfile
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Explicative Video

-   [Video]()

## Helpers

-   [w3schools](https://www.w3schools.com/)
-   [StackOverflow](https://stackoverflow.com/)
-   [Docker Docs](https://docs.docker.com/guides)
-   [Laravel Docs](https://laravel.com/docs/)
-   [Vue3 Docs](https://vuejs.org/guide/introduction.html)
-   Replay of course videos
