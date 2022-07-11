import React from "react";
import cx from "classnames";
import styles from "./media.module.scss";
import { Icons } from "@core/components/common";
interface Props {
  title: string;
  description: string;
  icon: React.FC;
  size?: number;
}
const Media = ({ description, title, icon, size = 18 }: Props) => {
  return (
    <div>
      <div className={styles.root}>
        <div className={styles.image}>
          <Icons size={size} variant={"outline"} Icon={icon} />
        </div>
        <div className={styles.body}>
          <h3 className={styles.title}>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Media;
