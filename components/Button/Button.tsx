import styles from "./Button.module.css";
import cn from "classnames";
import { ButtonProps } from "./Button.props";

const { button, primary, ghost } = styles;

 const Button = ({ appearance, children }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(button, {
        [primary]: appearance == "primary",
        [ghost]: appearance == "ghost",
      })}
    >
      {children}
    </button>
  );
};

export default Button;