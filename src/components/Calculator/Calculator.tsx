import { useState } from "react";
import "./Calculator.scss";

export const Calculator = () => {
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);

  return (
    <section className="main-calculator">
      <h1>Ile zaoszczędzisz?</h1>
      <p>Rachunek jest prosty.</p>

      <div className="input-container">
        <div className="container">
          <h1>Ile pojemników na szkło zapełniasz miesięcznie?</h1>
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
          <h1>Ile płacisz za wywóz jednego pojemnika na szkło?</h1>
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
        <p>Dzięki kruszarce zaoszczędzisz</p>
        <span className={price1 && price2 ? "result result-color-change" : "result"}>
          {Math.round(12 * (price1 * price2 - price1 * (price2 / 5)))} zł
        </span>
        <p>rocznie.</p>
      </div>
    </section>
  );
};
