import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import QuizComponent from "./QuizComponent";
import ResultComponent from "./ResultComponent";
import MainComponent from "./MainComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/quiz" element={<QuizComponent />} />
        <Route path="/result" element={<ResultComponent />} />
      </Routes>
    </div>
  );
}

export default App;
