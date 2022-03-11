import { useState } from "react";
import "./Calculator.scss";

export const Calculator = () => {
  const [price, setPrice] = useState(0);

  return (
    <section className="main-calculator">
      <h1>Ile zaoszczędzisz?</h1>
      <p>Rachunek jest prosty.</p>
      <div className="container">
        <h1>Ile pojemników na szkło zapełniasz miesięcznie?</h1>
        <input type="text" className="text" placeholder="20" />
      </div>
      <div className="container">
        <h1>Ile płacisz za wywóz jednego pojemnika na szkło?</h1>
        <input type="text" className="text" placeholder="20" />
      </div>
      <div className="result-container">
        <p>Dzięki kruszarce zaoszczędzisz</p>
        <span className="result">{price} zł</span>
        <p>rocznie.</p>
      </div>
    </section>
  );
};
