import { NotifyProvider, toast, confirm, dialog } from "../src";

export default function App() {
  const showSuccessToast = () => {
    toast("hi my friend it is a success toast", { status: "success" });
  };

  const showErrorToast = () => {
    toast("hi my friend it is a error toast", { status: "error" });
  };

  const showWarningToast = () => {
    toast("hi my friend it is a warning toast", { status: "warning" });
  };

  const showInfoToast = () => {
    toast("hi my friend it is a info toast", { status: "info" });
  };

  const showConfirm = () => {
    confirm("hi my friend it is a confirm", {
      content: ({ onClose }) => "confirm content",
      preConfirm: () =>
        new Promise((res) => {
          setTimeout(() => res(""), 4000);
        }),
    });
  };

  const showDialog = () => {
    dialog("hi my friend it is a simple dialog", {
      content: ({ onClose }) => "dialog content",
    });
  };
  return (
    <div>
      <NotifyProvider />
      <button onClick={showSuccessToast}>Success toast</button>
      <button onClick={showErrorToast}>error toast</button>
      <button onClick={showWarningToast}>warning toast</button>
      <button onClick={showInfoToast}>info toast</button>
      <button onClick={showConfirm}>show confirm</button>
      <button onClick={showDialog}>show dialog</button>
    </div>
  );
}
