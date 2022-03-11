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
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="image">
          <img src={Logo} alt="logo" />
        </div>
        <Select
          options={Languages}
          defaultValue={Languages[1]}
          className="select-container"
          classNamePrefix="select"
        />
        <Hamburger toggled={isOpen} toggle={setOpen} size={40} />
      </header>
      <nav className={isOpen ? "nav-mobile slide-in" : "nav-mobile slide-out"}>
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
