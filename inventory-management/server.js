require("dotenv").config();

const express = require("express");
const connectDB = require("./db");

const app = express();

connectDB();

app.use(express.json());

const productRoutes = require("./routes/productRoutes");

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
    res.send("Inventory Management API is running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});