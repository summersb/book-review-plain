import {getAuth} from 'firebase/auth'
import {initializeApp} from 'firebase/app'

import.meta.env

const firebaseConfig = {
  apiKey: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_apiKey,
  authDomain: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_authDomain,
  projectId: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_projectId,
  storageBucket: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_storageBucket,
  messagingSenderId: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_messagingSenderId,
  appId: __SNOWPACK_ENV__.SNOWPACK_PUBLIC_appId,
};

const db = initializeApp(firebaseConfig)
const auth = getAuth()

export {auth}
export default db
