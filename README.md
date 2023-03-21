HR-Net
======

HR-Net is a simple project that helps you manage your human resources. It is designed to make it easy for you to keep
track of your employees' information, payroll, and other important HR-related data.

Installation
------------

To install HR-Net, you need to
have [Docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/) installed on your system.

Once you have those installed, you have to configure the environment variables in the `.env` file. You can use the
`.env.example` file as a template.

Environment Variables
-------

The following environment variables are used by the docker-compose file:

| Variable            | Description                                                                                                      | Default                               |
|---------------------|------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| `VITE_PORT`         | The frontend dev mode port                                                                                       | `4040`                                |
| `VITE_PREVIEW_PORT` | The frontend preview mode port                                                                                   | `4000`                                |
| `API_PORT`          | The server port                                                                                                  | `3000`                                |
| `VITE_API_URL`      | The api url                                                                                                      | `http://localhost:${API_PORT}/api/v1` |
| `RUN_MODE`          | The mode in which the frontend image is build and launched.It's set to prod by default but you can set it to dev | `prod`                                |

By default, the frontend is built in production mode. If you want to run it in development mode, you can set the `RUN_MODE` variable to `dev` and re-run the `docker-compose up` command.

Scripts
-------

HR-Net comes with two scripts that you can use to manage the docker container (run in the root folder):

- `docker-compose up -d`: Starts the docker containers.
- `docker-compose down`: Stops the docker containers.

Usage
-----

Once the container build is finished, you can access the HR-Net web interface, simply navigate
to `http://localhost:4000` in your web
browser.

You should have 15 employees and one user in your database:

### Use these credentials to log in to the HR-Net web interface.

- Email: `tony@stark.com`
- Password: `password123`
