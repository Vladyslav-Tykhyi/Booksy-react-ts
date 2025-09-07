import s from "./Loading.module.css";

import { RotateLoader } from "react-spinners";

const Loading = () => {
  return <RotateLoader margin={8} className={s.loading} />;
};

export default Loading;
