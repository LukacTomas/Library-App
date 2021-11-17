import express from "express";
import { getLibraries } from "../controllers/library/index.js";
import { makeCallback } from "../express-callback/callback.js";
const router = express.Router();

router.get("/", makeCallback(getLibraries));
export default router;
