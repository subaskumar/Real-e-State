import NavBar from "../components/Navbar";
import Footer from "../components/Footer"

const Layout = (props) =>{

    return (
        <>
            <NavBar/>
                {props.children}
            <Footer />
        </>
    )
}

export default Layout;