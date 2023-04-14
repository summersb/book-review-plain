import {getAuth} from 'firebase/auth'
import {initializeApp} from 'firebase/app'
import {
  collection,
  collectionGroup,
  doc,
  DocumentData,
  getDocs,
  getFirestore,
  QuerySnapshot,
  setDoc
} from "firebase/firestore"
import type {Author, Book} from "../type"

import {initializeAppCheck, ReCaptchaV3Provider} from 'firebase/app-check'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

const app = initializeApp(firebaseConfig)
const auth = getAuth()

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Lc2-IElAAAAAIdvORsqWdBkYkOxQxo_1cT9O0Op'),
  isTokenAutoRefreshEnabled: true
})

const db = getFirestore(app);

const getAuthor = (): Promise<QuerySnapshot<DocumentData>> => {
  return getDocs(collection(db, 'Author'))
}
const getAuthorBooks = () => {
  return getDocs(collectionGroup(db, 'Book'))
}

const saveAuthor = (author: Author) => {
  const col = collection(db, 'Author')
  setDoc(doc(col), {
    ...author
  })
}

const saveBook = (book: Book) => {
  const authorBookCollection = collection(db, `Author/${book.authorId}/Book`)
  setDoc(doc(authorBookCollection), {
    ...book
  })
}

export {auth, appCheck, getAuthor, getAuthorBooks, saveAuthor, saveBook}
export default app
