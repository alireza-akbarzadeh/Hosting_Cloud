import React from "react";
import cx from "classnames";
import styles from "./badge.module.scss";
import { Variant } from "@core/types/variant";

interface Props {
  variant: Variant;
  label: string;
  size?: "small" | "medium" | "large";
}

const Badge = ({ label, variant, size = "medium" }: Props) => {
  return (
    <span className={cx(styles.root, styles[variant], styles[size])}>
      {label}
    </span>
  );
};

export default Badge;
