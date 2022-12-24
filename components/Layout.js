import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

const Layout = ({ children }) => (
    <>  
        <header>
            <Nav />
        </header>
        {children}
        <Footer />

    </>
)

export default Layout;