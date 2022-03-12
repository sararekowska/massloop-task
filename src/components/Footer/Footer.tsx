import { useTranslation } from "react-i18next";
import "./Footer.scss";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <section className="footer">
      <p>{t("footerp")}</p>
      <div className="buy-btn">
        <span className="buy-btn-strong">{t("kup")}&nbsp;</span>8499 zł
      </div>
      <h1>
        {t("footerbold1")} <br />
        {t("footerbold2")}
      </h1>
    </section>
  );
};
