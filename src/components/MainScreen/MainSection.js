import React from "react";
import styles from "./MainSection.module.css";
const MainSection = ({ children }) => {
  return <div className={styles.main_section__container}>{children}</div>;
};

export default MainSection;
