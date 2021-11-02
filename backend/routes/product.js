import express from "express";
import product from "../controllers/product.js";
const router = express.Router();

//http://localhost:3001/api/role/registerProduct
router.post("/registerProduct", product.registerProduct);

export default router;
