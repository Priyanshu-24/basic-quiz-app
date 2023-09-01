import { useEffect, useState } from "react";
import { getAllQuestions } from "../../utils/services";
import Navigation from "./Navigation";
import Question from "./Question";
import Help from "./Help";

const Quiz = () => {
  const [allQuestions, setAllQuestions] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [visitedQuestion, setVisitedQuestion] = useState([]);

  useEffect(() => {
    getAllQuestions().then((res) => setAllQuestions(res.results));
  }, []);

  return (
    <div>
      <Navigation
        allQuestions={allQuestions}
        setSelectedQuestion={setSelectedQuestion}
        selectedAnswers={selectedAnswers}
        visitedQuestion={visitedQuestion}
        selectedQuestion={selectedQuestion}
        setVisitedQuestion={setVisitedQuestion}
      />
      {allQuestions && (
        <Question
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          allQuestions={allQuestions}
          selectedQuestion={selectedQuestion}
        />
      )}
      <Help />
    </div>
  );
};

export default Quiz;
