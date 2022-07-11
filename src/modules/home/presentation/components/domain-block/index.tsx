import React from "react";
import { Badge, Button, Grid, Input, Section } from "@core/components/common";
import styles from "./domain.module.scss";
import cx from "classnames";
import { IoSearchOutline } from "react-icons/io5";

const DomainBlock = () => {
  return (
    <Section mode="light" className={styles.domain}>
      <header className={styles.header}>
        <h2>Starting at $9 per month</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam nemo
          reprehenderit sequi?
        </p>
      </header>
      <Input
        className={styles.shadow}
        placeholder={"Enter Domain name here..."}
      >
        <Button
          classname={styles.search}
          label={"Search"}
          variant={"contained"}
          color={"accent"}
          icon={<IoSearchOutline className={styles.icon} fontSize={22} />}
        />
      </Input>
      <ul className={styles.price}>
        <li>.com $9</li>
        <li>
          <Badge variant={"success"} label={".sg $10"} />
        </li>
        <li>.space $11</li>
        <li>.info $14</li>
        <li>
          <Badge variant={"secondary"} label={".net $10"} />
        </li>
        <li>.xyz $10</li>
      </ul>
    </Section>
  );
};

export default DomainBlock;
