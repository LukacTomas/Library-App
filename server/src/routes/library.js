import express from "express";
import {
  addLibrary,
  getLibraries,
  updateLibrary,
  deleteLibrary,
  getLibrary,
} from "../controllers/library/index.js";
import { makeCallback } from "../express-callback/makeCallback.js";
import cors from "cors";
const router = express.Router();
router.use(cors());

router.get("/", makeCallback(getLibraries));
router.get("/:_id", makeCallback(getLibrary));
router.post("/", makeCallback(addLibrary));
router.put("/", makeCallback(updateLibrary));
router.delete("/", makeCallback(deleteLibrary));

export default router;
