import Navbar from "./Navbar"
import './style.css'

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