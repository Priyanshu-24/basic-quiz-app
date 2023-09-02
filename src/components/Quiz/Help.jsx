const Help = () => {
  return (
    <div className="px-20 border-t-4 p-5">
      <h2 className="font-semibold text-lg">Help:</h2>
      <ul>
        <li>
          - You cannot submit the Quiz before Attempting all the questions
        </li>
        <li>
          - Attempted questions are in{" "}
          <span className="text-green-600 font-semibold">green</span> background
          in the navigation panel
        </li>
        <li>
          - Visited questions which are not attempted are in{" "}
          <span className="text-orange-600 font-semibold">orange</span>{" "}
          background in the navigation panel
        </li>
        <li>- Quiz will be automatically be submitted after 30 minutes</li>
      </ul>
    </div>
  );
};

export default Help;
