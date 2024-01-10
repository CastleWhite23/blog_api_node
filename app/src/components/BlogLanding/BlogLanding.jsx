import "./style.css"
import { Spinner } from '@chakra-ui/react'
import {  Link} from 'react-router-dom'
import imgNote from '../../imgs/d62b63d1-ae1a-4563-a7aa-bf9d57239935.jpeg';
import { useEffect, useState } from "react";
import { createContext } from "react";
import { AppContext } from '../AppContext/AppContext'

const BlogLanding = () => {
    const [imgLink, setImgLink] = useState("")
    const { token } = createContext(AppContext)

    useEffect(() => {
        setImgLink(imgNote)

        
    }, [])

    return (
        <>
            <div className="blog-landing">
                <div>
                    <h1> Explore e Compartilhe no Nosso Universo de Histórias!</h1>
                    <p>
                        Seja muito bem-vindo ao nosso blog, um universo cativante dedicado a proporcionar a você uma jornada única de descobertas, inspiração e compartilhamento de experiências pessoais. Estamos verdadeiramente emocionados por tê-lo como parte integrante desta vibrante comunidade!
                    </p>
                    <Link to="/postagens/novo"> <button>Compartilhe suas historias!</button></Link>
                </div>
                {
                    imgLink ? (
                        <img src={imgNote}></img>
                    ) : (
                        <Spinner size='lg' />
                    )
                }
            </div>
        </>
    )
}


export default BlogLanding