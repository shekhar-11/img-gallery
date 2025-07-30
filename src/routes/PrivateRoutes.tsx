

import React, { type FC } from 'react'
import { useAuth } from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';


interface PrivateRouteProps{
    children:React.ReactElement,
}

const PrivateRoutes: FC<PrivateRouteProps> = ({children}) => {
    
    const {user} = useAuth() ;
    
    
    if(!user){
        return <Navigate to='/signup' replace={true}/>
    }
    return children;

}

export default PrivateRoutes