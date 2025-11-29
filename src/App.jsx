import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home.jsx";
import SurahPage from "./pages/surahPage.jsx";
import MemorizePage from "./pages/memorizePage.jsx";

function App() {
  return (
    <Router
      basename={
        // eslint-disable-next-line no-undef
        process.env.NODE_ENV === "production" ? "/kalimat-bikalimat/" : "/"
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<SurahPage />} />
        <Route path="/:id/memorize" element={<MemorizePage />} />
      </Routes>
    </Router>
  );
}

export default App;
