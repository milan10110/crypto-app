import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import CoinPage from "./pages/CoinPage";
import { useEffect, useState } from "react";

function App() {
  const [themeColor, setThemeColor] = useState("#3a80e9");

  const themeChanger = () => {
    console.log("logging");
    setThemeColor(
      `hsl(${Math.floor(Math.random() * (360 - 0 + 1)) + 0}deg, 80%, 57%)`
    );
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--blue", themeColor);
  }, [themeColor]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home themeChanger={themeChanger} />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard themeChanger={themeChanger} themeColor={themeColor} />
          }
        />
        <Route path="/search" element={<Search />} />
        <Route
          path="/coin"
          element={<CoinPage themeChanger={themeChanger} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
