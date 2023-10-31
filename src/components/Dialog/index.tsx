import { FC, ReactNode } from "react";
import styles from "./Dialog.module.css";
import { createPortal } from "react-dom";

let rootDialog:any;
type Props = {
  children?: ReactNode;
  open?: boolean;
  onClose?: () => void;
  maxWidth?: "sm" | "md" | "lg" | "xl";
  title?: string;
  clearScreen?: boolean;
  className?: string;
  actions?: ReactNode;
};

const Dialog: FC<Props> = ({
  children,
  open = false,
  onClose = () => null,
  maxWidth = "sm",
  title,
  clearScreen = false,
  className = "",
  actions,
}) => {
  if (!rootDialog) {
    rootDialog = document.createElement("div");
    rootDialog.setAttribute("id", "_root_dialog");
    document.body.appendChild(rootDialog);
  }
  if (clearScreen && !open) return null;
  return createPortal(
    <div
      className={`${styles[maxWidth]} ${styles.main} ${
        open ? styles.open_place_holder : ""
      }`}
    >
      <div onClick={onClose} className={styles.back_drop}></div>
      <div
        className={`${styles.container} ${className} ${
          open ? styles.open : ""
        }`}
      >
        <div className={styles.sign}>
          <span></span>
        </div>
        {title && <div className={styles.title}>{title}</div>}
        {children && <div className={styles.children}>{children}</div>}
        {actions && <div>{actions}</div>}
      </div>
    </div>,
    rootDialog
  );
};
export default Dialog
// export default Dialog;
