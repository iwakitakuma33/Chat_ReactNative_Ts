
import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: "xxxxx",
	authDomain: "xxx",
	projectId: "xxx",
	storageBucket: "xxxx",
	messagingSenderId: "xxxx",
	appId: "xxxx"
  };

if (!Firebase.apps.length) {
  Firebase.initializeApp(firebaseConfig);
}

const auth = Firebase.auth();
const db = Firebase.firestore()
export {db, auth};