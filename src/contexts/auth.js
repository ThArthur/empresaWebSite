import { useState, createContext, useEffect } from "react";
import firebase from '../services/firebaseConnection';
import { toast } from "react-toastify";
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


    //Fazer login
    async function singIn(email, password){
        setloadingAuth(true);
        await firebase.auth().signInWithEmailAndPassword(email, password).then(async (value) => {
            let uid = value.user.uid;
            const userProfile = await firebase.firestore().collection('users').doc(uid).get();

            let data = {
                uid: uid,
                nome: userProfile.data().nome,
                avatarUrl: userProfile.data().avatarUrl,
                email: value.user.email
            };

            setUser(data);
            storageUser(data);
            setloadingAuth(false);
            toast.success('Welcome back!');

        }).catch((error) => {
            console.log(error);
            toast.error('Error! Something went wrong');
            setloadingAuth(false);
        })
    }

    //Criar usuário
    async function signUp(email, password, nome){

        setloadingAuth(true);

        await firebase.auth().createUserWithEmailAndPassword(email, password).then(async (value) => {
            let uid = value.user.uid;

            await firebase.firestore().collection('users').doc(uid).set({
                nome: nome,
                avatarUrl: null,
            }).then( () => {

                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                    avatarUrl: null
                };

                setUser(data);
                storageUser(data);
                setloadingAuth(false);
                toast.success('Welcome!');

            })
        }).catch((error) => {
            console.log(error);
            toast.error('Error! Something went wrong');
            setloadingAuth(false);
        })
    }

    function storageUser(data){
        localStorage.setItem('SistemaUser', JSON.stringify(data));
    }

    async function signOut(){
        await firebase.auth().signOut();
        localStorage.removeItem('SistemaUser');
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, loading, signUp, signOut, singIn, setUser, storageUser }}>
            {children}
        </AuthContext.Provider>
    );
}