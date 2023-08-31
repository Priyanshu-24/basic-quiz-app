import axios from "axios";

export const getAllQuestions = () => {
  return axios
    .get("https://opentdb.com/api.php?amount=15")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
