import express from "express";
import productRoutes from "./routes/productRoutes";
import AppError from "./utils/AppError";
import errorHandler from "./middleware/errorHandler";
import morganMiddleware from "./middleware/morganMiddleware";

const app = express();

app.use(express.json());

// HTTP request logging
app.use(morganMiddleware);

// Product routes
app.use("/products", productRoutes);

// Handle unknown routes
app.use((req, res, next) => {
    next(new AppError(`Route ${req.originalUrl} not found`, 404));
});

// Centralized error handler
app.use(errorHandler);

export default app;