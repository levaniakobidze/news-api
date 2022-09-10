import React, { useContext } from "react";
import classes from "./NewsFilter.module.css";
import { NewsTypes } from "../../context/NewsContext";
import { NewsContext } from "../../context/NewsContext";

const NewsFilter = () => {
  const { activeNewsLink, changeActiveNewsLink } = useContext(
    NewsContext
  ) as NewsTypes;

  return (
    <div className={classes.news_filter}>
      <ul className={classes.news_filter_list}>
        <li
          onClick={changeActiveNewsLink}
          className={activeNewsLink === "science" ? classes.active_link : ""}>
          Science
        </li>
        <li
          onClick={changeActiveNewsLink}
          className={activeNewsLink === "sports" ? classes.active_link : ""}>
          Sports
        </li>
        <li
          onClick={changeActiveNewsLink}
          className={activeNewsLink === "movies" ? classes.active_link : ""}>
          Movies
        </li>
        <li
          onClick={changeActiveNewsLink}
          className={activeNewsLink === "politics" ? classes.active_link : ""}>
          Politics
        </li>
        <li
          onClick={changeActiveNewsLink}
          className={activeNewsLink === "education" ? classes.active_link : ""}>
          Education
        </li>
        <li
          onClick={changeActiveNewsLink}
          className={activeNewsLink === "world" ? classes.active_link : ""}>
          World
        </li>
        <li
          onClick={changeActiveNewsLink}
          className={
            activeNewsLink === "technology" ? classes.active_link : ""
          }>
          Technology
        </li>
        <li
          onClick={changeActiveNewsLink}
          className={activeNewsLink === "business" ? classes.active_link : ""}>
          Business
        </li>
      </ul>
    </div>
  );
};

export default NewsFilter;
