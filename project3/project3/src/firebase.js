import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  authDomain: "ist-363-project.firebaseapp.com",
  projectId: "ist-363-project",
  storageBucket: "ist-363-project.appspot.com",
  appId: "936872806360"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);