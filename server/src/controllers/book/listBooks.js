import { getAllBooks } from "../../db/use-cases/book.js";

export const listBooks = async (httpRequest) => {
  const list = await getAllBooks();
  return list;
};
