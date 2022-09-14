import React, { FC, useState, useContext } from "react";
import Card from "../Card/Card";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NewsContext, NewsTypes } from "../../context/NewsContext";

const Navbar: FC = () => {
  const [onScroll, setOnscroll] = useState<boolean>(false);
  const { showMobileMenu, setShowMobileMenu } = useContext(
    NewsContext
  ) as NewsTypes;

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
            <span className={classes.logo_icon_1}>
              E<span className={classes.hide_L}>L</span>{" "}
            </span>
          </span>
          <p className={classes.logo_text}>
            N<span className={classes.hide_ews}>ews</span>
          </p>
        </div>
        {/* //////////////////// */}
        <div className={classes.menu_and_btn}>
          <ul
            className={
              !showMobileMenu
                ? classes.nav_menu
                : `${classes.nav_menu} ${classes.mobile_active}`
            }>
            <li>
              <Link to='/' onClick={() => setShowMobileMenu(false)}>
                News
              </Link>
            </li>

            <li>
              <Link to='/contact' onClick={() => setShowMobileMenu(false)}>
                Contact
              </Link>
            </li>

            <a
              href='https://levaniakobidze.vercel.app/'
              target='_blank'
              rel='noreferrer'
              className={classes.nav_btn}>
              Hire me{" "}
              <span className={classes.dots_cont}>
                <span className={classes.dot_1}></span>
                <span className={classes.dot_2}></span>
                <span className={classes.dot_3}></span>
              </span>
            </a>
          </ul>
          {!showMobileMenu ? (
            <MenuIcon
              className={classes.burger}
              onClick={() => setShowMobileMenu(true)}
            />
          ) : (
            <CloseIcon
              className={classes.close_burger}
              onClick={() => setShowMobileMenu(false)}
            />
          )}
        </div>
      </Card>
    </nav>
  );
};

export default Navbar;
