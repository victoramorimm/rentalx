import express from "express";
import dotenv from "dotenv";

import "./database";
import { router } from "./routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(router);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port: ${port}`));
