# Product Catalog API

## Introduction

The Product Catalog API is a RESTful API built using
Node.js, Express.js, and TypeScript. It provides
product management functionality with centralized
error handling and logging.

## Features

- Get all products
- Get a product by ID
- Add a new product
- Custom error handling
- Centralized error middleware
- Winston logging
- Morgan HTTP request logging
- 404 handling for unknown routes
- Separate error and application log files

## Technologies Used

- Node.js
- Express.js
- TypeScript
- Winston
- Morgan

## Project Structure

```text
src/
├── controllers/
│   └── productController.ts
├── middleware/
│   ├── errorHandler.ts
│   └── morganMiddleware.ts
├── models/
│   └── productModel.ts
├── routes/
│   └── productRoutes.ts
├── utils/
│   ├── AppError.ts
│   └── logger.ts
├── app.ts
└── server.ts

logs/
├── error.log
└── all.log
```
