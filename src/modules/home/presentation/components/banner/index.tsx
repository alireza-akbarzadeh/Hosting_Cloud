import React from "react";
import { Button, Grid, Section } from "@core/components/common";
import cx from "classnames";
import styles from "./banner.module.scss";
const Banner = () => {
  return (
    <Section isAnimate={false} skew={"skewed_left"} className={styles.hero}>
      <Grid className={"container"} col={"col-2"}>
        <header
          data-aos={"fade-left"}
          className={cx(styles.content, styles.header)}
        >
          <h1 className={styles.heading}>Cloud Hosting For Pros</h1>
          <p className={styles.tagline}>
            Deploy your Website less then 60 seconds.
          </p>
          <Button
            variant={"contained"}
            color={"accent"}
            label={"Get Started"}
          />
        </header>
        <picture data-aos={"fade-right"}>
          <source
            type="image/webp"
            srcSet="/images/banner.webp 1x, /images/banner@2x.webp 2x"
          />
          <source
            type="image/png"
            srcSet="/images/banner.png 1x, /images/banner@2x.png 2x"
          />
          <img className={styles.Image} src="/images/banner.png" alt="" />
        </picture>
      </Grid>
    </Section>
  );
};

export default Banner;
