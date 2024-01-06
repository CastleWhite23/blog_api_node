/* eslint-disable no-undef */
import { Textarea, Input, Center, Button } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from "../../services/api"
import { useEffect, useState } from 'react'
import { getData } from '../../services/getData'
import { getPostById } from '../../services/getPosts'


const EditarPost = () => {
    const  navigate =  useNavigate()
    const { key } = useParams();
    const [titulo, setTitulo] = useState("")
    const [historia, setHistoria] = useState("")
    const [id_post, setIdPost] = useState("")
    useEffect(()=>{
        const getPost = async (key) =>{
            const data = await getPostById(key);
            setTitulo(data[0].titulo_post)
            setHistoria(data[0].conteudo_post)
            setIdPost( data[0].id_post)

        }

        getPost(key)
    }, [])

    
    

    const handleEditarPostClick = () => {
        const data_alteracao = getData();
        editPost(titulo, historia, data_alteracao)
        navigate("/postagens")
    };

    const editPost = (titulo, historia, data_alteracao) => {
        api.put(`/postagens/editar/${id_post}`, {
            titulo_post: titulo,
            conteudo_post: historia,
            data_alteracao: data_alteracao
        })
    }


    return (
        <>
            <form>
                <Center flexDirection={"column"} rowGap={10}>
                    <h1>Atualize sua história</h1>
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
                        onClick={handleEditarPostClick}
                    >
                        Editar
                    </Button>
                </Center>
            </form>
        </>
    )
}


export default EditarPost