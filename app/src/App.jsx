import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home'
import Layout from './components/Layout/Layout'
import Blogs from './components/Blogs/Blogs';
import NovoPost from './components/NovoPost/NovoPost';
function App() {
  //aqui tera os components dos links do reac-router-dom
  //aqui tera os components e o app context



  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/postagens" element={<Blogs />}/>
              <Route path="/postagens/novo" element={<NovoPost />}/>
              {/* no home vai ter o get started com uma landing page, é pra ter uma pg pros posts */}
            </Routes>
          </Layout>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
