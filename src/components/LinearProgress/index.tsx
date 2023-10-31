import { CSSProperties, FC } from "react";
import styles from "./LinearProgress.module.css";

type PropsTypes = {
  style?: CSSProperties;
};

const LinearProgressConfirm: FC<PropsTypes> = ({ style }) => {
  return <progress style={style} className={styles.main} />;
};

export default LinearProgressConfirm;
