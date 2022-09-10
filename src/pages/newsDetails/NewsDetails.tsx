import React, { FC, useContext, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import classes from "./NewsDetails.module.css";
import { useParams } from "react-router-dom";
import { NewsContext, NewsTypes } from "../../context/NewsContext";
import NewsCard from "../../components/News/News";
import News from "../news/News";

type singleNews = {
  title: string;
  author: string;
  imageUrl: string;
  content: string;
  date: string;
  url: string;
  readMoreUrl: string;
  id: string;
  time: string;
};

const NewsDetails: FC = () => {
  const { data } = useContext(NewsContext) as NewsTypes;
  const { Id } = useParams();
  const [singleNews, setSingleNews] = useState<singleNews[]>([]);

  useEffect(() => {
    const news: singleNews[] = data.filter(
      (news) => news.id === Id?.toString()
    );

    setSingleNews(news);
  }, [Id]);

  console.log(singleNews.length > 0 && singleNews[0].author);

  return (
    <section className={classes.news_details}>
      {singleNews.length > 0 && (
        <Card className={classes.news_details_card}>
          <div className={classes.news_cont}>
            <img
              className={classes.news_img}
              src={singleNews[0].imageUrl}
              alt={singleNews[0].title}
            />

            <h1 className={classes.news_title}>{singleNews[0].title}</h1>

            <p className={classes.news_text}>{singleNews[0].content}</p>
            <div className={classes.author_and_date}>
              <p className={classes.author}>{singleNews[0].author}</p>
              <p className={classes.date}>{singleNews[0].date}</p>
            </div>
          </div>
          <div className={classes.suggestions_list}>
            {data &&
              data.map((news) => {
                return (
                  <NewsCard
                    key={news.id}
                    id={news.id}
                    title={news.title}
                    img={news.imageUrl}
                    date={news.date}
                    author={news.author}
                  />
                );
              })}
          </div>
        </Card>
      )}
    </section>
  );
};

export default NewsDetails;
