import NotifyObserver from "notifyObserver";
import { IToastListener } from "../../types";
import Toast from "../Toast";
import "./ToastContainer.css";
import { FC, useEffect, useState } from "react";
type Props = {};

const ToastContainer: FC<Props> = ({}) => {
  const [snakes, setSnakes] = useState<Array<IToastListener>>([]);
  const removeSnaks = (id: string) => {
    setSnakes((state) => state.filter((item) => item.id != id));
  };

  useEffect(() => {
    new NotifyObserver().toastRegister((item) => {
      if (item.type === "add") setSnakes((state) => [...state, item]);
      if (item.type === "remove") removeSnaks(item.id);
    });
  }, []);

  return (
    <ul className="sweet-container-main">
      {snakes.map((item, index) => (
        <Toast key={item.id || index} {...item} />
      ))}
    </ul>
  );
};

export default ToastContainer;
