import { getModelByName } from "@adminjs/prisma";
import { AdminJSOptions } from "adminjs";
import prisma from "./prismaClient";
import componentLoader from "./component-loader";
import categoryResource from "../adminjs/resources/categoryResource";
import imageResource from "../adminjs/resources/imageResource";

const adminJsOptions: AdminJSOptions = {
  resources: [
    {
      resource: { model: getModelByName("User"), client: prisma },
      options: {},
    },
    {
      resource: { model: getModelByName("Product"), client: prisma },
      options: {
        properties: {
          description: {
            type: "textarea",
            props: {
              rows: 6,
            },
          },
        },
      },
    },
    {
      resource: { model: getModelByName("Review"), client: prisma },
      options: {
        properties: {
          review: {
            type: "textarea",
            props: {
              rows: 3,
            },
          },
          rating: {
            props: {
              type: "number",
              min: 1,
              max: 5,
            },
          },
        },
      },
    },
    imageResource,
    categoryResource,
  ],
  componentLoader,
};

export default adminJsOptions;
