import { FC, useEffect, useState } from "react";
import Confirm from "../Confirm";
import { IConfirmListener } from "../../types";
import NotifyObserver from "notifyObserver";

type Props = {};
const ConfirmContainer: FC<Props> = ({}) => {
  const [confirms, setConfirms] = useState<Array<IConfirmListener>>([]);

  const removeConfirm = (id: string) => {
    setConfirms((state) => state.filter((item) => item.id != id));
  };
  useEffect(() => {
    new NotifyObserver().confirmRegister((item) => {
      if (item.type == "confirm") setConfirms((state) => [...state, item]);
      if (item.type == "closeConfirm") removeConfirm(item.id);
    });
  }, []);
  return (
    <>
      {confirms.map((item) => (
        <Confirm {...item} key={item.id} />
      ))}
    </>
  );
};

export default ConfirmContainer;
