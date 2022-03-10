import React, { useState } from "react";
import millify from "millify";
import { DropdownNews } from "../DropdownNews/DropdownNews";
import { LineChart } from "../LineChart/LineChart";
import { useParams } from "react-router-dom";
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from "../../services/cryptoApi";
import {
  AiOutlineDollarCircle,
  AiOutlineFieldNumber,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
  AiOutlineFund,
  AiOutlineMoneyCollect,
  AiOutlineCheckCircle,
  AiOutlineStop,
  AiOutlineExclamationCircle
} from "react-icons/ai";
import "./CryptoDetails.css";
import HTMLReactParser from "html-react-parser";

export function CryptoDetails() {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching} = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return "Loading ...";

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    {
      title: 'Price to USD',
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <AiOutlineDollarCircle />
    },
    {
      title: 'Rank',
      value: cryptoDetails?.rank,
      icon: <AiOutlineFieldNumber />
    },
    {
      title: '24h Volume',
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <AiOutlineThunderbolt />
    },
    {
      title: 'Market Cap',
      value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`,
      icon: <AiOutlineTrophy />
    },
    {
      title: 'All-time-high(daily avg.)',
      value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`,
      icon: <AiOutlineTrophy />
    },
  ];

  const genericStats = [
    {
      title: 'Number Of Markets',
      value: cryptoDetails?.numberOfMarkets,
      icon: <AiOutlineFund />
    },
    {
      title: 'Number Of Exchanges',
      value: cryptoDetails?.numberOfExchanges,
      icon: <AiOutlineMoneyCollect />
    },
    {
      title: 'Aprroved Supply',
      value: cryptoDetails?.supply?.confirmed ? <AiOutlineCheckCircle /> : <AiOutlineStop />,
      icon: <AiOutlineExclamationCircle />
    },
    {
      title: 'Total Supply',
      value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`,
      icon: <AiOutlineExclamationCircle />
    },
    {
      title: 'Circulating Supply',
      value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`,
      icon: <AiOutlineExclamationCircle />
    },
  ];
  return (
    <section className="coin-detail-container">
      <section className="coin-heading-container">
        <h2 className="coin-name">
          {cryptoDetails.name} ({cryptoDetails.symbol}) price
        </h2>
        <p>
          {cryptoDetails.name} live price in US dollars. View value statistics,
          market cap and supply
        </p>
      </section>
      <DropdownNews
        detalis
        data={time}
        defaultValue={timePeriod}
        setTimePeriod={setTimePeriod}
      />
      <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails.price)}
        coinName={cryptoDetails.name}
      />
      <section className="stats-container">
        <section className="stats-coin-value">
          <h3 className="stats-value-heading">
            {cryptoDetails.name} Value statistics
          </h3>
          <p className="stats-value-text">
            An overview showing the stats of {cryptoDetails.name}
          </p>
          <ul className="stats-list">
            {stats.map(({ icon, title, value }) => (
              <li className="stats-list-item">
                <div className="stats-list-info">
                  <span>{icon}</span>
                  <span>{title}</span>
                </div>
                <div className="stats-list-price">{value}</div>
              </li>
            ))}
          </ul>
        </section>
        <section className="stats-other">
          <h3 className="stats-value-heading">Other statistics</h3>
          <p className="stats-value-text">
            An overview showing the stats of all cryptocurrencies
          </p>
          <ul className="stats-list">
            {genericStats.map(({ icon, title, value }, index) => (
              <li className="stats-list-item" key={index}>
                <div className="stats-list-info">
                  <span>{icon}</span>
                  <span>{title}</span>
                </div>
                <div className="stats-list-price">{value}</div>
              </li>
            ))}
          </ul>
        </section>
      </section>
      <section className="coin-desc-container">
        <section className="questions">
          <h3 className="desc-title">What is {cryptoDetails.name}</h3>
          {HTMLReactParser(cryptoDetails.description)}
        </section>
        <section className="coin-links-container">
          <h3 className="coin-links-heading">{cryptoDetails.name} Links</h3>
          <ul className="coin-links-list">
            {cryptoDetails.links.map((link, index) => (
              <li className="coin-links-item" key={index}>
                <h3 className="coin-link-type">{link.type}</h3>
                <a
                  className="coin-link-name"
                  href={link.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </section>
  );
}