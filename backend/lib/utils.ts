import * as url from "url";
import path from "path";

const __dirname = url.fileURLToPath(import.meta.url);

export const rootDir = path.join(__dirname, "../../");
