import { Link } from "react-router-dom"


const Layout = ({children}) => {
    return (
    <>
        <header>
            <nav>
                <ul>
                    <li><Link  to="/">Home</Link></li>
                </ul>
            </nav>
        </header>
            { children }
        <footer>
            pedro castelo 2023
        </footer>

    </>
    )
}

export default Layout