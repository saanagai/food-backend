import express from "express";
import { createFoodCategory, getFoodCategories } from "../controllers/food-category.controller";

const categoryRoute = express.Router();

categoryRoute.post("/", createFoodCategory);
categoryRoute.get("/", getFoodCategories);

export default categoryRoute;
