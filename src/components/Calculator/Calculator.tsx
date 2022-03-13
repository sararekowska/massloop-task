import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Calculator.scss";

export const Calculator = () => {
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);
  const { t } = useTranslation();

  return (
    <section className="main-calculator">
      <h1>{t("ile")}</h1>
      <p>{t("rachunek")}</p>

      <div className="input-container">
        <div className="container">
          <h1>{t("pojemniki")}</h1>
          <input
            type="number"
            placeholder="20"
            onChange={(event) =>
              isNaN(parseInt(event.target.value))
                ? setPrice1(0)
                : setPrice1(parseInt(event.target.value))
            }
          />
        </div>
        <div className="container">
          <h1>{t("cenawywoz")}</h1>
          <input
            type="number"
            placeholder="20"
            onChange={(event) =>
              isNaN(parseInt(event.target.value))
                ? setPrice2(0)
                : setPrice2(parseInt(event.target.value))
            }
          />
        </div>
      </div>
      <div className="result-container">
        <p>{t("oszczedzisz")}</p>
        <span className={price1 && price2 ? "result result-color-change" : "result"} role="figure">
          {Math.round(12 * (price1 * price2 - price1 * (price2 / 5)))} zł
        </span>
        <p>{t("rocznie")}</p>
      </div>
    </section>
  );
};
