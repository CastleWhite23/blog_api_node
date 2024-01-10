/* eslint-disable no-undef */
import { InputGroup, InputRightElement, Input, Center, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { api } from "../../services/api"
import { useState } from 'react'


const Login = () => {
    //form para pegar as infos de usuario, fazer as verificacoes da api e se tudo der certo logar propriamente
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [token, setTokenAuth] = useState("")
    const [senha, setSenha] = useState("")

    const handleClickLogar = () => {
        login(username, senha)
    };

    const login = (username, senha) => {
        api.post('/conta/login', {
            username: username,
            senha: senha
        })
        .then((res) => {
            setTokenAuth(res.data.token)
        }) 
        .catch((e) => (console.log(e)))

        api.get("/contas", {
            headers: {
                'Authorization': `token ${token}`
            }
        }).then(res => (console.log(res)))
        .catch(err => (console.log(err)))
    }

    return (
        <>
            <form>
                <Center flexDirection={"column"} rowGap={10}>
                    <h1>Entrar no Blog</h1>
                    <Input
                        variant='flushed'
                        placeholder='Digite o username'
                        fontSize={20}
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                    />
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Digite sua senha'
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
                        onClick={handleClickLogar}
                    >
                        Entrar
                    </Button>
                </Center>
            </form>
        </>
    )
}

export default Login