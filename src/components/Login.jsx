import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    console.log(name);
    if (!nameRegex.test(name)) {
      setError("Invalid Name!");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Invalid Email!");
      return;
    }

    setError("");
    navigate("/quiz");
  };

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-gray-100">
      <div
        className="h-80 w-80 border flex flex-col justify-between items-center py-4 bg-white 
      rounded-3xl shadow-xl"
      >
        <div className="text-2xl">Basic Quiz App</div>
        <div className="flex flex-col justify-between items-center gap-8">
          <TextField
            variant="outlined"
            value={name}
            label="Name"
            size="small"
            placeholder="Please Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Email"
            size="small"
            placeholder="Please Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button variant="outlined" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
      <div className="mt-4 text-red-600">{error}</div>
    </div>
  );
};

export default Login;
