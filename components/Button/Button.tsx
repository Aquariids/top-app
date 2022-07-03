import styles from "./Button.module.css";
import cn from "classnames";
import { ButtonProps } from "./Button.props";
import {ReactComponent as ArrowIcon} from './arrow.svg';
const { button, primary, ghost,svgarrow,arrowdown } = styles;

 const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(button, className, {
        [primary]: appearance === "primary",
        [ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && <span className={cn(svgarrow, {
        [arrowdown]: arrow === 'down'
      })}>
        <ArrowIcon />
        </span>}
    </button>
  );
};

export default Button;