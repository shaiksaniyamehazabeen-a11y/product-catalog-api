import { Request, Response } from "express";
import {
  getAllProducts,
  getProductById,
  addProduct,
} from "../models/productModel";
import AppError from "../utils/AppError";
import sendResponse from "../utils/sendResponse";

export const getProducts = async (req: Request, res: Response) => {
  const products = getAllProducts();

  sendResponse(res, 200, products, "Products fetched successfully");
};

export const getProduct = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    throw new AppError("Invalid product ID", 400);
  }

  const product = getProductById(id);

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  sendResponse(res, 200, product, "Product fetched successfully");
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, price, category } = req.body;

  if (!name || price === undefined || !category) {
    throw new AppError("Name, price, and category are required", 400);
  }

  if (
    typeof name !== "string" ||
    typeof category !== "string" ||
    typeof price !== "number" ||
    price <= 0
  ) {
    throw new AppError("Invalid product details", 400);
  }

  const newProduct = {
    id: Date.now(),
    name,
    price,
    category,
  };

  addProduct(newProduct);

  sendResponse(res, 201, newProduct, "Product created successfully");
};
