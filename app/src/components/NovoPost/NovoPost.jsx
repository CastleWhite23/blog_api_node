/* eslint-disable no-undef */
import { Textarea, Input, Center, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import { api } from "../../services/api"
import { useState, useContext, useEffect } from 'react'
import { getData } from '../../services/getData'
import { AppContext } from '../AppContext/AppContext'


const NovoPost = () => {
    const navigate = useNavigate()
    const [titulo, setTitulo] = useState("")
    const [historia, setHistoria] = useState("")
    const { tokenAuth } = useContext(AppContext)
    

    const data_criacao = getData();


    const handleCriarPostClick = () => {
        createPost(titulo, historia, data_criacao)
        navigate("/postagens")
    };

    const createPost = (titulo, historia,  data_criacao) => {
        api.post('/postagens/novo', {
            titulo_post: titulo,
            conteudo_post: historia,
            data_criacao: data_criacao,
            data_alteracao: data_criacao
        }, {
            headers: {
                'Authorization': `token ${tokenAuth}`
            }
        })
    }


    return (
        <>
            <form>
                <Center flexDirection={"column"} rowGap={10}>
                    <h1>Compartilhe sua história</h1>
                    <Input
                        variant='flushed'
                        placeholder='Digite o titulo'
                        fontSize={20}
                        value={titulo}
                        onChange={(e) => {
                            setTitulo(e.target.value)
                        }}
                    />
                    <Textarea
                        height={10}
                        value={historia}
                        onChange={(e) => {
                            setHistoria(e.target.value)
                        }}
                    />
                    <Button
                        backgroundColor={"#303030"}
                        color={"#fff"}
                        size='lg'
                        onClick={handleCriarPostClick}
                    >
                        Compartilhar
                    </Button>
                </Center>
            </form>
        </>
    )
}


export default NovoPost