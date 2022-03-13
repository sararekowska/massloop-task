import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import Logo from "../../images/logo.png";
import Select from "react-select";
import "./Header.scss";
import i18n from "../../translations/i18n";
import { useTranslation } from "react-i18next";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Languages = [
  { label: "EN", value: "en" },
  { label: "PL", value: "pl" },
  { label: "DE", value: "de" },
];

export const Header = () => {
  const [nav, setNav] = useState("");
  const [lang, setLang] = useState("pl");

  const { t } = useTranslation();

  return (
    <>
      <header className="header">
        <div className="image">
          <LazyLoadImage alt="logo" effect="opacity" src={Logo} />
        </div>
        <div className="nav-desktop">
          <a href="/calculator">{t("zyski")}</a>
          <a href="/product">{t("produkt")}</a>
          <a href="/">{t("kontakt")}</a>
          <a href="/">FAQ</a>
        </div>
        <div className="header-right">
          <Select
            options={Languages}
            defaultValue={Languages[1]}
            className="select-container"
            classNamePrefix="select"
            onChange={(event) => event && setLang(event.value)}
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
            {useEffect(() => {
              i18n.changeLanguage(lang);
            })}
          </div>
          <LazyLoadComponent>
            <div className="nav-desktop-btn">
              <h1>{t("kup")}</h1>
            </div>
          </LazyLoadComponent>
        </div>
      </header>
      <nav className={`nav-mobile-closed ${nav}`}>
        <div className="nav-flex">
          <a href="/calculator">{t("zyski")}</a>
          <a href="/product">{t("produkt")}</a>
          <a href="/">{t("kontakt")}</a>
          <a href="/">FAQ</a>
          <div className="nav-btn">{t("kup")}</div>
        </div>
      </nav>
    </>
  );
};
