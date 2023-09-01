import { decodeEntities } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedAnswers } from "../../app/questionsSlice";

const Question = (props) => {
  const { selectedQuestion } = props;

  const allQuestions = useSelector((state) => state.value.allQuestions);
  const selectedAnswers = useSelector((state) => state.value.selectedAnswers);
  const dispatch = useDispatch();

  const options =
    allQuestions.length === 0
      ? null
      : [
          ...allQuestions[selectedQuestion].incorrect_answers,
          allQuestions[selectedQuestion].correct_answer,
        ];

  const onSelectOption = (e, option) => {
    dispatch(addSelectedAnswers({ option, selectedQuestion }));
  };

  // decodeEntities will convert html special characters to noraml characters
  return (
    <div className="w-full flex flex-col mt-7 py-5 px-20">
      <div className="font-semibold">Please select the correct option:</div>
      <div className="font-semibold text-lg mt-5">
        <span className="mr-3">{`${selectedQuestion + 1})`}</span>
        {allQuestions.length !== 0 &&
          decodeEntities(allQuestions[selectedQuestion].question)}
      </div>
      <div className="mt-5 ml-7">
        {options &&
          options.map((option) => {
            return (
              <div
                key={option}
                className={
                  selectedAnswers[selectedQuestion] === option
                    ? `bg-green-400 border border-black my-5 p-2 rounded-lg w-[500px] max-w-full 
                  cursor-pointer`
                    : `border border-black my-5 p-2 rounded-lg w-[500px] max-w-full 
              cursor-pointer`
                }
                onClick={(e) => onSelectOption(e, option)}
              >
                {decodeEntities(option)}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Question;
