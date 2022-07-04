import { TagProps } from "./Tag-props";
import styles from './Tag.module.css';
import cn from 'classnames';

const { m, s, tag, ghost, red, gray, primary, green } = styles;
const Tag = ({ textSize = 'm', color = 'ghost', href, children, className, ...props }: TagProps): JSX.Element => {
    return (
        <div
            className={cn(tag, className, {
                [s]: textSize === 's',
                [m]: textSize === 'm',
                [ghost]: color === 'ghost',
                [red]: color === 'red',
                [green]: color === 'green',
                [gray]: color === 'gray',
                [primary]: color === 'primary',



            })}
            {...props}
        > {
                href ? <a href={href}>{children}</a> : <>{children}</>
            }
        </div>
    );
};

export default Tag;