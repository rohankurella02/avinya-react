import { Route, Routes } from "react-router-dom";
import "./App.css";
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
