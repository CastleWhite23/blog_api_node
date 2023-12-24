import { Card, CardHeader, CardBody, CardFooter, Text, Heading} from '@chakra-ui/react'
import './style.css'


const CardPost = ({ titulo, conteudo, autor, data_criacao }) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <Heading size='md'>{ titulo }</Heading>
                </CardHeader>
                <CardBody>
                    <Text>{ conteudo }</Text>
                </CardBody>
                <CardFooter>
                    <Text>{ autor }</Text>
                    <Text>{ data_criacao }</Text>
                </CardFooter>
            </Card>


        </>
    )
}

export default CardPost