import { ReactNode } from "react";
import Link from "next/link";
import styles from "./link.module.scss";

interface Props {
  href: string;
  children: ReactNode;
}

const CustomLink = (props: Props) => {
  const { href, children, ...rest } = props;
  return (
    <Link href={href} {...rest}>
      <a className={styles.arrow}>{children}</a>
    </Link>
  );
};

export default CustomLink;
