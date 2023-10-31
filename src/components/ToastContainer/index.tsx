import { IToastListener } from "../../types";
import Toast from "../Toast";
import "./ToastContainer.css";
import { FC } from "react";
type Props = {
  snakes: Array<IToastListener>;
};

const ToastContainer: FC<Props> = ({ snakes }) => {
  return (
    <ul className="sweet-container-main">
      {snakes.map((item, index) => (
        <Toast key={item.id || index} {...item} />
      ))}
    </ul>
  );
};

export default ToastContainer;
