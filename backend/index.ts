import express, { Request, Response } from "express";
import { userRouter } from "./routes/user.route";

const app = express();

app.use(express.json());

// Routes
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
