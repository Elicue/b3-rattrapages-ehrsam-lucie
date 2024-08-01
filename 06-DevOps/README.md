# 06 – DevOps : Docker

The project consists of creating a web application using PHP (here Laravel) and a front-end framework (here VueJS) that allows users to list all distributors installed by Picard and add new distributors through a form. The application is Dockerized, includes a database, and supports easy initial data import via a volume.
I have used a Dockerfile and Docker Compose to orchestrate the application and its database.

For this project, using Docker Compose is simpler than using just a Dockerfile because it allows for easy management of multiple containers, like the application and database, in a single configuration file. Docker Compose simplifies networking between containers, handles environment variables, and makes volume management straightforward.
Additionally, it provides a one-command setup (`docker-compose up`) to launch the entire stack, making the process more efficient and consistent across different environments.

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

Copy the example environment file from the .env.example file and adjust the environment variables if necessary.

```bash
cp .env.example .env
cd ..
```

Generate environment key

```bash
php artisan key:generate
```

Starting Containers with Docker Compose :

```bash
docker-compose up -d
```

Starting Containers with Docker Compose :

```bash
docker-compose exec app composer install

```

Install PHP dependencies :

```bash
docker-compose exec app php artisan migrate    # For Laravel

```

Access the application :

Open your web browser and navigate to http://localhost:8001 ( the port is specified in the docker-compose.yml file).

If you want to stop the containers :

```bash
docker-compose down

```

## Dockerhub

If you want to pull the dockerhub image :

```bash
docker pull lucee0104/devops-docker:latest

```

## Features

-   Distributor List: Displays all installed Picard distributors in a list.
-   Add Form: Allows adding new distributors via a simple form.
-   Database: Stores distributor information and allows their management.

## Explicative Video

-   [Video]()

## Helpers

-   [w3schools](https://www.w3schools.com/)
-   [StackOverflow](https://stackoverflow.com/)
-   [Docker Docs](https://docs.docker.com/guides)
-   [Laravel Docs](https://laravel.com/docs/)
-   [Vue3 Docs](https://vuejs.org/guide/introduction.html)
-   Replay of course videos
