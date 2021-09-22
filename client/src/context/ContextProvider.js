import { createContext, useState } from "react"

export const LoginContext = createContext(null);

const ContextProvider = ({ children })=>{
    const [loginAccount, setLoginAccount] = useState('');

    return(
        <LoginContext.Provider 
            value= {{ loginAccount, setLoginAccount }}
        >
            { children }
        </LoginContext.Provider>
    )
}

export default ContextProvider;