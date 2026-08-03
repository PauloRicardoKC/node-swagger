# Node Cars API

## Description

A lightweight Node.js API built with Express for managing brands and cars, with Swagger-generated API documentation and MongoDB persistence support. The project was hardened for security, dependency updates, and maintainability while preserving the original business behavior.

## Features

- Express REST API
- Swagger UI and OpenAPI documentation
- MongoDB integration with Mongoose
- CRUD routes for brands and cars
- Input validation with reusable contracts
- Security middleware: Helmet, CORS, rate limiting, and request size limits
- Health check endpoint for monitoring
- Modernized configuration via environment variables

## Technologies

- Node.js 18+
- Express.js
- MongoDB + Mongoose
- Swagger JSDoc + Swagger UI Express
- dotenv
- Helmet
- CORS
- Express Rate Limit
- Morgan
- ESLint
- Prettier
- Node test runner

## Requirements

- Node.js >= 18.18.0
- npm >= 9
- MongoDB instance or MongoDB Atlas connection string

## Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Copy the example environment file:

```bash
cp .env.example .env
```

4. Update the environment variables as needed.

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/carsdb
NODE_ENV=development
```

## Running Locally

Start the application in development mode:

```bash
npm run dev
```

Or run directly:

```bash
npm start
```

The service will listen on `http://localhost:3000`.

## Running with Docker

Docker was not present in this repository. If you want container support, you can add a Dockerfile and Compose file based on the current Node.js setup.

## Build

```bash
npm run build
```

## Tests

```bash
npm test
```

The project currently includes a lightweight health-check regression test using Node's built-in test runner.

## Lint

```bash
npm run lint
```

## Project Structure

```text
.
├── bin/
│   └── server.js
├── src/
│   ├── app.js
│   ├── controllers/
│   │   ├── brand-controller.js
│   │   └── car-controller.js
│   ├── models/
│   │   ├── brand.js
│   │   └── car.js
│   ├── repositories/
│   │   ├── brand-repository.js
│   │   └── car-repository.js
│   ├── routes/
│   │   ├── brand-route.js
│   │   ├── car-route.js
│   │   ├── health-route.js
│   │   ├── index-route.js
│   │   └── swagger.js
│   └── validators/
│       └── fluent-validator.js
├── tests/
│   └── app.test.js
├── .env.example
├── .eslintrc.json
├── .gitignore
├── package.json
├── package-lock.json
├── postman/
│   ├── Brands API.postman_collection
│   └── Cars API.postman_collection
└── README.md
```

## API Documentation

Swagger is available at:

```text
http://localhost:3000/swagger/api-docs/
```

## Deployment

This application is designed for a standard Node.js deployment environment and can be deployed to:

- VM or server with Node.js installed
- PaaS providers such as Render, Heroku, Railway, Azure App Service
- Containerized infrastructure if Docker is added later

For production, you should always set a secure `MONGODB_URI`, enable `NODE_ENV=production`, and add a reverse proxy or load balancer when needed.

## Troubleshooting

### MongoDB connection issues

- Confirm `MONGODB_URI` is defined in the `.env` file.
- Ensure MongoDB is running and reachable.
- Check network access, credentials, and database names.

### Swagger not loading

- Confirm the app started successfully.
- Open the route `/swagger/api-docs/`.
- Review the Express route registration in the Swagger setup file.

### Port conflict

- Change `PORT` in the environment file or pass an alternate environment variable.

## Security Notes

- Helmet is enabled to reduce common web vulnerabilities.
- CORS is enabled with permissive runtime configuration for local development.
- Rate limiting reduces brute-force and abuse scenarios.
- Request body size is limited to avoid oversized payloads.
- Mongoose strict query mode is enabled.
- Dependencies were updated to remove known vulnerabilities where possible.
- MongoDB credentials and secrets should never be committed to source control.

## License

This project is distributed under the MIT license.

