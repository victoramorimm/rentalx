import express from "express";
import dotenv from "dotenv";

import "./database";
import { categoriesRoutes } from "./routes/categories.routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port: ${port}`));
