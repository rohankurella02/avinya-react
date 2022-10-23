import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Contains the value and text for the options
const languages = [
  { value: "", text: "Options" },
  { value: "en", text: "English" },
  { value: "hi", text: "Hindi" },
  { value: "te", text: "Telugu" },
];

const Navbar = () => {
  // It is a hook imported from 'react-i18next'
  const { t } = useTranslation();

  const [lang, setLang] = useState("en");

  // This function put query that helps to
  // change the language
  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:3000/";
    window.location.replace(loc + "?lng=" + e.target.value);
  };
  return (
    <div className="w-full h-[56px] px-2 bg-green-600 text-white flex items-center justify-between">
      <Link to="/">
        <h1 className="text-2xl font-medium cursor-pointer">Jeeva</h1>
      </Link>
      <div className="flex">
        <label className="mx-3">{t("choose")}</label>
        <select
          className="bg-transparent text-black"
          value={lang}
          onChange={handleChange}
        >
          {languages.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.text}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Navbar;
