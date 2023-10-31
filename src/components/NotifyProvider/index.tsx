import NotifyObserver from "../../notifyObserver";
import ConfirmContainer from "../ConfirmContainer";
import ToastContainer from "../ToastContainer";
import { IConfirmListener, IToastListener } from "../../types";
import { useState, useEffect, FC } from "react";
import { createPortal } from "react-dom";

type Props = {
  toastDuration?: number;
};
let modalElement: any;
const NotifyProvider: FC<Props> = ({ toastDuration }) => {
  const [isServerSide, setIsServerSide] = useState<boolean>(true);
  const [snakes, setSnakes] = useState<Array<IToastListener>>([]);
  const [confirms, setConfirms] = useState<Array<IConfirmListener>>([]);

  const removeSnaks = (id: string) => {
    setSnakes((state) => state.filter((item) => item.id != id));
  };

  const removeConfirm = (id: string) => {
    setConfirms((state) => state.filter((item) => item.id != id));
  };
  useEffect(() => {
    if (!modalElement) {
      modalElement = document.createElement("div");
      modalElement.setAttribute("id", "root-modal");
      document.body.appendChild(modalElement);
    }
    setIsServerSide(false);
    new NotifyObserver().toastRegister((item) => {
      if (item.type === "add") setSnakes((state) => [...state, item]);
      if (item.type === "remove") removeSnaks(item.id);
    });
    new NotifyObserver().confirmRegister((item) => {
      if (item.type == "confirm") setConfirms((state) => [...state, item]);
      if (item.type == "closeConfirm") removeConfirm(item.id);
    });
    toastDuration && new NotifyObserver().setToastDuration(toastDuration);
  }, []);
  if (isServerSide && !modalElement) return null;
  return createPortal(
    <>
      {/* //snakes is show */}
      <ToastContainer snakes={snakes} />
      {/* //confirm is show */}
      <ConfirmContainer confirms={confirms} />
    </>,
    modalElement!
  );
};

export default NotifyProvider;
