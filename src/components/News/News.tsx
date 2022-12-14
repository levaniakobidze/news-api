import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { NewsContext, NewsTypes } from "../../context/NewsContext";
import Loading from "../Loading/Loading";
import classes from "./News.module.css";
interface IProps {
  id: string;
  title: string;
  img: string;
  date: string;
  author: string;
}

const News: FC<IProps> = (props) => {
  const { isLoading } = useContext(NewsContext) as NewsTypes;
  return (
    <Link to={`/newsDetails/${props.id}`} className={classes.news}>
      {isLoading && <Loading />}
      <div className={classes.news_img_cont}>
        <img src={props.img} alt={props.author} />
      </div>
      <div className={classes.author_and_date}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.date}>{props.date}</p>
      </div>
      <p className={classes.news_title}>{props.title}</p>
    </Link>
  );
};

export default News;
