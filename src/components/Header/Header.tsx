import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import Logo from "../../images/logo.png";
import Select from "react-select";
import "./Header.scss";
import i18n from "../../translations/i18n";
import { useTranslation } from "react-i18next";

const Languages = [
  { label: "EN", value: "en" },
  { label: "PL", value: "pl" },
  { label: "DE", value: "de" }
];

export const Header = () => {
  const [nav, setNav] = useState("");

  const { t } = useTranslation();

  const handler = (event: any) => {
    const value = event.value;
    i18n.changeLanguage(value);
  };

  return (
    <>
      <header className="header">
        <div className="image">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav-desktop">
          <a>{t("zyski")}</a>
          <a>{t("produkt")}</a>
          <a>{t("kontakt")}</a>
          <a>FAQ</a>
        </div>
        <div className="header-right">
          <Select
            options={Languages}
            defaultValue={Languages[1]}
            className="select-container"
            classNamePrefix="select"
            onChange={handler}
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
            <h1>{t("kup")}</h1>
          </div>
        </div>
      </header>
      <nav className={`nav-mobile-closed ${nav}`}>
        <div className="nav-flex">
          <a>{t("zyski")}</a>
          <a>{t("produkt")}</a>
          <a>{t("kontakt")}</a>
          <a>FAQ</a>
          <div className="nav-btn">{t("kup")}</div>
        </div>
      </nav>
    </>
  );
};
