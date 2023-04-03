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
} from "firebase/firestore";
import type {Author, Book} from "../type";

import.meta.env

const firebaseConfig = {
  apiKey: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_apiKey,
  authDomain: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_authDomain,
  projectId: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_projectId,
  storageBucket: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_storageBucket,
  messagingSenderId: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_messagingSenderId,
  appId: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_appId,
};

const app = initializeApp(firebaseConfig)
const auth = getAuth()

const db = getFirestore(app);

const getBookList = () => {
  return getDocs(collection(db, 'Book'))
}

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
  console.log("Book", book);
  const authorBookCollection = collection(db, `Author/${book.authorId}/Book`)
  setDoc(doc(authorBookCollection), {
    ...book
  })
}

// const docRef = doc(db, 'Book')
// const doc = await getDoc(docRef)

export {auth, getBookList, getAuthor, getAuthorBooks, saveAuthor, saveBook}
export default app
