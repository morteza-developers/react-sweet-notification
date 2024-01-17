import { useEffect, FC } from "react";
import { IToastListener } from "../../types";
import { closeToast } from "index";
import "./Toast.css";

const Toast: FC<IToastListener> = ({
  content,
  onClose = () => null,
  id,
  status = "success",
  snakeHideDuration = 4000,
  onOpen = () => null,
  activeBackdrop = false,
  activeTimer = true,
  disableCloseButton = false,
  promise,
}) => {
  const isActiveTimer = activeTimer && !promise;
  const isDisableCloseButton = disableCloseButton || promise;
  useEffect(() => {
    onOpen(id);
    let timer: NodeJS.Timeout | string | number;
    promise && handlePromise();
    if (isActiveTimer) {
      timer = setTimeout(() => {
        removeToast();
      }, snakeHideDuration);
    }
    return () => clearTimeout(timer);
  }, []);

  const handlePromise = async () => {
    promise && (await promise());
    removeToast();
  };

  const removeToast = () => {
    closeToast(id);
    onClose(id);
  };
  return (
    <li className="sweet-toast-root">
      {activeBackdrop && <div className="sweet-toast-back-drop"></div>}
      <div className={`sweet-toast-${status} sweet-toast-main`}>
        <div className="sweet-toast-place-holder">
          {!isDisableCloseButton && (
            <button onClick={removeToast} className="sweet-toast-close-btn">
              x
            </button>
          )}
          <span className="sweet-toast-title">{content}</span>
        </div>
        {isActiveTimer && (
          <span
            className={`sweet-toast-${status}-line sweet-toast-line`}
            style={{
              animationDuration: `${snakeHideDuration / 1000}s`,
            }}
          ></span>
        )}
      </div>
    </li>
  );
};

export default Toast;
