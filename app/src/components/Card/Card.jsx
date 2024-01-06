import { Card, CardHeader, CardBody, CardFooter, Text, Heading , Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import './style.css'
import { keyboard } from '@testing-library/user-event/dist/keyboard'


const CardPost = ({ key_post, titulo, conteudo, autor, data_criacao }) => {
 
    return (
        <>
            <Card
                width={"500px"}
                height={"350px"}
            >
                <CardHeader>
                <Heading size='lg'>{titulo}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>{conteudo}</Text>
                    <Text> {autor}</Text>
                    <Text> {data_criacao}</Text>
                </CardBody>
                <CardFooter>
                    <Button
                        backgroundColor={"#303030"}
                        color={"#fff"}
                        size='lg'
                    >
                      <Link to={`/postagens/editar/${key_post}`}>Editar</Link>
                    </Button>
                    <Button
                        backgroundColor={"#303030"}
                        color={"#fff"}
                        size='lg'
                    >
                      <Link to={`/postagens/excluir/${key_post}`}>Excluir</Link>
                    </Button>
                </CardFooter>
            </Card>


        </>
    )
}

export default CardPost