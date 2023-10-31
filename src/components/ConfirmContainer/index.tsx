import { FC } from "react";
import Confirm from "../Confirm";
import { IConfirmListener } from "../../types";

type Props = {
  confirms: Array<IConfirmListener>;
};
const ConfirmContainer: FC<Props> = ({ confirms }) => {
  return (
    <>
      {confirms.map((item) => (
        <Confirm {...item} key={item.id} />
      ))}
    </>
  );
};

export default ConfirmContainer;
