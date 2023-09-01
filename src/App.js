import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
