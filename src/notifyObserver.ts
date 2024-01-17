import { ReactNode } from "react";
import {
  IConfirmListener,
  IConfirmOption,
  IDialogListener,
  IDialogOption,
  IToastListener,
  IToastOption,
} from "./types";

class NotifyObserver {
  private static _instance: NotifyObserver;
  private toastListener?: (data: IToastListener) => void;
  private confirmListener?: (data: IConfirmListener) => void;
  private dialogListener?: (data: IDialogListener) => void;
  private snakeHideDuration: number = 4000;

  constructor() {
    if (NotifyObserver._instance!) {
      return NotifyObserver._instance;
    }
    NotifyObserver._instance = this;
  }
  setToastDuration = (newTime: number): void => {
    this.snakeHideDuration = newTime;
  };
  private getUniqueId = () => new Date().getTime() + Math.random() + "_notify";

  toast = (
    content?: string | ReactNode | null,
    options: IToastOption = {}
  ): string => {
    if (!this.toastListener) return "";
    const id = options.id || this.getUniqueId();
    this.toastListener({
      content,
      id,
      type: "add",
      snakeHideDuration: this.snakeHideDuration,
      ...options,
    });
    return id;
  };

  confirm = (title: string, options: IConfirmOption = {}): string => {
    if (!this.confirmListener) return "";
    const id = options.id || this.getUniqueId();
    this.confirmListener({
      title,
      type: "confirm",
      close: () => this.closeConfirm(id),
      ...options,
      id,
    });
    return id;
  };

  dialog = (title: string, options: IDialogOption = {}): string => {
    if (!this.dialogListener) return "";
    const id = options.id || this.getUniqueId();
    this.dialogListener({
      title,
      type: "dialog",
      close: () => this.closeDialog(id),
      ...options,
      id,
    });
    return id;
  };

  closeToast = (id: string): void => {
    if (this.toastListener) this.toastListener({ id, type: "remove" });
  };

  closeConfirm = (id: string): void => {
    if (this.confirmListener)
      this.confirmListener({
        id,
        type: "closeConfirm",
        close: () => this.closeConfirm(id),
      });
  };
  closeDialog = (id: string): void => {
    if (this.dialogListener)
      this.dialogListener({
        id,
        type: "closeDialog",
        close: () => this.closeDialog(id),
      });
  };

  toastRegister = (callBack: (data: IToastListener) => void): boolean => {
    if (this.toastListener) return false;
    this.toastListener = callBack;
    return true;
  };

  confirmRegister = (callBack: (data: IConfirmListener) => void): boolean => {
    if (this.confirmListener) return false;
    this.confirmListener = callBack;
    return true;
  };

  dialogRegister = (callBack: (data: IDialogListener) => void): boolean => {
    if (this.dialogListener) return false;
    this.dialogListener = callBack;
    return true;
  };
}

export default NotifyObserver;
