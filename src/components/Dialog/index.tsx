import { FC, ReactNode } from "react";
import "./Dialog.css";
import { createPortal } from "react-dom";

let rootDialog: any;
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
      className={`sweet-dialog-${maxWidth} sweet-dialog-main ${
        open ? "sweet-dialog-open-place-holder" : ""
      }`}
    >
      <div onClick={onClose} className="sweet-dialog-back-drop"></div>
      <div
        className={`sweet-dialog-container ${className} ${
          open ? "sweet-dialog-open" : ""
        }`}
      >
        <div className="sweet-dialog-sign">
          <span></span>
        </div>
        {title && <div className="sweet-dialog-title">{title}</div>}
        {children && <div className="sweet-dialog-children">{children}</div>}
        {actions && <div>{actions}</div>}
      </div>
    </div>,
    rootDialog
  );
};
export default Dialog;
// export default Dialog;
