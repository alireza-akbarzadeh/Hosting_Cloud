import { FC } from "react";
import cx from "classnames";
import styles from "./icon.module.scss";

type Props = {
  Icon: any;
  color?: "primary" | "secondary" | string;
  variant?: "outline" | "contained";
  size?: number;
  className?: string;
};

const Icons = (props: Props) => {
  const {
    color = "#ccc",
    Icon,
    variant = "outline",
    size = 16,
    className,
    ...rest
  } = props;
  return (
    <span
      className={cx(
        styles.root,
        className ? className : undefined,
        variant === "outline" ? styles.outline : styles.contained
      )}
      {...rest}
    >
      {/*// @ts-ignore*/}
      <Icon fontSize={size} className={styles[color]} />
    </span>
  );
};

export default Icons;
