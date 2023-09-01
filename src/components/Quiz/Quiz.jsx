import { useEffect, useState } from "react";
import { getAllQuestions } from "../../utils/services";
import Navigation from "./Navigation";
import Question from "./Question";
import Help from "./Help";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addQuestions } from "../../app/questionsSlice";

const Quiz = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [visitedQuestion, setVisitedQuestion] = useState([]);

  const dispatch = useDispatch();
  const allQuestions = useSelector((state) => state.value);

  useEffect(() => {
    getAllQuestions().then((res) => dispatch(addQuestions(res.results)));
  }, []);

  return (
    <div>
      <Navigation
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
          selectedQuestion={selectedQuestion}
        />
      )}
      <Help />
    </div>
  );
};

export default Quiz;
