/**
 * Entry for library app
 */
import express from "express";
import cors from "cors";
import { getDatabase } from "./src/db/index.js";
import {
  bookRoutes,
  libraryRoutes,
  studentRoutes,
} from "./src/routes/index.js";

// App initialization
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "content-type");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

/**
 * initApplication
 *
 * Initialize listening to server
 * only after database is set up
 */
const PORT = process.env.PORT || 5000;
const initApplication = () => {
  app.use("/book", bookRoutes);
  app.use("/library", libraryRoutes);
  app.use("/student", studentRoutes);
  app.listen(PORT, () => console.log(`Listening for port ${PORT}`));
};

const database = getDatabase();
database
  .then(initApplication)
  .catch((error) => console.log("Error connecting to db " + error));
