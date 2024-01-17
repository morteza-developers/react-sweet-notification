import NotifyObserver from "../../notifyObserver";
import ConfirmContainer from "../ConfirmContainer";
import ToastContainer from "../ToastContainer";
import { useState, useEffect, FC } from "react";
import { createPortal } from "react-dom";
import DialogContainer from "components/DialogContainer";

type Props = {
  toastDuration?: number;
};
let modalElement: any;
const NotifyProvider: FC<Props> = ({ toastDuration }) => {
  const [isServerSide, setIsServerSide] = useState<boolean>(true);
  useEffect(() => {
    if (!modalElement) {
      modalElement = document.createElement("div");
      modalElement.setAttribute("id", "root-modal");
      document.body.appendChild(modalElement);
    }
    setIsServerSide(false);

    toastDuration && new NotifyObserver().setToastDuration(toastDuration);
  }, []);
  if (isServerSide && !modalElement) return null;
  return createPortal(
    <>
      {/* //snakes is show */}
      <ToastContainer />
      {/* //confirm is show */}
      <ConfirmContainer />
      {/* dialog */}
      <DialogContainer />
    </>,
    modalElement!
  );
};

export default NotifyProvider;
