/* eslint-disable no-undef */
import { Textarea, Input, Center, Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import { api } from "../../services/api"
import { useState } from 'react'


const NovoPost = () => {
    const  navigate =  useNavigate()
    const [titulo, setTitulo] = useState("")
    const [historia, setHistoria] = useState("")
    const autor = "Pedro"
    const dataAtual = new Date();

    const ano = dataAtual.getFullYear();
    const mes = dataAtual.getMonth() + 1; // Os meses começam do zero, então você precisa adicionar 1
    const dia = dataAtual.getDate();
    const hora = dataAtual.getHours();
    const minuto = dataAtual.getMinutes();
    const segundo = dataAtual.getSeconds();

    
    const data_criacao = `${ano}/${mes}/${dia} ${hora}:${minuto}:${segundo}`;
    

    const handleCriarPostClick = () => {
        createPost(titulo, historia, autor, data_criacao)
        navigate("/postagens")
    };

    const createPost = (titulo, historia, autor, data_criacao) => {
        api.post('/postagens/novo', {
            titulo_post: titulo,
            conteudo_post: historia,
            autor_post: autor,
            data_criacao: data_criacao,
            data_alteracao: data_criacao
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