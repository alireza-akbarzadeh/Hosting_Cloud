import React from "react";
import cx from "classnames";
import styles from "./card.module.scss";
import { Badge, Button, List, ListItem } from "@core/components/common";
import { Variant } from "@core/types/variant";

interface Props {
  variant?: "primary" | "secondary";
  title: string;
  price: string;
  billing_cycle: string;
  BadgeTitle: string;
  ListData: { label: string }[];
  description: string;
  plan: "normal" | "popular";
  BadgeVariant: Variant;
  className?: string;
  BtnVariant: "outline" | "contained";
}

const Card = ({
  variant = "primary",
  title,
  BadgeTitle = "10 % of",
  price,
  BadgeVariant = "primary",
  billing_cycle,
  ListData,
  plan = "normal",
  description,
  BtnVariant = "outline",
  className,
}: Partial<Props>) => {
  return (
    <div className={cx(styles.plan, className ? className : undefined)}>
      <div className={cx(styles.root, styles[variant])}>
        <header
          className={cx(
            styles.header,
            plan === "popular" ? styles.popular : undefined
          )}
        >
          <h3 className={styles.name}>{title}</h3>
          <span className={styles.price}>{price}</span>
          <span className={styles.billing_cycle}>{billing_cycle}</span>
          <Badge variant={BadgeVariant} label={BadgeTitle} />
          <p className={styles.description}>{description}</p>
        </header>
        <div className={styles.body}>
          <List space={"md"} direction={"column"} classname={styles.tick}>
            {ListData?.map((list, index) => (
              <ListItem icon={"tick"} key={index}>
                {list.label}
              </ListItem>
            ))}
          </List>
          <Button variant={BtnVariant} fullWidth label={"Buy Now"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
