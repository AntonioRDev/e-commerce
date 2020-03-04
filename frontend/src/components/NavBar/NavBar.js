import React from "react";
import "./NavBar.css";
import ShoppingCart from "../../assets/icons/shopping-cart.svg";
import User from "../../assets/icons/user.svg";

export default function NavBar() {
  return (
    <div className="nb-container">
      <img
        src="https://www.terabyteshop.com.br/img/header-logo.png"
        alt="logo"
        height={48}
      />

      <div className="nb-input-container">
        <input
          type="text"
          className="nb-search-input"
          placeholder="Pesquisar ..."
        />
      </div>

      <div className="nb-user-container">
        <img src={User} alt="user" className="cursor-pointer" />
      </div>

      <div className="nb-cart-container">
        <img
          src={ShoppingCart}
          alt="cart"
          className="cursor-pointer"
          height={44}
        />
      </div>
    </div>
  );
}
