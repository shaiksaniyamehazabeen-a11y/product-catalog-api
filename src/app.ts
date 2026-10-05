import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes";
import errorMiddleware from "./middleware/errorMiddleware";

const app = express();

const allowedOrigin = process.env.CORS_ORIGIN;

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/products", productRoutes);

app.use(errorMiddleware);

export default app;
