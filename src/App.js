import "./App.css";
import { Routes, Route } from "react-router-dom";

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
