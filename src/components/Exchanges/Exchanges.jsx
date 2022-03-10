import React, { useState } from "react";
// import { useGetExchangesQuery } from "../../services/cryptoApi";
import "./Exchanges.css";

export function Exchanges() {
  const [open, setOpen] = useState(false);
  // const { data, isFetching } = useGetExchangesQuery();
  // const exchangesList = data?.data?.exchanges;

  // if (isFetching) return "Loading ...";

  return (
    <section className="exchanges-container">
      <header className="exchanges-header">
        <div>Exchanges</div>
        <div>24h Trade Volume</div>
        <div>Markets</div>
        <div>Changes</div>
      </header>
      <article className="tab">
        <header
          className="tab-header"
          onClick={() => setOpen(!open)}>
          <div>Exchange Number</div>
          <div>other one</div>
          <div>again other</div>
          <div>most</div>
        </header>
        <article
          className={open ? "tab-content open" : "tab-content"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum harum facere necessitatibus nostrum beatae itaque tempora eius. Quas aspernatur fugiat consectetur exercitationem omnis doloribus sit iusto magni, facilis delectus modi.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum harum facere necessitatibus nostrum beatae itaque tempora eius. Quas aspernatur fugiat consectetur exercitationem omnis doloribus sit iusto magni, facilis delectus modi.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum harum facere necessitatibus nostrum beatae itaque tempora eius. Quas aspernatur fugiat consectetur exercitationem omnis doloribus sit iusto magni, facilis delectus modi.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum harum facere necessitatibus nostrum beatae itaque tempora eius. Quas aspernatur fugiat consectetur exercitationem omnis doloribus sit iusto magni, facilis delectus modi.
        </article>
      </article>
    </section>
  )
}