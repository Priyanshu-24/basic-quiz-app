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

const Quiz = () => {
  const naviagte = useNavigate();
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [visitedQuestion, setVisitedQuestion] = useState([]);

  const dispatch = useDispatch();
  const allQuestions = useSelector((state) => state.value.allQuestions);

  useEffect(() => {
    getAllQuestions().then((res) => dispatch(addQuestions(res.results)));
  }, [dispatch]);

  const onSubmit = () => {
    naviagte("/result");
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
      {allQuestions && <Question selectedQuestion={selectedQuestion} />}
      <div className="w-full flex justify-end pr-16 pb-4">
        <Button variant="contained" onClick={onSubmit}>
          Submit Quiz
        </Button>
      </div>
      <Help />
    </div>
  );
};

export default Quiz;
