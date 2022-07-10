import { FooterProps } from "./Footer-props";
import styles from './Footer.module.css';
import cn from 'classnames';
import {format} from 'date-fns';

const {footer} = styles;
const Footer = ({ className,...props}: FooterProps): JSX.Element => {

    return (
        <div className={cn(className, footer)} {...props}>
            <span>OwlTop © 2020 - {format(new Date(),'yyyy')} Все права защищены</span>
            <span>Пользовательское соглашение</span>
            <span>Политика конфиденциальности</span>
        </div>
    );
}; 


export default Footer;