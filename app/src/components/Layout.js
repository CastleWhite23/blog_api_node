import Navbar from "./Navbar"


const Layout = ({children}) => {
    return (
    <>
        <header>
           <Navbar/>
        </header>
            { children }
        <footer>
            pedro castelo 2023
        </footer>

    </>
    )
}

export default Layout