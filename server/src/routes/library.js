import express from "express";
import {
  addLibrary,
  getLibraries,
  updateLibrary,
} from "../controllers/library/index.js";
import { makeCallback } from "../express-callback/callback.js";
const router = express.Router();

router.get("/", makeCallback(getLibraries));
router.post("/", makeCallback(addLibrary));
router.put("/", makeCallback(updateLibrary));
export default router;
