import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";

// component
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import CharacterById from "./pages/CharacterById";
import Signup from "./pages/Singup";
import Connect from "./pages/Connect";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const setUser = (tokenToCheck) => {
    if (tokenToCheck !== null) {
      Cookies.set("userToken", tokenToCheck);
    } else {
      Cookies.remove("userToken");
    }
    setToken(tokenToCheck);
  };
  return (
    <Router>
      <Header token={token} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home token={token} />} />
        <Route path="/signup" element={<Signup token={token} />} />
        <Route path="/comics/:page" element={<Comics setUser={setUser} />} />
        <Route path="/connect/" element={<Connect setUser={setUser} />} />
        <Route path="/comics/" element={<Comics setUser={setUser} />} />
        <Route path="/characters" element={<Characters setUser={setUser} />} />
        <Route
          path="/character/:characterId"
          element={<CharacterById setUser={setUser} />}
        />
      </Routes>
      <ScrollToTop />
      <Footer />
    </Router>
  );
}
export default App;
