import React from "react";
import Card from "../../components/Card/Card";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <section className={classes.home}>
      <Card className={classes.home_card}>
        <div className={classes.home_text_cont} data-aos='slide-up'>
          <h1 className={classes.home_title}>CTL Dream of life</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In suscipit
            eum placeat eos voluptas voluptate, sequi maxime corporis fuga
            quaerat id, molestias velit quidem.
          </p>
        </div>

        <span></span>
      </Card>
    </section>
  );
};

export default Home;
