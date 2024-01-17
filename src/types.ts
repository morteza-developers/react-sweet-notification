import { ReactNode } from "react";
export type IToastStatus = "success" | "error" | "warning" | "info";

export interface IToastOption {
  activeBackdrop?: boolean;
  onOpen?: (id: string) => void;
  id?: string;
  status?: IToastStatus;
  snakeHideDuration?: number;
  activeTimer?: boolean;
  disableCloseButton?: boolean;
  onClose?: (id: string) => void;
  promise?: () => Promise<any>;
}
export interface IToastListener {
  activeBackdrop?: boolean;
  activeTimer?: boolean;
  disableCloseButton?: boolean;
  onClose?: (id: string) => void;
  onOpen?: (id: string) => void;
  status?: IToastStatus;
  snakeHideDuration?: number;
  content?: string | ReactNode | null;
  id: string;
  type: "remove" | "add";
  promise?: () => Promise<any>;
}
interface ContentParamsType {
  onClose: () => void;
}
export interface IConfirmListener {
  updateConfirm?: boolean;
  closeAfterAccept?: boolean;
  okText?: string | null;
  cancelText?: string | null;
  showOkButton?: boolean;
  showCancelButton?: boolean;
  onOk?: (data: OkConfirm) => void;
  onClose?: (data: CloseConfirm) => void;
  title?: string;
  okIcon?: any;
  content?: (option: ContentParamsType) => ReactNode;
  id: string;
  status?: IToastStatus;
  type: "closeConfirm" | "confirm";
  close: () => void;
  preConfirm?: () => Promise<any>;
}
export interface IConfirmOption {
  updateConfirm?: boolean;
  closeAfterAccept?: boolean;
  okText?: string | null;
  cancelText?: string | null;
  showOkButton?: boolean;
  showCancelButton?: boolean;
  onOk?: (data: OkConfirm) => void;
  onClose?: (data: CloseConfirm) => void;
  title?: string;
  okIcon?: any;
  status?: IToastStatus;
  content?: (option: ContentParamsType) => ReactNode;
  id?: string;
  preConfirm?: () => Promise<any>;
}

interface CloseConfirm {
  okText?: string | null;
  cancelText?: string | null;
  showOkButton?: boolean;
  showCancelButton?: boolean;
  title?: string;
  okIcon?: any;
  content?: any;
  status?: IToastStatus;
  id: string;
}

interface OkConfirm {
  okText?: string | null;
  cancelText?: string | null;
  showOkButton?: boolean;
  showCancelButton?: boolean;
  close: () => void;
  title?: string;
  okIcon?: any;
  content?: any;
  status?: IToastStatus;
  id: string;
}

//dialog
export interface IDialogListener {
  updateDialog?: boolean;
  title?: string;
  content?: (option: ContentParamsType) => ReactNode;
  id: string;
  type: "closeDialog" | "dialog";
  close: () => void;
}

export interface IDialogOption {
  updateDialog?: boolean;
  title?: string;
  content?: (option: ContentParamsType) => ReactNode;
  id?: string;
}
