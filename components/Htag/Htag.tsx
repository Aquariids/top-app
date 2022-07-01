import * as React from "react";
import styles from './Htag.module.css';
import { HtagProps } from "./Htag.props";

const {h1,h2,h3} = styles;

const Htag = ({ tag, children }: HtagProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return <h1 className={h1}>{children}</h1>;
    case "h2":
      return <h2 className={h2}>{children}</h2>;
    case "h3":
      return <h3 className={h3}>{children}</h3>;
    default:
      return <></>;
  }
};

export default Htag;
