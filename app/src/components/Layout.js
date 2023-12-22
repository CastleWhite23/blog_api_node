import { Link } from "react-router-dom"


const Layout = ({children}) => {
    return (
    <>
        <header>
            <Link  to="/">Home</Link>
        </header>
            { children }
        <footer>

        </footer>

    </>
    )
}

export default Layout