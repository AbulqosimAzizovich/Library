import axios from "../axios";

const booksApi = {
  getBooks: async function () {
    return axios.get("/allbooks");
  },
  createBooks: async function () {
    return axios.post("/allbooks");
  },
};

export default booksApi;
