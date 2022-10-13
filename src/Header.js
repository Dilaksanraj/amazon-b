import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";


function Header() {



  return (
    <div className="header">
      <Link to="/">

      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      </Link>
      

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <Link to="/login">
          <span className="header__optionLineTwo" style={{textDecoration:'none'}}>Sign in</span>
          </Link>
          
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">prime</span>
        </div>

        <Link to="/checkout">

          <div className="header__optionBasket">

            <ShoppingBasketIcon />
            <span className="header__optionLineTwo  header__basketCount">

            </span>
          </div>

        </Link>


      </div>
    </div>

  );
}

export default Header;