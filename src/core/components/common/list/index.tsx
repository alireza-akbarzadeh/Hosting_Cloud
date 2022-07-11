import { ReactNode } from "react";
import cx from "classnames";
import styles from "./list.module.scss";

interface Props {
  direction?: "column" | "row" | "row-reverse" | "column-reverse";
  space?: "xs" | "sm" | "md" | "lg" | "xl";
  children: ReactNode;
  classname?: string;
}

const List = (props: Props) => {
  const { direction = "row", space = "xs", children, classname } = props;
  return (
    <ul
      className={cx(
        styles.root,
        styles[direction],
        styles[space],
        classname ? classname : classname
      )}
    >
      {children}
    </ul>
  );
};

export default List;
