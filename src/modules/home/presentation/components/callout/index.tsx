import React from "react";
import styles from "./callout.module.scss";
import { Button, Grid } from "@core/components/common";
import { Variant } from "@core/types/variant";
import cx from "classnames";

interface Props {
  variant?: Variant;
}

const Callout = ({ variant = "primary" }: Props) => {
  return (
    <div className={cx(styles[variant], styles.root)}>
      <Grid className={styles.grid} col={"col-2"}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Ready to Get Started ?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            cum deserunt quidem.
          </p>
        </div>
        <Button
          classname={styles.btn}
          color={"secondary"}
          label={"Get Started"}
        />
      </Grid>
    </div>
  );
};

export default Callout;
