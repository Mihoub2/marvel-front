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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/comics/:page" element={<Comics />} />
        <Route path="/comics/" element={<Comics />} />
        <Route path="/characters" element={<Characters />} />{" "}
        <Route path="/character/:characterId" element={<CharacterById />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
