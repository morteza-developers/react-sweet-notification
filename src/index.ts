import NotifyObserver from "./notifyObserver";
import NotifyProvider from "./components/NotifyProvider";
const notifyObserver = new NotifyObserver();
const toast = notifyObserver.toast;
const confirm = notifyObserver.confirm;
const closeToast = notifyObserver.closeToast;
const closeConfirm = notifyObserver.closeConfirm;
export {
  NotifyObserver,
  toast,
  confirm,
  closeToast,
  closeConfirm,
  NotifyProvider,
};
