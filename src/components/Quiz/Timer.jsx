import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const naviagte = useNavigate();

  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          naviagte("/result");
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="flex justify-end">
      <div className="bg-green-300 w-[150px] p-2 flex justify-center font-semibold">
        {minutes === 0 && seconds === 0 ? null : (
          <h1>
            {" "}
            {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Timer;
