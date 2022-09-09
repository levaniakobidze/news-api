import React, { ReactElement } from "react";
import classes from "./Card.module.css";
interface IProps {
  className: string;
  children: JSX.Element[];
}

const Card: React.FC<IProps> = (props) => {
  return (
    <div className={`${classes.card} ${props.className} `}>
      {props.children}
    </div>
  );
};

export default Card;
