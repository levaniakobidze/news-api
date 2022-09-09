import React, { FC } from "react";
import classes from "./News.module.css";
interface IProps {
  title: string;
}

const News: FC<IProps> = (props) => {
  return (
    <div className={classes.news}>
      <p>{props.title}</p>
    </div>
  );
};

export default News;
