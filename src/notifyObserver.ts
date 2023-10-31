import { ReactNode } from "react";
import {
  IConfirmListener,
  IConfirmOption,
  IToastListener,
  IToastOption,
} from "./types";

class NotifyObserver {
  private static _instance: NotifyObserver;
  private toastListener?: (data: IToastListener) => void;
  private confirmListener?: (data: IConfirmListener) => void;
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
    content?: string | ReactNode,
    options: IToastOption = {},
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
    const id = this.getUniqueId();
    this.confirmListener({
      title,
      id,
      type: "confirm",
      close: () => this.closeConfirm(id),
      ...options,
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
}

export default NotifyObserver;
