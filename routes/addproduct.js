import express from "express";
import { addProduct } from "../controllers/addproduct.controller.js";

const router = express.Router();


router.post("/addproduct",addProduct);


export default router;