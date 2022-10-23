import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function DoctorForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    setError(false);
  };

  return (
    <div className="form">
      <div className="btn_display">
        <Link to="/user-login">
          <button onClick={handleSubmit} className="btn" type="submit">
            User
          </button>
        </Link>
        <Link to="/doctor-login">
          <button onClick={handleSubmit} className="btn" type="submit">
            Doctor
          </button>
        </Link>
      </div>
    </div>
  );
}
