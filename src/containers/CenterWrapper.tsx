import styles from "./centerWrapper.module.css";
import React from "react";
import { Props } from "./Type";

const CenterWrapper: React.FC<Props> = ({ children }) => {
  return <div className={styles.content__container}>{children}</div>;
};

export default CenterWrapper;
