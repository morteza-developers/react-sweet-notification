import { CSSProperties, FC } from "react";
import "./LinearProgress.css";

type PropsTypes = {
  style?: CSSProperties;
};

const LinearProgressConfirm: FC<PropsTypes> = ({ style }) => {
  return <progress style={style} className="sweet-progress-main" />;
};

export default LinearProgressConfirm;
