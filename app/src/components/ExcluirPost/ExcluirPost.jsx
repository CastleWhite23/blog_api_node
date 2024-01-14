/* eslint-disable no-undef */
import { Button, Center } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from "../../services/api"
import { useEffect, useState, useContext } from 'react'
import { getPostById } from '../../services/getPosts'
import { AppContext } from '../AppContext/AppContext'



const ExcluirPost = () => {
    const {tokenAuth} =  useContext(AppContext)
    const navigate = useNavigate()
    const { key } = useParams();
    const [id_post, setIdPost] = useState("")
    useEffect(() => {
        const getPost = async (key) => {
            const data = await getPostById(key);
            setIdPost(data[0].id_post)
        }
        getPost(key)
    }, [])


    const handleExcluirPostClick = () => {
        excluirPost(id_post)
        navigate("/postagens")
    };

    const excluirPost = (id_post) => {
        api.delete(`/postagens/excluir/${id_post}`, {
            headers: {
                'Authorization': `token ${tokenAuth}`
            }
        })
    }


    return (
        <>
            <Center>
                <Button
                    backgroundColor={"#303030"}
                    color={"#fff"}
                    size='lg'
                    onClick={handleExcluirPostClick}
                >
                    Excluir
                </Button>
            </Center>

        </>
    )
}


export default ExcluirPost