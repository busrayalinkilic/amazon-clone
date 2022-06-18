import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (  
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Toplam ({basket.length} ürün): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Hediye paketi yap
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₺"}
      />
      <button>Ödeme Adımına Geç</button>
    </div>
  );
}

export default Subtotal;
