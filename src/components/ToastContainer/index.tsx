import { IToastListener } from "../../types";
import Toast from "../Toast";
import styles from "./ToastContainer.module.css";
import { FC } from "react";
type Props = {
  snakes: Array<IToastListener>;
};

const ToastContainer: FC<Props> = ({ snakes }) => {
  return (
    <ul className={`${styles.main}`}>
      {snakes.map((item, index) => (
        <Toast key={item.id || index} {...item} />
      ))}
    </ul>
  );
};

export default ToastContainer;
