import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi";

export function Cryptocurrencies({ simplified }) {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return "Loading ...";

  return (
    <>
      {!simplified && (
        <div className="search-input">
          <input
            type="text"
            placeholder="Search Cryptocurrencies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <section className="cryptos-container">
        {cryptos?.map((currency) => (
          <article className="crypto-card" key={currency.uuid}>
            <Link to={`/crypto/${currency.uuid}`}>
              <header className="crypto-heading">
                <h3 className="crypto-title">
                  {currency.rank}. {currency.name}
                </h3>
                <img
                  className="crypto-image"
                  src={currency.iconUrl}
                  alt={currency.name}
                />
              </header>
              <article className="crypto-info">
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}</p>
              </article>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
