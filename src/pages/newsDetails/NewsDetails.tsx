import React, { FC, useContext, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import classes from "./NewsDetails.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { NewsContext, NewsTypes } from "../../context/NewsContext";
import NewsCard from "../../components/News/News";
import News from "../news/News";
import Loading from "../../components/Loading/Loading";

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
  const { data, isLoading } = useContext(NewsContext) as NewsTypes;
  const { Id } = useParams();
  const [singleNews, setSingleNews] = useState<singleNews[]>([]);

  useEffect(() => {
    if (Boolean(data)) {
      const news: singleNews[] = data.filter(
        (news) => news.id === Id?.toString()
      );
      setSingleNews(news);
      localStorage.setItem("singleNews", JSON.stringify(news));
    }
    const newsFromLocalStorage = JSON.parse(
      localStorage.getItem("singleNews") || ""
    );
    setSingleNews(newsFromLocalStorage);
  }, [Id]);

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
            <div className={classes.btns_cont}>
              <a
                className={classes.read_more_btn}
                href={singleNews[0].readMoreUrl}
                target='_blank'
                rel='noreferrer'>
                Read more
              </a>
            </div>
          </div>
          <div className={classes.suggestions_list}>
            {isLoading && <Loading />}
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
