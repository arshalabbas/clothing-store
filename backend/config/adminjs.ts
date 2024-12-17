import { getModelByName } from "@adminjs/prisma";
import { AdminJSOptions } from "adminjs";
import prisma from "./prismaClient";
import componentLoader from "./component-loader";
import categoryResource from "../adminjs/resources/categoryResource";

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
      resource: { model: getModelByName("Image"), client: prisma },
      options: {},
    },
    categoryResource,
  ],
  componentLoader,
};

export default adminJsOptions;
