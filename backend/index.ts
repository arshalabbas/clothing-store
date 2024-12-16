import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Routes Impport
import { userRouter } from "./routes/user.route";

// AdminJS Imports
import AdminJS, { AdminJSOptions } from "adminjs";
import AdminJSExpress from "@adminjs/express";
import { Database, Resource, getModelByName } from "@adminjs/prisma";

import prisma from "./config/prismaClient";

dotenv.config();

const PORT = 3000;

AdminJS.registerAdapter({ Database, Resource });

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// Routes
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

// AdminJS Configurations
const adminJsOptions: AdminJSOptions = {
  resources: [
    {
      resource: { model: getModelByName("User"), client: prisma },
      options: {},
    },
    {
      resource: { model: getModelByName("Product"), client: prisma },
      options: {},
    },
    {
      resource: { model: getModelByName("Category"), client: prisma },
      options: {},
    },
    {
      resource: { model: getModelByName("Image"), client: prisma },
      options: {},
    },
  ],
};

const admin = new AdminJS(adminJsOptions);

const adminRouter = AdminJSExpress.buildRouter(admin);

app.use(admin.options.rootPath, adminRouter);

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
  console.log(
    `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
  );
});
