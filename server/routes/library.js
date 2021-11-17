import express from "express";
import { getLibraries } from "../controllers/library.js";

const router = express.Router();

router.get("/", makeCallback(getLibraries));
export default router;
