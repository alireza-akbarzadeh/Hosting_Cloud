import React, { ReactNode } from "react";
import styles from "./item.module.scss";
import cx from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
  icon?: "tick" | "none";
}

const ListItem = (props: Props) => {
  const { children, className, icon = "none" } = props;
  return (
    <li
      className={cx(
        styles.root,
        styles[icon],
        className ? className : undefined
      )}
    >
      {children}
    </li>
  );
};

export default ListItem;
