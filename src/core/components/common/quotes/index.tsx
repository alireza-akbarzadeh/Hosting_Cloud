import React from "react";
import styles from "./quotes.module.scss";
import { Media } from "@core/components/common";
import { AiOutlineMinus } from "react-icons/ai";
interface Props {
  des: string;
  name?: string;
  org?: string;
}
const Quotes = ({ des, name = "", org = "" }: Props) => {
  return (
    <blockquote className={styles.root}>
      <p className={styles.text}>{des}</p>
      <footer>
        <Media icon={AiOutlineMinus} title={name} description={org} />
      </footer>
    </blockquote>
  );
};
export default Quotes;
