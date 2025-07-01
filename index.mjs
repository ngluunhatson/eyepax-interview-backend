import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import "./loadEnv.mjs";
import ProductRouter from "./routes/products.route.mjs";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to the Express API!");
});

app.use("/api/products", ProductRouter);

// Error Handler Middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(err.statusCode || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});

mongoose.connect(process.env.MONGODB_DB_URI).then(() => {
  console.log("Connected to Database");
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
});
