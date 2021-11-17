import mongoose from "mongoose";
import { mongoURI } from "./database-config.js";

const database = mongoose.connect(mongoURI);

export const getDatabase = () => {
  return database;
};
