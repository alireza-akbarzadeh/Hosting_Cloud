import { ReactNode } from "react";
import styles from "./section.module.scss";
import cx from "classnames";

type Props = {
  className?: string;
  children: ReactNode;
  title?: string;
  subTitle?: string;
  skew?: "skewed_right" | "skewed_left";
  mode?: "dark" | "light";
  isAnimate?: boolean;
};
const Section = ({
  className,
  children,
  subTitle,
  title,
  skew,
  mode = "dark",
  isAnimate = true,
}: Props) => {
  return (
    <section
      data-aos={isAnimate && "fade-up"}
      className={cx(
        styles.root,
        styles[mode],
        skew ? styles[skew] : undefined,
        className ? className : undefined
      )}
    >
      <div className={styles.header}>
        <h2 className={styles.heading}>{title}</h2>
        <p>{subTitle}</p>
      </div>
      {children}
    </section>
  );
};

export default Section;
