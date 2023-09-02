import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const naviagte = useNavigate();
  const name = useSelector((state) => state.value.name);

  useEffect(() => {
    if (!name) {
      naviagte("/");
    }
  }, [name, naviagte]);

  return (
    <div className="flex justify-between p-5 bg-red-400 text-xl font font-semibold shadow-2xl">
      <div>Basic Quiz App</div>
      <div>Hello : {name}</div>
    </div>
  );
};

export default Navbar;
