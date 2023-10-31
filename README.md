# react-sweet-notification

A BEAUTIFUL, RESPONSIVE, ACCESSIBLE (WAI-ARIA) REPLACEMENT FOR REACT NOTIFY BOXES
ZERO DEPENDENCIES

## Install

```bash
npm install react-sweet-notification
# or, if using yarn
yarn add react-sweet-notification
```

## Usage

```jsx
import { NotifyProvider, toast, confirm } from "react-sweet-notification";

function App() {
  const showToast = () => {
    toast();
  };
  const showConfirm = () => {
    confirm();
  };
  return (
    <div>
      <NotifyProvider />
      <button onClick={showToast}>toast me</button>
      <button onClick={showConfirm}>confirm</button>
    </div>
  );
}
```

When using the next.js framework, import the

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
