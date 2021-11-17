import express from "express";
import { makeCallback } from "../express-callback/makeCallback.js";
const router = express.Router();

router.get("/", (req, res) => res.json({ m: "getAll" }));
router.get("/:_id", (req, res) => res.json({ m: "getOne" }));
router.post("/", (req, res) => res.json({ m: "post" }));
router.put("/", (req, res) => res.json({ m: "put" }));
router.delete("/", (req, res) => res.json({ m: "delete" }));

export default router;
