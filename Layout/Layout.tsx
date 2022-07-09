import { LayoutProps } from "./Layout-props";
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Sidebar from "./Sidebar/Sidebar";
import { Component, FunctionComponent } from "react";


const Layout = ({ children }: LayoutProps): JSX.Element => {

    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </>
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



