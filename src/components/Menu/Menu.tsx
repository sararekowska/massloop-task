import dev from "../../images/dev.png";
import "./Menu.scss";
import { ShopButton } from "../ShopButton/ShopButton";
import { Calculator } from "../Calculator/Calculator";
import { Footer } from "../Footer/Footer";
import { useTranslation } from "react-i18next";

export const Menu = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="main">
        <h1>{t("kruszarka")}</h1>
        <img src={dev} className="dev-img" alt="kruszarka" />
        <span className="btn">
          <ShopButton />
        </span>
        <section className="yellow-box">
          <h2>{t("yellowbold")}</h2>
          <p>{t("yellowp")}</p>
        </section>
      </section>

      <Calculator />
      <Footer />
    </>
  );
};
