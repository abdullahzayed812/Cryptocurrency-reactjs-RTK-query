import React from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import { Cryptocurrencies } from "../components/Cryptocurrencies";
import { News } from "../components/News";

export function Home() {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading ...";

  return (
    <>
      <h2 className="stats-title">
        Global Crypto Stats
      </h2>
      <article className="stats-container">
        <div className="stat">
          <span className="info">
            Total Cryptocurrencies
          </span>
          <span className="amount">
            {globalStats.total}
          </span>
        </div>
        <div className="stat">
          <span className="info">
            Total Exchanges
          </span>
          <span className="amount">
            {millify(globalStats.totalExchanges)}
          </span>
        </div>
        <div className="stat">
          <span className="info">
            Total Market Cap
          </span>
          <span className="amount">
            {millify(globalStats.totalMarketCap)}
          </span>
        </div>
        <div className="stat">
          <span className="info">
            Total 24h Volume
          </span>
          <span className="amount">
            {millify(globalStats.total24hVolume)}
          </span>
        </div>
        <div className="stat">
          <span className="info">
            Total Markets
          </span>
          <span className="amount">
            {millify(globalStats.totalMarkets)}
          </span>
        </div>
      </article>
      <header className="home-heading-container">
        <h2 className="home-title">
          Top 10 Cryptocurrencies in the world
        </h2>
        <h3 className="show-more">
          <Link to="/cryptocurrencies" className="show-more-link">
            Show More
          </Link>
        </h3>
      </header>
      <Cryptocurrencies simplified />
      <header className="home-heading-container">
        <h2 className="home-title">
          Latest Crypto News
        </h2>
        <h3 className="show-more">
          <Link to="/cryptocurrencies" className="show-more-link">
            Show More
          </Link>
        </h3>
      </header>
      <News simplified />
    </>
  );
}
