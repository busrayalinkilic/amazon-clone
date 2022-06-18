import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt=""
        />
      </Link>

      <div className="header__delivery">
        <div className="header__deliveryLogo">
          <LocationOnIcon />
        </div>
        <div className="header__deliveryText">
          <div className="header__deliveryTextName">
            <h6>Alıcı: {!user ? "Misafir" : user.email} </h6>
          </div>

          <div className="header__deliveryTextLocation">
            <h4>Kayseri 3800</h4>
          </div>
        </div>
      </div>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Merhaba {!user ? "Misafir" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Çıkış Yap" : "Giriş Yap"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">İadeper</span>
            <span className="header__optionLineTwo">ve Siparişler</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Alışveriş</span>
          <span className="header__optionLineTwo">Sepeti</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
