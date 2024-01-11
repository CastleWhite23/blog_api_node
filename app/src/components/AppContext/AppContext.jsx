import { createContext, useEffect, useState } from "react"
import { getCookie } from '../../services/funcCookies'


export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
    const [tokenAuth, setTokenAuth] = useState("")
    useEffect(() => {
        setTokenAuth(getCookie('token'))
    }, [])

    return (
        <>
            <AppContext.Provider value={{ tokenAuth, setTokenAuth }}>
                {children}
            </AppContext.Provider>
        </>
    )
}

