import { LayoutProps } from "./Layout-props";
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Sidebar from "./Sidebar/Sidebar";
import styles from './Layout.module.css';
import { FunctionComponent } from "react";

const {wrapper,header,sidebar,body,footer} = styles;

const Layout = ({ children }: LayoutProps): JSX.Element => {

    return (
        <div className={wrapper}>
            <Header className={header} />
            <Sidebar className={sidebar} />
            <div className={body}>
                {children}
            </div>
            <Footer className={footer} />
        </div>
    );
};



export const withLayout = <T extends Record<string, unknown>>(Сomponent: FunctionComponent<T>) => {

    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Сomponent {...props} />
            </Layout>
        );
    };
};



