import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import BlogPage from '../../pages/BlogPage/BlogPage'
import NovoPostPage from '../../pages/NovoPostPage/NovoPostPage'
import CadUsuarioPage from '../../pages/CadUsuarioPage/CadUsuarioPage'
import LoginPage from '../../pages/LoginPage/LoginPage'
import EditarPostPage from '../../pages/EditarPostPage/EditarPostPage'
import ExcluirPostPage from '../../pages/ExcluirPostPage/ExcluirPostPage'



const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Rotas referentes aos post */}

                <Route path="/postagens" element={<BlogPage />} />
                <Route path="/postagens/novo" element={<NovoPostPage />} />
                <Route path="/postagens/editar/:key" element={<EditarPostPage />} />
                <Route path="/postagens/excluir/:key" element={<ExcluirPostPage />} />

                {/* Rotas referentes ao usuario */}
                <Route path="/usuarios/cadastro" element={<CadUsuarioPage />} />
                <Route path="/usuarios/login" element={<LoginPage />} />

                {/* no home vai ter o get started com uma landing page, é pra ter uma pg pros posts */}
            </Routes>
        </>
    )
}

export default  MainRoutes