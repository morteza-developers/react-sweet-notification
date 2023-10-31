# react-sweet-notification

A Beautiful, Responsive , Lightweight ,Easy to use, Accessible (Wai-Aria) Replacement For React Notify Boxes Zero Dependencies

## Install

```bash
npm install react-sweet-notification
# or, if using yarn
yarn add react-sweet-notification
```

## Usage

```jsx
import { NotifyProvider, toast, confirm } from "react-sweet-notification";

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
      content: "confirm content",
      preConfirm: () =>
        new Promise((res) => {
          setTimeout(() => res(), 4000);
        }),
    });
  };
  return (
    <div>
      <NotifyProvider />
      <button onClick={showSuccessToast}>Success toast</button>
      <button onClick={showErrorToast}>error toast</button>
      <button onClick={showWarningToast}>warning toast</button>
      <button onClick={showInfoToast}>info toast</button>
      <button onClick={showConfirm}>confirm</button>
    </div>
  );
}
```

When using the next.js framework, enter like this

```jsx
import dynamic from "next/dynamic";

const NotifyProvider = dynamic(
  () => import("react-sweet-notification").then((mod) => mod.NotifyProvider),
  {
    ssr: false,
  }
);
```

component in this way

## License

Licensed under MIT
