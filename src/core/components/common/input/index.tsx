import React from "react";
import cx from "classnames";
import styles from "./input.module.scss";

interface Props {
  type?: string;
  fullWidth?: boolean;
  children?: React.ReactNode;
  placeholder: string;
  className?: string;
}

const Input = ({
  fullWidth,
  type,
  children,
  placeholder = "Enter Somethings",
  className,
  ...restProps
}: Props) => {
  return (
    <div className={styles.group}>
      <input
        placeholder={placeholder}
        className={cx(
          styles.root,
          fullWidth ? styles.fullWidth : undefined,
          className ? className : undefined
        )}
        type={type}
        {...restProps}
      />
      {children}
    </div>
  );
};

export default Input;
