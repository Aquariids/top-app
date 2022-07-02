import styles from "./Button.module.css";
import cn from "classnames";
import { ButtonProps } from "./Button.props";
import ArrowIcon from './arrow.svg';
const { button, primary, ghost,svgArrow,arrowDown } = styles;

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
      {arrow !== 'none' && <span className={cn(svgArrow, {
        [arrowDown]: arrow === 'down'
      })}>
        <ArrowIcon />
        </span>}
    </button>
  );
};

export default Button;