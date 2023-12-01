import { initializeApp } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'
import { firebaseConfig } from './config'

const app = initializeApp(firebaseConfig)

export const auth: Auth = getAuth(app)
