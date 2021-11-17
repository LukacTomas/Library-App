/**
 * Entry for library app
 */
import express from "express";
import cors from "cors";
import { getDatabase } from "./src/db/index.js";
import { libraryRoutes } from "./src/routes/index.js";

// App initialization
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

/**
 * initApplication
 *
 * Initialize listening to server
 * only after database is set up
 */
const PORT = process.env.PORT || 5000;
const initApplication = () => {
  app.use("/library", libraryRoutes);
  app.listen(PORT, () => console.log(`Listening for port ${PORT}`));
};

const database = getDatabase();
database
  .then(initApplication)
  .catch((error) => console.log("Error connecting to db " + error));
