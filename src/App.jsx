import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home.jsx";
import SurahPage from "./pages/surahPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:id" element={<SurahPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
