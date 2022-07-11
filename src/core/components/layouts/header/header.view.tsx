import React, { useEffect, useImperativeHandle } from "react";
import styles from "./header.module.scss";
import cx from "classnames";
import Image from "next/image";
import { RiMenu3Line, RiCloseCircleLine } from "react-icons/ri";
import { List, ListItem } from "@core/components/common";
import Link from "next/link";
import useWindowSize from "@core/Hook/useWindowSize";

type PropTypes = {
  open: boolean;
  close: () => void;
  menu: { label: string; link: string }[];
  setOpenModal: (val: boolean) => void;
};

const HeaderView = (props: PropTypes) => {
  const { width } = useWindowSize();
  const { close, open, menu, setOpenModal } = props;
  const MenuItem = () => (
    <List
      direction={width > 768 ? "row" : "column"}
      classname={cx(
        styles.list,
        width >= 768 ? null : styles.collapsible_Content
      )}
    >
      {menu.map((item, index) => (
        <ListItem key={index} className={styles.item}>
          <Link href={item.link}>{item.label}</Link>
        </ListItem>
      ))}
    </List>
  );
  useEffect(() => {
    if (width > 768) setOpenModal(true);
  }, [width]);

  return (
    <header
      className={cx(styles.root, width >= 768 ? undefined : styles.collapsible)}
    >
      <nav className={styles.nav}>
        <a href="/">
          <Image
            className={styles.logo}
            src="/images/logo.svg"
            width={250}
            height={50}
            alt="logo"
          />
        </a>
        {open ? (
          <RiCloseCircleLine
            className={cx(styles.icon, open ? styles.shadow : undefined)}
            onClick={close}
            fontSize={29}
          />
        ) : (
          <RiMenu3Line
            className={cx(styles.icon)}
            onClick={close}
            fontSize={29}
          />
        )}
        {open && <MenuItem />}
      </nav>
    </header>
  );
};

export default HeaderView;
