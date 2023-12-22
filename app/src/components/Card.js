import { Card, CardHeader, CardBody, CardFooter, ControlBox } from '@chakra-ui/react'



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
                    <Button>View here</Button>
                </CardFooter>
            </Card>


        </>
    )
}

export default CardPost