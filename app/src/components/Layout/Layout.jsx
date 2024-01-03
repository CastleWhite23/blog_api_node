import Header from '../Header/Header'
import './style.css'

const Layout = ({ children }) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <footer>
                pedro castelo 2023
            </footer>

        </>
    )
}

export default Layout