import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, User } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import.meta.env

const firebaseConfig = {
  apiKey: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_apiKey,
  authDomain: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_authDomain,
  projectId: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_projectId,
  storageBucket: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_storageBucket,
  messagingSenderId: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_messagingSenderId,
  appId: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_appId,
};

let user: User

const db = initializeApp(firebaseConfig)
const auth = getAuth()

const login = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      user = cred.user
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
}

const signup = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      user = cred.user
    })
    .catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
}

const logout = () => {
  auth.signOut()
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid
  } else {
    auth.signOut()
  }
})

export { auth, login, logout }
export default db
