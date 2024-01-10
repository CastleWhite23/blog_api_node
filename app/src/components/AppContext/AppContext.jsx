import { createContext, useState } from "react"



export const AppContext = createContext()

const AppContextProvider = ( { children } ) =>{
    const [tokenAuth, setTokenAuth] = useState("")

    return(
        <>
            <AppContext.Provider value={ { tokenAuth, setTokenAuth }}>
                { children }
            </AppContext.Provider>
        </>
    )
}

export default AppContextProvider