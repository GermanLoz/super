import {useContext} from 'react'
import {AuthContext} from '../context/auth.jsx'

export default function useAuth() {
    const contextValue = useContext(AuthContext);
    return contextValue
}
