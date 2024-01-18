/* eslint-disable no-undef */
import {
    InputGroup,
    InputRightElement,
    Input,
    Center,
    Button,
    Spinner,
    Alert,
    AlertIcon
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { api } from "../../services/api"
import { useState } from 'react'
import { setCookie } from '../../services/funcCookies'

const Login = () => {
    //form para pegar as infos de usuario, fazer as verificacoes da api e se tudo der certo logar propriamente
    const [show, setShow] = useState(false)
    const [btnLogin, setBtnLogin] = useState(false)
    const [error, setError] = useState("")
    const handleClick = () => setShow(!show)
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [senha, setSenha] = useState("")

    const handleClickLogar = async () => {
        setBtnLogin(true)
        await login(username, senha)

    }

    const login = async (username, senha) => {
        await api.post('/conta/login', {
            username: username,
            senha: senha
        })
            .then((res) => {
                setCookie('token', res.data.token)
                console.log("fe")
                navigate("/usuarios/conta")
                window.location.reload()


                //documnt.cookies = `token=${res.data.token}; HttpOnly`;
            })
            .catch((err) => {
                setBtnLogin(false)  
                console.log("err")
                console.log(err)
                setError(err.response.data.error)
              
            })
    }

    //     api.get("/contas", {
    //         headers: {
    //             'Authorization': `token ${token}`
    //         }
    //     }).then(res => (console.log(res)))
    //     .catch(err => (console.log(err)))
    // }

    return (
        <>
            <form>
                <Center flexDirection={"column"} rowGap={10}>
                    <h1>Entrar no Blog</h1>
                    {
                        error &&
                        <>
                            <Alert status='error'>
                                <AlertIcon />
                                {
                                    error
                                }
                            </Alert>
                        </>
                    }

                    <Input
                        variant='flushed'
                        placeholder='Digite o username'
                        fontSize={20}
                        value={username}
                        required
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                    />
                    <InputGroup size='md'>
                        <Input
                            type={show ? 'text' : 'password'}
                            placeholder='Digite sua senha'
                            value={senha}
                            required
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
                        {
                            !btnLogin
                                ?
                                <>Entrar</>
                                :
                                <Spinner size='lg' />
                        }

                    </Button>
                </Center>
            </form>
        </>
    )
}

export default Login