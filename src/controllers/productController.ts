import { Request, Response, NextFunction } from "express";
import {
    getAllProducts,
    getProductById,
    addProduct
} from "../models/productModel";
import AppError from "../utils/AppError";

export const getProducts = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    try {
        const products = getAllProducts();

        res.status(200).json({
            success: true,
            data: products
        });
    } catch (error) {
        next(error);
    }
};

export const getProduct = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            throw new AppError("Invalid product ID", 400);
        }

        const product = getProductById(id);

        if (!product) {
            throw new AppError("Product not found", 404);
        }

        res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        next(error);
    }
};

export const createProduct = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    try {
        const { name, price, category } = req.body;

        if (!name || price === undefined || !category) {
            throw new AppError(
                "Name, price, and category are required",
                400
            );
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
            category
        };

        addProduct(newProduct);

        res.status(201).json({
            success: true,
            data: newProduct
        });
    } catch (error) {
        next(error);
    }
};