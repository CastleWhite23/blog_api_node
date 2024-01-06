import { Card, CardHeader, CardBody, CardFooter, Text, Heading , Button } from '@chakra-ui/react'
import './style.css'


const CardPost = ({ titulo, conteudo, autor, data_criacao }) => {
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
                    <Button
                        backgroundColor={"#303030"}
                        color={"#fff"}
                        size='lg'
                    >
                      Editar
                    </Button>
                </CardBody>
                <CardFooter>
                    <Text> {autor}</Text>
                    <Text> {data_criacao}</Text>
                </CardFooter>
            </Card>


        </>
    )
}

export default CardPost