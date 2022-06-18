import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to={"/"}>
        <img
          className="header_logo "
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
      <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionLineOne">Merhaba {!user ? 'Guest' : user.email}</span>
            <span className="header_optionLineTwo">{user ? 'Çıkış Yap' : 'Giriş Yap'}</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne"> İadeler </span>
          <span className="header_optionLineTwo"> ve Siparişler</span>
        </div>

        

        <Link to={"/checkout"}>
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>{" "}
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne"> Alışveriş</span>
          <span className="header_optionLineTwo"> Sepeti</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
