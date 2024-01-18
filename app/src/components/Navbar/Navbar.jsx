/* eslint-disable no-undef */
import { Link } from "react-router-dom"
import { useContext } from "react"
import './style.css'
import { AppContext } from "../AppContext/AppContext"


const Navbar = () => {
    const { tokenAuth } = useContext(AppContext)

    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/postagens">Histórias</Link></li>
                    <li><Link to="/postagens/novo">novo post</Link></li>
                    {
                        !tokenAuth ? (
                            <>
                                <li><Link to="/usuarios/login">Login</Link></li>
                                <li><Link to="/usuarios/cadastro">Cadastro</Link></li>
                            </>
                        ) : (
                            <>

                                <li><Link to="/usuarios/posts">Minhas Historias</Link></li>
                                <li><Link to="/usuarios/conta">Sua conta</Link></li>
                            </>

                            // <li onClick={handleClickDeslogar}>Deslogar</li>
                        )
                    }

                </ul>
            </nav>
        </>
    )
}


export default Navbar