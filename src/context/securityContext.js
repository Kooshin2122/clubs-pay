import { createContext, useContext, useEffect, useState } from 'react'

const SecuritContext = createContext();


const SecurityProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const page = children;


    useEffect(() => {
        // TODO request user by using cookies token.


    }, [])

    if (loading) {
        // Todo loading component
        return null;
    }

    if (!user) {
        // Todo assing page in to login page

    }

    return <SecuritContext.Provider value={{ setUser, user }}>
        {page}
    </SecuritContext.Provider>
}

export const useSecurity = () => {
    return useContext(SecuritContext)
}

export default SecurityProvider; s