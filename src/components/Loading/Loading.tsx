import React from "react";
import classes from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={classes.loading_modal}>
      <span className={classes.dots}>
        <span className={classes.dot1}></span>
        <span className={classes.dot2}></span>
        <span className={classes.dot3}></span>
      </span>
    </div>
  );
};

export default Loading;
