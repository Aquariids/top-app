import { LayoutProps } from "./Layout-props";
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Sidebar from "./Sidebar/Sidebar";


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

export default Layout;