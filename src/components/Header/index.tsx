import React from "react";
import styles from "./index.module.scss";

type PropsFooter = {
  className: string;
};

const Header = ({ className }: PropsFooter) => {
  return (
    <div className={`${styles.component} ${className}`}>
      <h1>Match-Match game</h1>
    </div>
  );
};

export default Header;
