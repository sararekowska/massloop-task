import { useTranslation } from "react-i18next";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "./Footer.scss";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <section className="footer">
      <p>{t("footerp")}</p>
      <LazyLoadComponent>
        <div className="buy-btn">
          <span className="buy-btn-strong">{t("kup")}&nbsp;</span>8499 zł
        </div>
      </LazyLoadComponent>
      <h1>
        {t("footerbold1")} <br />
        {t("footerbold2")}
      </h1>
    </section>
  );
};
