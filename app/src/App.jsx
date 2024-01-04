import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home/Home'
import BlogPage from './pages/BlogPage/BlogPage'
import NovoPostPage from './pages/NovoPostPage/NovoPostPage'
import CadUsuarioPage from './pages/CadUsuarioPage/CadUsuarioPage'
import LoginPage from './pages/LoginPage/LoginPage'



import Layout from './components/Layout/Layout'

import './components/style.css'
function App() {
  //aqui tera os components dos links do reac-router-dom
  //aqui tera os components e o app context



  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Rotas referentes aos post */}

              <Route path="/postagens" element={<BlogPage />} />
              <Route path="/postagens/novo" element={<NovoPostPage />} />

              {/* Rotas referentes ao usuario */}
              <Route path="/usuario/cadastro" element={<CadUsuarioPage />} />
              <Route path="/usuario/login" element={<LoginPage />} />
              
              {/* no home vai ter o get started com uma landing page, é pra ter uma pg pros posts */}
            </Routes>
          </Layout>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
