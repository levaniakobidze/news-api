import React from "react";
import Card from "../Card/Card";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <section className={classes.footer}>
      <Card className={classes.footer_card}>
        <div></div>
        <div></div>
      </Card>
    </section>
  );
};

export default Footer;
