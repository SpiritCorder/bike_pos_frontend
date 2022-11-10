import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBSC-Q_KSdUOktTGkIs87Lpb3mEsQWkhac",
  authDomain: "image-galery-37d00.firebaseapp.com",
  projectId: "image-galery-37d00",
  storageBucket: "image-galery-37d00.appspot.com",
  messagingSenderId: "577629186096",
  appId: "1:577629186096:web:ca34a8ac3618008eae25f5"
};


const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);