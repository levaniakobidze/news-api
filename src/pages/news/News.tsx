import React, { useContext, useEffect } from "react";
import Card from "../../components/Card/Card";
import classes from "./News.module.css";
import { NewsContext } from "../../context/NewsContext";
import { NewsTypes } from "../../context/NewsContext";
import NewsFilter from "../../components/NewsFilter/NewsFilter";
import NewsCard from "../../components/News/News";
import Loading from "../../components/Loading/Loading";

const News = () => {
  const { activeNewsLink, changeActiveNewsLink, data } = useContext(
    NewsContext
  ) as NewsTypes;

  return (
    <section className={classes.news}>
      <Card className={classes.news_card}>
        <NewsFilter />
        <div className={classes.news_list}>
          {data &&
            data.map((news) => {
              return (
                <NewsCard
                  key={news.id}
                  title={news.title}
                  img={news.imageUrl}
                  date={news.date}
                  author={news.author}
                />
              );
            })}
        </div>
      </Card>
    </section>
  );
};

export default News;
