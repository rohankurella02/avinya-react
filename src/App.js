import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./home";
import Tag from "./tag";

function App() {
  return (
    <div className="mx-auto w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tags/:tag" element={<Tag />}></Route>
      </Routes>
    </div>
  );
}

export default App;
