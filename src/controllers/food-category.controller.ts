import { Request, Response } from "express";
import foodCategoryModel from "../models/food-category.model";

export const createFoodCategory = async (req: Request, res: Response) => {
  try {
    const categoryData = req.body;
    const newCategory = await foodCategoryModel.create(categoryData);
    res
      .status(200)
      .json({ message: "Successfully created category", newCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in createFoodCategory", error });
  }
};
export const getFoodCategories = async (req: Request, res: Response) => {
  try {
    const allCategory = await foodCategoryModel.find();

    res.status(200).json({ message: "Successfully get category", allCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in get FoodCategory", error });
  }
};

export const putCategoryById = async (req: any, res: Response) => {
  const { foodCategoryId } = req.params;
  const { categoryName } = req.body;
  try {
    const allCategory = await foodCategoryModel.updateOne(
      { _id: foodCategoryId },
      { categoryName }
    );
    res
      .status(200)
      .json({ message: "Successfully put category id", data: allCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in put FoodCategory id", error });
  }
  res.json();
};

export const deleteCategoryById = async (req: any, res: Response) => {
  const { foodCategoryId } = req.params;
  const { categoryName } = req.body;
  try {
    const allCategory = await foodCategoryModel.deleteOne(
      { _id: foodCategoryId },
      { categoryName }
    );
    res
      .status(200)
      .json({ message: "Successfully delete category id", data: allCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in delete FoodCategory id", error });
  }
  res.json();
};
