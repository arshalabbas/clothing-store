import { ComponentLoader } from "adminjs";

const componentLoader = new ComponentLoader();

componentLoader.add("ImageList", "../adminjs/components/ImageList");
componentLoader.add("ProductImage", "../adminjs/components/ProductImage");

export default componentLoader;
