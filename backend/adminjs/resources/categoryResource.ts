import { getModelByName } from "@adminjs/prisma";
import uploadFileFeature from "@adminjs/upload";
import prisma from "../../config/prismaClient";
import path from "path";
import componentLoader from "../../config/component-loader";
import { rootDir } from "../../lib/utils";

const categoryResource = {
  resource: { model: getModelByName("Category"), client: prisma },
  options: {
    properties: {
      image: { isVisible: false },
    },
  },
  features: [
    uploadFileFeature({
      provider: {
        local: {
          bucket: path.join(rootDir, "public", "uploads"),
          opts: { baseUrl: "./public/uploads" },
        },
      },
      uploadPath: (record, filename) => {
        return `category-images/${record.id()}.jpg`;
      },
      properties: {
        key: "image",
        file: "uploadFile",
      },
      componentLoader,
    }),
  ],
};

export default categoryResource;
