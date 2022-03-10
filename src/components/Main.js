import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Cryptocurrencies } from "./Cryptocurrencies";
import { CryptoDetails } from "../components/CryptoDetails/CryptoDetails";
import { Exchanges } from "./Exchanges/Exchanges";
import { News } from "./News";
import { Link } from "react-router-dom";

export function Main() {
  return (
    <section className="main-section">
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/cryptocurrencies"
            element={<Cryptocurrencies />}
          />
          <Route
            exact
            path="/crypto/:coinId"
            element={<CryptoDetails />}
          />
          <Route
            exact
            path="/exchanges"
            element={<Exchanges />}
          />
          <Route
            exact
            path="/news"
            element={<News />}
          />
        </Routes>
      </main>
      <footer>
        <span>Cryptoverse</span>
        <span>All right reserved</span>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </div>
      </footer>
    </section>
  );
}