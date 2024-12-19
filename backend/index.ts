import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import * as url from "url";
import Connect from "connect-pg-simple";
import session from "express-session";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// Routes Impport
import { userRouter } from "./routes/user.route";
import { categoryRouter } from "./routes/category.route";
import { productRouter } from "./routes/product.route";

// AdminJS Imports
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import { Database, Resource } from "@adminjs/prisma";

import adminJsOptions from "./config/adminjs";
import { verifyJwt } from "./middlewares/verifyJwt";
import { reviewsRouter } from "./routes/reviews.route";

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

// static files configuration
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/user", userRouter);
app.use("/category", verifyJwt, categoryRouter);
app.use("/products", verifyJwt, productRouter);
app.use("/reviews", verifyJwt, reviewsRouter);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

// AdminJS Configurations
const DEFAULT_ADMIN = {
  email: "admin@mail.com",
  password: "password",
};

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

const admin = new AdminJS(adminJsOptions);
const ConnectSession = Connect(session);
const sessionStore = new ConnectSession({
  conObject: {
    connectionString: process.env.DATABASE_URL,
  },
  tableName: "session",
  createTableIfMissing: true,
});

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
  admin,
  {
    authenticate,
    cookieName: "adminjs",
    cookiePassword: "sessionsecret",
  },
  null,
  {
    store: sessionStore,
    resave: true,
    saveUninitialized: true,
    secret: "sessionsecret",
    name: "adminjs",
  }
);
app.use(admin.options.rootPath, adminRouter);

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
  console.log(
    `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
  );
});

admin.watch();
