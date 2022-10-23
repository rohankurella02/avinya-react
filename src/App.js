import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./home";
import Tag from "./tag";
import UserForm from "./UserForm";
import DoctorForm from "./DoctorForm";
import Choose from "./Choose";

function App() {
  return (
    <div className="mx-auto w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tags/:tag" element={<Tag />}></Route>
        <Route path="/user-login" element={<UserForm />}></Route>
        <Route path="/doctor-login" element={<DoctorForm />}></Route>
        <Route path="/choose" element={<Choose />}></Route>
      </Routes>
    </div>
  );
}

export default App;
