import React from "react";
import styles from "./MainSection.module.css";

const MainSection = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};

export default MainSection;
