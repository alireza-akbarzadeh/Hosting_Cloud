import React from "react";
import styles from "./grid.module.scss";
import cx from "classnames";

interface Props {
  children: React.ReactNode;
  col: "col-2" | "col-3" | "col-4";
  className?: string;
}

const Grid = ({ children, col, className }: Props) => {
  return (
    <div
      className={cx(
        styles.root,
        styles[col],
        className ? className : undefined
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
