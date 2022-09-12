import React from "react";
import Card from "../../components/Card/Card";
import classes from "./Contact.module.css";
const Contact = () => {
  return (
    <section className={classes.contact}>
      <Card className={classes.contact_card}>
        <div className={classes.contact_header} data-aos='slide-up'>
          <h1>Contact</h1>
          <p>Lorem ipsum dolor sit amet consectetur..</p>
        </div>
        <div className={classes.contact_map_and_form}>
          <div className={classes.contact_map_img}>
            <img src={require("../../assets/map.PNG")} alt='' />
          </div>
          <div className={classes.contact_form_cont}>
            <form
              className={classes.contact_form}
              onClick={(e) => e.preventDefault()}>
              <p className={classes.form_title}>
                CONTACT <span>US</span>
              </p>
              <input type='text' placeholder='NAME' />
              <input type='email' placeholder='EMAIL' />
              <textarea
                name='message'
                id='message'
                placeholder='MESSAGE'></textarea>
              <div className={classes.submit_btn_cont}>
                <button>SEND MESSAGE</button>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Contact;
