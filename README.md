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

You can run the production preview mode by running `npm run preview` in the `./frontend` folder and then navigate to the
link
provide in the terminal.
