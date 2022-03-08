import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loadingAuth, setloadingAuth] = useState(false);
    const [loading, setloading] = useState(false);

    useEffect(() => {

        function loadStorage(){
            const storageUser = localStorage.getItem('SistemaUser');

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setloading(false);
            }
            setloading(false);
        }

        loadStorage();
        
    }, []);

    return(
        <AuthContext.Provider value={{ signed: !!user, user, loading }}>
            {children}
        </AuthContext.Provider>
    );
}