import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import Logo from "../../images/logo.png";
import Select from "react-select";
import "./Header.scss";

const Languages = [
  { label: "EN", value: "en" },
  { label: "PL", value: "pl" },
  { label: "DE", value: "de" }
];

export const Header = () => {
  const [nav, setNav] = useState("");

  return (
    <>
      <header className="header">
        <div className="image">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav-desktop">
          <a>Policz zyski</a>
          <a>O produkcie</a>
          <a>Kontakt</a>
          <a>FAQ</a>
        </div>
        <div className="header-right">
          <Select
            options={Languages}
            defaultValue={Languages[1]}
            className="select-container"
            classNamePrefix="select"
          />
          <div className="hamburger">
            <Hamburger
              size={40}
              onToggle={(toggled) => {
                if (toggled) {
                  setNav("open");
                } else {
                  setNav("");
                }
              }}
            />
          </div>
          <div className="nav-desktop-btn">
            <h1>kup</h1>
          </div>
        </div>
      </header>
      <nav className={`nav-mobile-closed ${nav}`}>
        <div className="nav-flex">
          <a>Policz zyski</a>
          <a>O produkcie</a>
          <a>Kontakt</a>
          <a>FAQ</a>
          <div className="nav-btn">kup</div>
        </div>
      </nav>
    </>
  );
};
