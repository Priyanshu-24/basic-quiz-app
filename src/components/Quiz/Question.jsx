import { decodeEntities, shuffleArray } from "../../utils/helper";

const Question = (props) => {
  const { allQuestions, selectedQuestion } = props;

  const options = [
    ...allQuestions[selectedQuestion].incorrect_answers,
    allQuestions[selectedQuestion].correct_answer,
  ];

  // shuffling the options inorder to prevent first option to be correct always
  const shuffledOptions = shuffleArray(options);

  // decodeEntities will convert html special characters to noraml characters
  return (
    <div className="w-full flex flex-col justify-center items-center mt-7">
      <div>{decodeEntities(allQuestions[selectedQuestion].question)}</div>

      {shuffledOptions.map((option) => {
        return <div key={option}>{option}</div>;
      })}
    </div>
  );
};

export default Question;
