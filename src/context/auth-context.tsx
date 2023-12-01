import { auth } from '@/lib/firebase'
import {
    UserCredential,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { FC, ReactNode, createContext, useEffect, useState } from 'react'

interface AuthContextProps {
    user: User | null
    signUp: (email: string, password: string) => Promise<void>
    signIn: (email: string, password: string) => Promise<void>
    singOut: () => Promise<void>
}

interface User {
    uid: string
    displayName?: string
    email: string
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        // CHECK IF THERE IS A USER IN LOCALSTORAGE
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }

        // SETUP A LISTENER TO UPDATE THE USER STATE WHEN AUTHENTICATION STATE CHANGES
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                const newUser: User = {
                    uid: authUser.uid,
                    email: authUser.email || '',
                }
                setUser(newUser)
                localStorage.setItem('user', JSON.stringify(newUser))
            } else {
                setUser(null)
                localStorage.removeItem('user')
            }
        })

        return () => unsubscribe()
    }, [])

    // SIGNUP WITH EMAIL AND PASSWORD
    const signUp = async (email: string, password: string): Promise<void> => {
        const userCredential: UserCredential =
            await createUserWithEmailAndPassword(auth, email, password)

        const newUser: User = {
            uid: userCredential.user.uid,
            email: userCredential.user.email || '',
        }
        setUser(newUser)
        localStorage.setItem('user', JSON.stringify(newUser))
    }

    // SIGN IN WITH EMAIL AND PASSWORD
    const signIn = async (email: string, password: string): Promise<void> => {
        const userCredential: UserCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        )
    }
}
