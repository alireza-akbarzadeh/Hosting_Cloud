import React, { useState } from "react";
import styles from "./collapsible.module.scss";
import { FaChevronDown } from "react-icons/fa";
import { Icons } from "@core/components/common";
import cx from "classnames";

interface Props {
  title: string;
  content: any;
  className?: string;
  iconClass?: string;
  contentClass?: string;
}

const Collapsible = (props: Props) => {
  const { title, content, className, iconClass, contentClass } = props;
  const [collaps, setCollaps] = useState<boolean>(false);
  const handleCollaps = () => {
    setCollaps((prev) => !prev);
  };
  return (
    <div
      className={cx(
        styles.root,
        collaps ? styles.expanded : undefined,
        className ? className : undefined
      )}
    >
      <div className={styles.header}>
        <h2 className={styles.heading}>{title}</h2>
        <div className={iconClass} onClick={handleCollaps}>
          <Icons className={styles.chevron} Icon={FaChevronDown} />
        </div>
      </div>
      <div className={cx(styles.content, contentClass)}>{content}</div>
    </div>
  );
};

export default Collapsible;
