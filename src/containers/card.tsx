import { Props } from "./Type";
import styles from "./card.module.css";

const Card: React.FC<Props> = ({ children }) => {
  return <div className={styles.content__container}>{children}</div>;
};

export default Card;
