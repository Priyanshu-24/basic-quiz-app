import { useSelector } from "react-redux";

const Navigation = (props) => {
  const {
    setSelectedQuestion,
    selectedAnswers,
    visitedQuestion,
    selectedQuestion,
    setVisitedQuestion,
  } = props;

  const allQuestions = useSelector((state) => state.value);

  const handleClick = (e, idx) => {
    setVisitedQuestion([...visitedQuestion, selectedQuestion]);
    setSelectedQuestion(idx);
  };

  return (
    <div className="flex justify-between flex-wrap gap-6 w-full p-5 bg-blue-400">
      {allQuestions &&
        allQuestions.map((que, idx) => {
          return (
            <div
              key={idx}
              className={
                selectedAnswers.hasOwnProperty(idx)
                  ? "w-12 h-12 border border-black rounded-full flex justify-center items-center cursor-pointer bg-green-400"
                  : visitedQuestion.includes(idx)
                  ? "w-12 h-12 border border-black rounded-full flex justify-center items-center cursor-pointer bg-orange-400"
                  : "w-12 h-12 border border-black rounded-full flex justify-center items-center bg-white cursor-pointer"
              }
              onClick={(e) => handleClick(e, idx)}
            >
              {idx + 1}
            </div>
          );
        })}
    </div>
  );
};

export default Navigation;
