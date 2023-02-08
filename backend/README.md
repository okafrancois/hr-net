# Project #14 - Hrnet API

This codebase contains the code needed to run the backend for Hrnet.

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following
commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### Configuration

The backend use environment variables to configure the connection to the database.
You'll find a `.env` file in the backend folder, which contains the following variables:

```bash
# MongoDB connection string
DATABASE_URL=mongodb://localhost:27017/hrnetDB
```

Make sure the `DATABASE_URL` variable is set to the correct connection string for your MongoDB instance.
The default value is set to `mongodb://localhost:27017/hrnetDB`, which is the default connection string for a local
MongoDB instance.

### Instructions

1. Open a terminal window in the backend folder
2. Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server
```

Your server should now be running at http://locahost:3001

## Populated Database Data

Once the server is running, you can the following commands to populate default data in your database:

```bash
# Populate database with the default user
npm run populate-db

# Populate database with sample employees
npm run populate-employees
```

Once you run the `populate-db` and `populate-employees` script, you should have one user in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

And also a default set of 15 employees.

## API Documentation

To learn more about how the API works, once you have started your local environment, you can
visit: http://localhost:3001/api-docs
