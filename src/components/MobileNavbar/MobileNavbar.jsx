import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { GiCardExchange } from "react-icons/gi";
import { BiNews } from "react-icons/bi";

export function MoblieNavbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header className="main-header">
      <div className="logo-moblie-container">
        <img src="/images/logo.png" alt="logo-img" />
        <h2>
          <Link to="/" className="title">
            Cryptoverse
          </Link>
        </h2>
      </div>
      <nav className="mobile-menu">
        <nav>
        <NavLink
          to="/"
          className="moblie-nav-link"
        >
          <AiOutlineHome />
          Home
        </NavLink>
        <NavLink
          to="/cryptocurrencies"
          className="moblie-nav-link"
        >
          <RiMoneyDollarBoxFill />
          Cryptocurrencies
        </NavLink>
        <NavLink
          to="/exchanges"
          className="moblie-nav-link"
        >
          <GiCardExchange />
          Exchanges
        </NavLink>
        <NavLink
          to="/news"
          className="moblie-nav-link"
        >
          <BiNews />
          News
        </NavLink>
      </nav>
      </nav>
    </header>
  )
}