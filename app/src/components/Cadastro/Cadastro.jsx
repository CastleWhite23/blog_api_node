/* eslint-disable no-undef */
import { InputGroup, InputRightElement, Input, Center, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { api } from "../../services/api"
import { useState } from 'react'


const Cadastro = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const  navigate =  useNavigate()
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    

    const handleCriarConta = () => {
        createPost(nome, username, email, senha)
        navigate("/usuarios/login")
    };

    const createPost = (nome, username, email, senha) => {
        api.post('/conta/cadastro', {
            nome: nome,
            username: username,
            email: email,
            password: senha
        })
    }


    return (
        <>
            <form>
                <Center flexDirection={"column"} rowGap={10}>
                    <h1>Compartilhe sua história</h1>
                    <Input
                        variant='flushed'
                        placeholder='Qual o seu nome completo?'
                        fontSize={20}
                        value={nome}
                        onChange={(e) => {
                            setNome(e.target.value)
                        }}
                    />
                    <Input
                        variant='flushed'
                        placeholder='Qual o sera Seu Username?'
                        fontSize={20}
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                    />
                    <Input
                        variant='flushed'
                        placeholder='Digite o seu email:'
                        fontSize={20}
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <InputGroup >
                        <Input
                             variant='flushed'
                            type={show ? 'text' : 'password'}
                            placeholder='Digite sua senha:'
                            value={senha}
                            onChange={(e) => {
                                setSenha(e.target.value)
                            }}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    
                    
                    <Button
                        backgroundColor={"#303030"}
                        color={"#fff"}
                        size='lg'
                        onClick={handleCriarConta}
                    >
                        Criar Conta
                    </Button>
                </Center>
            </form>
        </>
    )
}


export default Cadastro