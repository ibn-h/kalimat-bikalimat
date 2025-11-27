import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home.jsx";
import SurahPage from "./pages/surahPage.jsx";
import MemorizePage from "./pages/memorizePage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/kalimat-bikalimat" element={<HomePage />} />
        <Route path="/kalimat-bikalimat/:id" element={<SurahPage />} />
        <Route
          path="/kalimat-bikalimat/memorize/:id"
          element={<MemorizePage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
