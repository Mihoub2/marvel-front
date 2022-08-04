import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// component
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import CharacterById from "./pages/CharacterById";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics/:characterId" element={<CharacterById />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
