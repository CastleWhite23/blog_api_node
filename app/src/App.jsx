import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import MainRoutes from '../components/MainRoutes/MainRoutes'


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
            <MainRoutes/>
          </Layout>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
