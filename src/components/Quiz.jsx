import { useEffect, useState } from "react";
import { getAllQuestions } from "../utils/services";

const Quiz = () => {
  const [allQuestions, setAllQuestions] = useState(null);

  useEffect(() => {
    getAllQuestions().then((res) => setAllQuestions(res.results));
  }, []);

  return <div>Quiz</div>;
};

export default Quiz;
