import React, { useState } from "react";
import { DropdownNews } from "./DropdownNews/DropdownNews";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
const demoImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9neTkwgwetVJVQoZI31kWB-22XA8qYDeL-g&usqp=CAU";

export function News({ simplified }) {
  const count = simplified ? 6 : 12;
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count,
  });
  if (!cryptoNews?.value) {
    return "Loading ...";
  }
  return (
    <React.Fragment>
      {!simplified && (
        <DropdownNews
          news
          data={data.data.coins}
          defaultValue={newsCategory}
          setNewsCategory={setNewsCategory}
        />
      )}
      <section className="news-container">
        {cryptoNews?.value?.map((news, index) => (
          <article className="news-box" key={index}>
            <header className="news-header">
              <h3>{news.name}</h3>
              <img
                src={news?.image?.thumbnail?.contentUrl || demoImage}
                alt="news"
              />
            </header>
            <p className="description">
              {news.description > 100
                ? news.description.substring(0, 100)
                : news.description}
            </p>
            <div className="info">
              <div className="name">
                <img
                  src={
                    news.provider[0]?.image?.thumbnail?.contentUrl || demoImage
                  }
                  alt="news"
                />
                <h5 className="news-name">{news.provider[0]?.name}</h5>
              </div>
              <span className="time-stamp">
                {moment(news.dataPublished).startOf("ss").fromNow()}
              </span>
            </div>
          </article>
        ))}
      </section>
    </React.Fragment>
  );
}
