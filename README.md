HR-Net
======

HR-Net is a simple project that helps you manage your human resources. It is designed to make it easy for you to keep
track of your employees' information, payroll, and other important HR-related data.

Installation
------------

To install HR-Net, you need to have [Docker](https://www.docker.com/)
and [docker-compose](https://docs.docker.com/compose/) installed on your system. Once you have those installed, you can
clone this repository and run the following command:

Scripts
-------

HR-Net comes with two scripts that you can use to manage the docker container:

- `npm start`: Starts the docker container and HR-Net in dev mode.
- `npm stop`: Stops the docker container and HR-Net.
- `npm stop:rm`: Stops the docker container and HR-Net, also remove the docker images and containers.

Usage
-----

Once the container build is finished, you can access the HR-Net web interface, simply navigate
to `http://localhost:5173` in your web
browser.

You should have 15 employees and one user in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

Use these credentials to log in to the HR-Net web interface.

## Production preview mode

### requirements

- [Node.js](https://nodejs.org/en/) (v12.16.1 or higher)
- [npm](https://www.npmjs.com/) (v6.13.4 or higher)

### steps

1. Run `npm install` in the `./frontend` folder.
2. Run `npm run preview` in the `./frontend` folder.
