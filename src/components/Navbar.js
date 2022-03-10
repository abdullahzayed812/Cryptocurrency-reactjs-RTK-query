import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { GiCardExchange } from "react-icons/gi";
import { BiNews } from "react-icons/bi";

export function Navbar() {
  return (
    <aside className="sidebar">
      <header className="logo-container">
        <img src="/images/logo.png" alt="logo-img" />
        <h2>
          <NavLink to="/" className="title">
            Cryptoverse
          </NavLink>
        </h2>
      </header>
      <nav>
        <NavLink
          to="/"
          className="nav-links"
        >
          <AiOutlineHome />
          Home
        </NavLink>
        <NavLink
          to="/cryptocurrencies"
          className="nav-links"
        >
          <RiMoneyDollarBoxFill />
          Cryptocurrencies
        </NavLink>
        <NavLink
          to="/exchanges"
          className="nav-links"
        >
          <GiCardExchange />
          Exchanges
        </NavLink>
        <NavLink
          to="/news"
          className="nav-links"
        >
          <BiNews />
          News
        </NavLink>
      </nav>
    </aside>
  )
}