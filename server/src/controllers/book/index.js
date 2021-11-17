import { createBook } from "./createBook.js";
import { listBooks } from "./listBooks.js";
import { viewBook } from "./viewBook.js";
import { flushBook } from "./flushBook.js";
import { upgradeBook } from "./upgradeBook.js";

import { requestCall } from "../../express-callback/requestCall.js";

export const addBook = requestCall(createBook);
export const getBooks = requestCall(listBooks);
export const getBook = requestCall(viewBook);
export const deleteBook = requestCall(flushBook);
export const updateBook = requestCall(upgradeBook);
