import MenuList from "./MenuList";
import { useState } from "react";

const Footer = function () {
  let [copyrightYear, setCopyrightYear] = useState(2023);
  const developerName = "Shreyas";
  // must return JSX
  function handleYearChange() {
    setCopyrightYear(2024);
  }
  return (
    <footer className="text-center">
      <hr />
      <MenuList/>
      <p>
        &copy; Copyright {copyrightYear} | {developerName}
      </p>
      <button onClick={handleYearChange}>Change Copyright year</button>
    </footer>
  );
};

export default Footer;
