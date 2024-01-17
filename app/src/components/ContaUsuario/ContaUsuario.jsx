import { Button } from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "../AppContext/AppContext"
import { deleteCookie } from "../../services/funcCookies"

const ContaUsuario = () => {
    const { tokenAuth, setTokenAuth } = useContext(AppContext)
    const handleClickDeslogar = () => {
        deleteCookie('token')
        setTokenAuth("")
    }


    return (
        <>
            <h1>Informções da conta do usuario</h1>
            <Button
                backgroundColor={"#303030"}
                color={"#fff"}
                size='lg'
                onClick={handleClickDeslogar}
            >
                Deslogar
            </Button>
        </>
    )
}

export default ContaUsuario