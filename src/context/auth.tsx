import { onAuthStateChanged, type User } from "firebase/auth";
import { createContext, useEffect, useState, type FC } from "react";
import { auth } from "../firebase/fbconfig";



interface AuthContextType {
    user:User|null,
    isLoading:boolean
}

//create context
export const AuthContext = createContext<AuthContextType>({

    user:null,
    isLoading:false
});

//create provider



interface AuthProviderProps {
    children:React.ReactElement;
}
export const AuthProvider: FC<AuthProviderProps> = ({children}) =>{

    const [user,setUser] = useState<User|null>(null);
    const [isLoading,setIsLoading]  = useState<boolean>(false)


    // useEffect(()=>
    // {

    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //             setUser(user),
    //             setIsLoading(false)

    //     })
    //         return unsubscribe
    // },[])

    const value = {
        user,
        isLoading
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}