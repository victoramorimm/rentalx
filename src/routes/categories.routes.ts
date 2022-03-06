import { Router } from "express";

import { Category } from "../modules/cars/model/Category";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
