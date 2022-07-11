import React from "react";
import styles from "./button.module.scss";
import cx from "classnames";
import { Variant } from "@core/types/variant";

interface Props {
  size?: "small" | "medium" | "large";
  color?: Variant;
  fullWidth?: boolean;
  rounded?: "rounded-sm" | "rounded-md" | "rounded-lg";
  label: string;
  variant: "outline" | "contained";
  style?: {};
  classname?: string;
  icon: any;
}

const Button = (props: Partial<Props>) => {
  const {
    color = "primary",
    label,
    fullWidth,
    variant = "contained",
    rounded = "rounded-md",
    size = "medium",
    style,
    classname,
    icon,
  } = props;
  return (
    <button
      className={cx(
        styles.root,
        styles[color],
        styles[rounded],
        styles[size],
        styles[variant],
        classname ? classname : undefined,
        fullWidth ? styles.fullWidth : undefined
      )}
      style={style}
    >
      {icon && icon}
      {label}
    </button>
  );
};

export default Button;
