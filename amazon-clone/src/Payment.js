import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Ödeme (<Link to="/checkout">{basket?.length} Ürün</Link>)
        </h1>

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
            <h3>Ürünler Önizleme</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
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
        <div className="payment__section">
          <div className="payment__title">
            <h3>Ödeme Yöntemi</h3>
          </div>
          <div className="payment__details">{/* stripe */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
