import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        {/* alıcı adres*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Alıcı Adres</h3>
          </div>
          <div className="payment__adress">
            <p>{user?.email}</p>
            <p>Erciyes Üniversitesi</p>
            <p>Talas/KAYSERİ</p>
          </div>
        </div>
        {/* ürünler*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3> adres ve ürünler</h3>
          </div>
          <div className="payment__items">
               {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    
                    />
               ))}
          </div>
        </div>
        {/* ödeme yöntemi*/}
        <div className="payment__section"></div>
      </div>
    </div>
  );
}

export default Payment;
