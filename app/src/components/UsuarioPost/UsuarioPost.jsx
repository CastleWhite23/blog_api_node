
import { api } from "../../services/api";
import { Spinner } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import './style.css'
import CardEditavel from "../CardEditavel/CardEditave";
import { AppContext } from "../AppContext/AppContext";

const Blogs = () => {
    //fazer requisição https para api
    //mostrar todos os posts em cards separados com props
    //colocar tudo em um display flex pra ficar bonito
    //colocar uma condição para ter spinner de carregamento
    const [postData, setPostData] = useState([])
    const [allPostLoaded, setAllPostLoaded] = useState(false)
    const {tokenAuth} = useContext(AppContext)

    useEffect(() => {
        const getAllPosts = async () => {
            try {
                const allPost = await api.get('/usuario/posts', {
                    headers: {
                        "Authorization" : `token ${tokenAuth}`
                    }
                })
                const allPostData = allPost.data

                setPostData(allPostData)
                setAllPostLoaded(true)
            } catch {
                console.log("deu ruim nos post")
            }
        }

        getAllPosts()


    }, [])


    return (
        <>
            <div className="posts">
                <h1 className="mais-recente">Minhas historias</h1>
                <div className="blogs-container">
                    
                    {
                        allPostLoaded ? (
                            postData.map(post => (
                                <CardEditavel key={post.id_post}  key_post ={post.id_post} titulo={post.titulo_post} conteudo={post.conteudo_post} autor={post.autor_post} data_criacao={post.data_criacao} />
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



