import React, { type FC } from 'react'
import { useAuth } from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';



interface PublicRoutesProps{
    children:React.ReactElement;
}
const PublicRoutes: FC<PublicRoutesProps>=({children}) =>{


    const {user} = useAuth();
    // const user="RAJ";
    if(user)
    {
        return <Navigate to="/" replace={true}/>
    }
    return children
}

export default PublicRoutes