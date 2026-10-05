import { Router } from "express";
import {
  getProducts,
  getProduct,
  createProduct,
} from "../controllers/productController";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

// GET all products
router.get("/", asyncHandler(getProducts));

// GET product by ID
router.get("/:id", asyncHandler(getProduct));

// POST create a new product
router.post("/", asyncHandler(createProduct));

export default router;
