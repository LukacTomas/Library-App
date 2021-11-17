/**
 * Entry for library app
 */
import express from "express";
import cors from "cors";

// App initialization
const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

console.log("I am test");
