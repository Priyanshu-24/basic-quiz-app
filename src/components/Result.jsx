import { decodeEntities } from "../utils/helper";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Result = () => {
  const allQuestions = useSelector((state) => state.value.allQuestions);
  const selectedAnswers = useSelector((state) => state.value.selectedAnswers);

  return (
    <>
      <Navbar />
      <h1 className="p-10 text-xl font-semibold">Results:</h1>
      <div className="px-10">
        {allQuestions.map((question, idx) => {
          return (
            <div className="mb-7">
              <div>
                {idx + 1}) {decodeEntities(question.question)}
              </div>
              <div className="text-sm px-8">
                Your Answer: {decodeEntities(selectedAnswers[idx])}
              </div>
              <div className="text-sm px-8">
                Correct Answer: {decodeEntities(question.correct_answer)}
              </div>
              <div className="text-sm px-8">
                Verdict:{" "}
                <span className="font-semibold">
                  {selectedAnswers[idx] === question.correct_answer
                    ? "Correct"
                    : "Wrong"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Result;
