import axios from "../axios";

const useAuth = {
  signIn: async function () {
    return axios.get("/myself");
  },
  signUp: async function () {
    return axios.post("/signup");
  },
};

export default useAuth;
