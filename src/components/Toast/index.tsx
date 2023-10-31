import { useEffect, FC } from "react";
import styles from "./Toast.module.css";
import { IToastListener } from "../../types";
import { closeToast } from "index";


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
    <li className={styles.root}>
      {activeBackdrop && <div className={styles.back_drop}></div>}
      <div className={`${styles[status]} ${styles.main}`}>
        <div className={styles.place_holder}>
          {!isDisableCloseButton && (
            <button onClick={removeToast} className={styles.close_btn}>
              x
            </button>
          )}
          <span className={styles.title}>{content}</span>
        </div>
        {isActiveTimer && (
          <span
            className={`${styles[`${status}_line`]} ${styles.line}`}
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
