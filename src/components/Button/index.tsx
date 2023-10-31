import {
  ButtonHTMLAttributes,
  CSSProperties,
  MouseEventHandler,
  ReactNode,
} from "react";

import styles from "./ButtonConfirm.module.css";
import LinearProgressConfirm from "../LinearProgress";

type PropsTypes = {
  color?:
    | "primary"
    | "error"
    | "warning"
    | "secondary"
    | "info"
    | "success";
  shape?: "circle" | "rectangle" | "oval";
  size?: "large" | "small" | "medium";
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  style?: CSSProperties;
  loading?: boolean;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  id?: string;
  form?: string;
};

const ButtonConfirm = ({
  children,
  color = "primary",
  size = "medium",
  onClick = () => null,
  type = "button",
  shape = "rectangle",
  style,
  loading = false,
  className = "",
  fullWidth = false,
  disabled = false,
  ...res
}: PropsTypes) => {
  return (
    <div
      className={`${styles.container} ${className} ${
        fullWidth ? styles.fullWidth : ""
      }`}
    >
      <button
        {...res}
        disabled={loading || disabled}
        type={type}
        className={`${styles[color]} ${styles[shape]} ${
          styles[size]
        } ${styles.main}`}
        onClick={onClick}
        style={style}
      >
        {children}
      </button>
      {loading && <LinearProgressConfirm />}
    </div>
  );
};

export default ButtonConfirm;
