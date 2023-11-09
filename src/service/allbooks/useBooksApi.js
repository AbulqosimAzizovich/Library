import api from "../axios";

const useBooksApi = {
  getBooks: () => api.get("/books"),
  addBooks: (data) => api.post("/books", data),
  searchBooks: () => api.get("/books/:title"),
};

export default useBooksApi;
