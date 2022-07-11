import React from "react";
import { Grid, Icons, Quotes, Section } from "@core/components/common";
import cx from "classnames";
import styles from "./testimonial.module.scss";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  return (
    <Section
      title={"What Our Customer are Saying"}
      subTitle={
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, ut?\n"
      }
      mode="light"
    >
      <div className={styles.root}>
        <Grid col={"col-2"}>
          <div className={styles.image}>
            <img
              src="/images/testimonial.jpg"
              alt="A happy ,smiling customer"
            />
            <Icons
              size={30}
              className={styles.icon}
              variant={"contained"}
              Icon={FaQuoteLeft}
            />
          </div>
          <Quotes
            name={"John Doe"}
            org={"ABC Company"}
            des={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore id officiis perspiciatis!\n"
            }
          />
        </Grid>
      </div>
    </Section>
  );
};

export default Testimonial;
