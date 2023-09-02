import { useEffect, useState } from "react";
import { getAllQuestions } from "../../utils/services";
import Navigation from "./Navigation";
import Question from "./Question";
import Help from "./Help";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addQuestions } from "../../app/questionsSlice";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Timer from "./Timer";

const Quiz = () => {
  const naviagte = useNavigate();
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [visitedQuestion, setVisitedQuestion] = useState([]);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const allQuestions = useSelector((state) => state.value.allQuestions);
  const allAnswers = useSelector((state) => state.value.selectedAnswers);

  useEffect(() => {
    getAllQuestions().then((res) => dispatch(addQuestions(res.results)));
  }, [dispatch]);

  const onSubmit = () => {
    if (Object.keys(allAnswers).length === 15) naviagte("/result");
    else {
      setError("Please attempt all the questions");
    }
  };

  return (
    <div>
      <Navbar />
      <Navigation
        setSelectedQuestion={setSelectedQuestion}
        visitedQuestion={visitedQuestion}
        selectedQuestion={selectedQuestion}
        setVisitedQuestion={setVisitedQuestion}
      />
      <Timer />
      {allQuestions && <Question selectedQuestion={selectedQuestion} />}
      <div className="w-full flex flex-col items-end justify-end pr-16 pb-4">
        <Button variant="contained" onClick={onSubmit}>
          Submit Quiz
        </Button>
        <div>{error}</div>
      </div>
      <Help />
    </div>
  );
};

export default Quiz;
