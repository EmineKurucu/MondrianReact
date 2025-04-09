import  {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InitialPage  from "./Page/InitialPage";
import Mondrian  from "./Mondrian";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/mondrian" element={<Mondrian />} />
      </Routes>
    </Router>
  );
}

export default App;
