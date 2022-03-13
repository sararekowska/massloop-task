import dev from "../../images/dev.png";
import "./Menu.scss";
import { ShopButton } from "../ShopButton/ShopButton";
import { Calculator } from "../Calculator/Calculator";
import { Footer } from "../Footer/Footer";
import { useTranslation } from "react-i18next";
import { LazyLoadImage, LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

export const Menu = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="main">
        <h1>{t("kruszarka")}</h1>
        <LazyLoadImage alt="kruszarka" effect="opacity" className="dev-img" src={dev} />
        <span className="btn">
          <LazyLoadComponent>
            <ShopButton />
          </LazyLoadComponent>
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
