import React from "react";
import styles from "./index.module.scss";

type PropsFooter = {
  className: string;
};

const Menu = ({ className }: PropsFooter) => {
  return (
    <div className={`${styles.component} ${className}`}>
      <h2> Menu</h2>
    </div>
  );
};

export default Menu;
