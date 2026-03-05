import React, { createContext, useState } from 'react'
import { useFormState } from 'react-dom';
export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {

     const [userToken , setuserToken] = useState(null);

    function setUserAuthToken(tkn){
        setuserToken(tkn);

        ;
    }

    // console.log('Token' , userToken);
    

    return (
        <>
        <AuthContext.Provider value={{ userToken , setUserAuthToken }}>
            {children}
        </AuthContext.Provider>
        </>
    )
}
