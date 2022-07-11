import React from "react";
import { Card, Grid, Section } from "@core/components/common";
import styles from "./plan.module.scss";
import cx from "classnames";
import useWindowSize from "@core/Hook/useWindowSize";
const Plan = () => {
  const { width } = useWindowSize();
  let col: "col-2" | "col-3" = width >= 1024 ? "col-3" : "col-2";
  const List1 = [
    { label: "Unlimited Website" },
    { label: "Unlimited Bandwidth" },
    { label: "100 GB SSD Storage" },
    { label: "3 GB RAM" },
  ];
  const List3 = [
    { label: "Unlimited Website" },
    { label: "Unlimited Bandwidth" },
    { label: "100 GB SSD Storage" },
    { label: "3 GB RAM" },
    { label: "2 CPU Cores" },
  ];
  return (
    <Section mode={"light"} className={"container"}>
      <Grid col={col} className={styles.root}>
        <Card
          className={styles.plan}
          variant={"secondary"}
          title={"Entry"}
          price={"$ 14"}
          description={"Easy start on  the cloud"}
          billing_cycle={"/ month"}
          ListData={List1}
        />
        <Card
          className={cx(styles.plan, styles.control)}
          variant={"primary"}
          title={"Business"}
          price={"$ 24"}
          plan={"popular"}
          description={"Optimal could Experience"}
          billing_cycle={"/ month"}
          ListData={List3}
          BadgeVariant={"secondary"}
          BtnVariant={"contained"}
        />
        <Card
          className={styles.plan}
          variant={"secondary"}
          title={"Business plus"}
          price={"$ 54"}
          description={"Easy start on  the cloud"}
          billing_cycle={"/ month"}
          ListData={List3}
        />
      </Grid>
    </Section>
  );
};

export default Plan;
