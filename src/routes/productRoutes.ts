import { Router } from "express";
import {
    getProducts,
    getProduct,
    createProduct
} from "../controllers/productController";

const router = Router();

router.get("/", getProducts);

router.get("/test-error", (req, res, next) => {
    next(new Error("This is a test server error"));
});

router.post("/", createProduct);

router.get("/:id", getProduct);

export default router;