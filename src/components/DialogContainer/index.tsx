import { FC, useEffect, useState } from "react";
import Confirm from "../Confirm";
import { IDialogListener } from "../../types";
import NotifyObserver from "../../notifyObserver";
import Dialog from "../Modal";

type Props = {};
const DialogContainer: FC<Props> = () => {
  const [dialogs, setDialogs] = useState<Array<IDialogListener>>([]);

  const removeDialog = (id: string) => {
    setDialogs((state) => state.filter((item) => item.id != id));
  };

  const updateDialog = (newConfirm: IDialogListener) => {
    setDialogs((state) => {
      const index = state.findIndex((i) => i.id == newConfirm.id);
      if (index == -1) return [...state, newConfirm];
      state[index] = newConfirm;
      return state;
    });
  };

  useEffect(() => {
    new NotifyObserver().dialogRegister((item) => {
      if (item.type == "dialog") {
        if (item.updateDialog) {
          updateDialog(item);
        } else {
          setDialogs((state) => [...state, item]);
        }
      }
      if (item.type == "closeDialog") removeDialog(item.id);
    });
  }, []);

  return (
    <>
      {dialogs.map((item) => (
        <Dialog {...item} key={item.id} />
      ))}
    </>
  );
};

export default DialogContainer;
