import { ParagraphProps } from "./Paragraph-props";
import styles from './Paragraph.module.css';
import cn from 'classnames';

const {p,m,l,s} = styles;
const Paragraph = ({textSize = 'm',children,className,...props }:ParagraphProps):JSX.Element => {
    return (
        <p
        className={cn(p,className, {
            [s]: textSize === 's',
            [m]: textSize === 'm',
            [l]: textSize === 'l',
        })}
        {...props}
        >
            {children}
        </p>
    )
};

export default Paragraph;