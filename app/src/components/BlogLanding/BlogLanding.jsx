import "./style.css"
import { Spinner } from '@chakra-ui/react'
import imgNote from '../../imgs/d62b63d1-ae1a-4563-a7aa-bf9d57239935.jpeg';
import { useEffect, useState } from "react";
const BlogLanding = () => {
    const [imgLink, setImgLink] = useState("")

    useEffect(() => {
        setImgLink(imgNote)
    }, [])

    return (
        <>
            <div className="blog-landing">
                {
                    imgLink ? (
                        <img src={imgNote}></img>
                    ) : (
                        <Spinner size='lg' />
                    )
                }

                <div>
                    <h1> Explore e Compartilhe no Nosso Universo de Histórias!</h1>
                    <p>
                    Seja muito bem-vindo ao nosso blog, um universo cativante dedicado a proporcionar a você uma jornada única de descobertas, inspiração e compartilhamento de experiências pessoais. Estamos verdadeiramente emocionados por tê-lo como parte integrante desta vibrante comunidade!
                    </p>
                    <button>Compartilhe suas historias!</button>
                </div>
            </div>
        </>
    )
}


export default BlogLanding