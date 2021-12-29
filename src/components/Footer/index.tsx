import React from "react";
import styles from "./index.module.scss";

type PropsFooter = {
  className: string;
};

const Footer = ({ className }: PropsFooter) => {
  return <div className={`${styles.component} ${className}`}>Footer</div>;
};

export default Footer;
