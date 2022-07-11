import { Grid, List, Section, ListItem } from "@core/components/common";
import styles from "./footer.module.scss";
import useWindowSize from "@core/Hook/useWindowSize";
import cx from "classnames";
import { Collapsible } from "@modules/home/presentation/components";

const Footer = () => {
  const { width } = useWindowSize();
  return (
    <Section isAnimate={false} className={styles.root}>
      <footer className={cx("container", styles.footer)}>
        <Collapsible
          title={"Production"}
          contentClass={styles.content}
          iconClass={styles.icon}
          className={styles.footer_Section}
          content={
            <List direction={"column"} classname={styles.list}>
              <ListItem>Website Hosting</ListItem>
              <ListItem>Free Automated</ListItem>
              <ListItem>wordpress</ListItem>
              <ListItem>Migration</ListItem>
            </List>
          }
        />
        <Collapsible
          title={"Company"}
          contentClass={styles.content}
          iconClass={styles.icon}
          className={styles.footer_Section}
          content={
            <List direction={"column"} classname={styles.list}>
              <ListItem>About</ListItem>
              <ListItem>Affiliates</ListItem>
              <ListItem>Blog</ListItem>
            </List>
          }
        />
        <Collapsible
          title={"Support"}
          contentClass={styles.content}
          iconClass={styles.icon}
          className={styles.footer_Section}
          content={
            <List direction={"column"} classname={styles.list}>
              <ListItem>Contact</ListItem>
              <ListItem>Knowledge Base</ListItem>
              <ListItem>FAQ</ListItem>
            </List>
          }
        />
        <Collapsible
          title={"Domain"}
          contentClass={styles.content}
          iconClass={styles.icon}
          className={styles.footer_Section}
          content={
            <List direction={"column"} classname={styles.list}>
              <ListItem>Domain Checker</ListItem>
              <ListItem>Domain Transfer</ListItem>
              <ListItem>Free Domain</ListItem>
            </List>
          }
        />
        <section className={styles.footer__brand}>
          <img className={styles.image} src="/images/logo.svg" alt="Logo" />
          <p className={styles.copyright}>
            &#169;CopyRight 2022 Mosh Hamedani and Alireza Akbarzadeh
          </p>
        </section>
      </footer>
    </Section>
  );
};

export default Footer;
