
import { api } from "../../services/api";
import { Spinner } from '@chakra-ui/react'
import CardPost from '../Card/Card'
import Slider from "../Slider/Slider";
import { useEffect, useState } from 'react'
import './style.css'

const Blogs = () => {
    //fazer requisição https para api
    //mostrar todos os posts em cards separados com props
    //colocar tudo em um display flex pra ficar bonito
    //colocar uma condição para ter spinner de carregamento
    const [postData, setPostData] = useState([])
    const [allPostLoaded, setAllPostLoaded] = useState(false)

    useEffect(() => {
        const getAllPosts = async () => {
            try {
                const allPost = await api.get('/postagens')
                const allPostData = allPost.data

                setPostData(allPostData)
                setAllPostLoaded(true)
            } catch {
                console.log("deu ruim nos post")
            }
        }

        getAllPosts()
        console.log(postData)

    }, [])

    return (
        <>
            <div className="posts">
                <h1 className="mais-recente">Veja as hisórias mais recentes</h1>
                <div className="slider">
                    <Slider />
                </div>

                <div className="blogs-container">
                    {
                        allPostLoaded ? (
                            postData.map(post => (
                                <CardPost key={post.id_post} titulo={post.titulo_post} conteudo={post.conteudo_post} autor={post.autor_post} data_criacao={post.data_criacao} />
                            ))
                        ) : (
                            <Spinner size='lg' />
                        )

                    }
                </div>
            </div>
        </>
    )
}

export default Blogs



