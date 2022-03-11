import dev from "../../images/dev.png";
import "./Menu.scss";
import { ShopButton } from "../ShopButton/ShopButton";
import { Calculator } from "../Calculator/Calculator";

export const Menu = () => {
  return (
    <>
      <section className="main">
        <h1>Inteligentna kruszarka, która zamienia szkło w piasek.</h1>
        <img src={dev} alt="kruszarka" />
        <span className="btn">
          <ShopButton />
        </span>
      </section>
      <section className="yellow-box">
        <h2>Płać 5 razy mniej za wywóz odpadów szklanych.</h2>
        <p>
          Kruszarka zmniejsza gabaryty szklanych śmieci, a Ty płacisz PIĘ-CIO-KROT-NIE niższe
          rachunki za ich wywóz.
        </p>
      </section>
      <Calculator />
    </>
  );
};
