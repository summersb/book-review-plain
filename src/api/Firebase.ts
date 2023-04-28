import {getAuth} from 'firebase/auth'
import {initializeApp} from 'firebase/app'
import {
  collection,
  collectionGroup,
  deleteDoc,
  doc,
  DocumentData,
  DocumentReference,
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
  provider: new ReCaptchaV3Provider(import.meta.env.VITE_recaptchaSiteKey),
  isTokenAutoRefreshEnabled: true
})

const db = getFirestore(app);

const getAuthor = (): Promise<QuerySnapshot<DocumentData>> => {
  return getDocs(collection(db, 'Author'))
}
const getAuthorBooks = () => {
  return getDocs(collectionGroup(db, 'Book'))
}

const saveAuthor = (author: Author): Promise<void> => {
  const col = collection(db, 'Author')
  return setDoc(doc(col), {
    ...author
  })
}

const saveBook = (book: Book): Promise<void> => {
  const authorBookCollection = collection(db, `Author/${book.authorId}/Book`)
  return setDoc(doc(authorBookCollection), {
    ...book
  })
}

const deleteBook = (book: DocumentReference<DocumentData>): Promise<void> => {
  return deleteDoc(book)
}

const deleteAuthor = (author: DocumentReference<DocumentData>): Promise<void> => {
  return deleteDoc(author)
}
export {auth, appCheck, getAuthor, getAuthorBooks, saveAuthor, saveBook, deleteBook, deleteAuthor}
export default app
