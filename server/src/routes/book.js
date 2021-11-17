import express from "express";
import {
  addBook,
  getBook,
  getBooks,
  deleteBook,
  updateBook,
} from "../controllers/book/index.js";
import { makeCallback } from "../express-callback/makeCallback.js";
const router = express.Router();

router.get("/", makeCallback(getBooks));
router.get("/:_id", makeCallback(getBook));
router.post("/", makeCallback(addBook));
router.put("/", makeCallback(updateBook));
router.delete("/", makeCallback(deleteBook));

export default router;
