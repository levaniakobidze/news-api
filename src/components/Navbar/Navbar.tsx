import React, { FC, useState } from "react";
import Card from "../Card/Card";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  const [onScroll, setOnscroll] = useState<boolean>(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 80) {
      setOnscroll(true);
    } else {
      setOnscroll(false);
    }
  });
  return (
    <nav className={!onScroll ? classes.nav : classes.nav_on_scroll}>
      <Card className={classes.nav_card}>
        <div className={classes.logo}>
          <span className={classes.logo_icon}>
            <span className={classes.logo_icon_1}>EL</span>
          </span>
          <p className={classes.logo_text}>News</p>
        </div>
        {/* //////////////////// */}
        <div className={classes.menu_and_btn}>
          <ul className={classes.nav_menu}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/news'>News</Link>
            </li>
            <li>
              <Link to='/movies'>Movies</Link>
            </li>
            <li>
              <Link to='/'>Careers</Link>
            </li>
            <li>
              <Link to='/'>About Us</Link>
            </li>
            <li>
              <Link to='/'>Contact</Link>
            </li>
          </ul>
          <Link to='' className={classes.nav_btn}>
            Hire me{" "}
            <span className={classes.dots_cont}>
              <span className={classes.dot_1}></span>
              <span className={classes.dot_2}></span>
              <span className={classes.dot_3}></span>
            </span>
          </Link>
        </div>
      </Card>
    </nav>
  );
};

export default Navbar;
