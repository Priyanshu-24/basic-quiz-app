const Navigation = (props) => {
  const { allQuestions, setSelectedQuestion } = props;

  const handleClick = (e, idx) => {
    setSelectedQuestion(idx);
  };

  return (
    <div className="flex justify-between flex-wrap gap-6 w-full p-5 bg-blue-400">
      {allQuestions &&
        allQuestions.map((que, idx) => {
          return (
            <div
              key={idx}
              className="w-12 h-12 border border-black rounded-full flex justify-center 
              items-center bg-white cursor-pointer"
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
