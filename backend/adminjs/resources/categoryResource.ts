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
      image: {
        isVisible: { list: true, show: true, edit: false, filter: false },
        components: {
          list: "ImageList",
          show: "ImageList",
        },
      },
    },
  },
  features: [
    uploadFileFeature({
      provider: {
        local: {
          bucket: path.join(rootDir, "public", "uploads"),
          opts: { baseUrl: "/uploads" },
        },
      },
      uploadPath: (record) => {
        return `category-images/${record.id()}.jpg`;
      },
      properties: {
        key: "image",
        file: "uploadFile",
      },
      validation: {
        mimeTypes: ["image/jpg", "image/jpeg", "image/png"],
        maxSize: 10 * 1024 * 1024,
      },
      componentLoader,
    }),
  ],
};

export default categoryResource;
