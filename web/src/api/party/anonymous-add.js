import axios from "axios";

export default {
  add() {
    return axios.get(
      "https://localhost:4000/api/anonymous-add"
    );
  },
};