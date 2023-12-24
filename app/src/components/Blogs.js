
import { api } from "../services/api";
import CardPost from './Card'
import { useEffect, useState } from 'react'


const Blogs = () =>{
    //fazer requisição https para api
    //mostrar todos os posts em cards separados com props
    //colocar tudo em um display flex pra ficar bonito
    //colocar uma condição para ter spinner de carregamento
    const [ postData, setPostData ] =  useState([])

    useEffect(()=>{
        const getAllPosts = async () => {
            try{
                const allPost = await api.get('/postagens')
                const allPostData = allPost.data

                setPostData(allPostData)
            }catch{
                console.log("deu ruim nos post")
            }
        }

        getAllPosts()
        console.log(postData)

    }, [])

    return (
        <>
            <h1>PAGINA DOS BLOGS</h1>
            {
                postData.map((post) => (
                    <CardPost titulo={post.titulo_post} conteudo={post.conteudo_post}  autor ={post.autor_post}  data_criacao={post.data_criacao} />
                ))


            }
           
        </>
    )
}

export default Blogs