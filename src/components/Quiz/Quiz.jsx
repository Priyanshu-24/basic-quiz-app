import { useEffect, useState } from "react";
import { getAllQuestions } from "../../utils/services";
import Navigation from "./Navigation";
import Question from "./Question";

const Quiz = () => {
  const [allQuestions, setAllQuestions] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  useEffect(() => {
    getAllQuestions().then((res) => setAllQuestions(res.results));
  }, []);

  return (
    <div>
      <Navigation
        allQuestions={allQuestions}
        setSelectedQuestion={setSelectedQuestion}
      />
      {allQuestions && (
        <Question
          allQuestions={allQuestions}
          selectedQuestion={selectedQuestion}
        />
      )}
    </div>
  );
};

export default Quiz;
