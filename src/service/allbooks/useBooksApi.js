import api from "../axios";

const useBooksApi = {
  getBooks: () => api.get("books"),
  addBooks: (data) => api.post("books", data),
};

export default useBooksApi;
