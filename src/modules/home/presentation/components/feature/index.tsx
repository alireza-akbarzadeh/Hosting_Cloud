import React, { useEffect } from "react";
import { Grid, Icons, Link, Section } from "@core/components/common";
import styles from "./feature.module.scss";
import { FaAd } from "react-icons/fa";
import cx from "classnames";
import AOS from "aos";
interface Props {
  title: string;
  subTitle: string;
  img: string;
  icon: any;
  link: string;
  heading: string;
  alt: string;
  className: string;
  desc: string;
  direction?: "reverse" | "none";
}

const Feature = (props: Props) => {
  const {
    icon,
    img,
    desc,
    heading,
    link,
    title,
    subTitle,
    alt,
    direction = "none",
  } = props;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Section className={styles.root} mode={"light"}>
      <article className={"container"}>
        <header className={styles.heading}>
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </header>
        <Grid className={styles[direction]} col={"col-2"}>
          <div className={styles.content}>
            <Icons
              size={25}
              color={"primary"}
              Icon={icon}
              variant={"contained"}
            />
            <h4>{heading}</h4>
            <p>{desc}</p>
            <Link href={link}>Learn More</Link>
          </div>
          <div data-aos={"zoom-in-left"}>
            <img className={styles.image} src={img} alt={alt} />
          </div>
        </Grid>
      </article>
    </Section>
  );
};

export default Feature;
