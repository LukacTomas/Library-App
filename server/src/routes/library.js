import express from "express";
import { getLibraries, addLibrary } from "../controllers/library/index.js";
import { makeCallback } from "../express-callback/callback.js";
const router = express.Router();

router.get("/", makeCallback(getLibraries));
router.post("/", makeCallback(addLibrary));
export default router;
