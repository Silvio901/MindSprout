import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { indexedDBLocalPersistence } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD1wILQw4973Nx-Sfxx0IPYfwK1RBFAKk",
  authDomain: "mindsproutpro.firebaseapp.com",
  projectId: "mindsproutpro",
  storageBucket: "mindsproutpro.firebasestorage.app",
  messagingSenderId: "752708777834",
  appId: "1:752708777834:web:b43d7b3a7d16b07d7e1713"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// AUTH COM PERSISTÊNCIA (FUNCIONA NO EXPO!)
export const auth = initializeAuth(app, {
  persistence: indexedDBLocalPersistence // ← FUNCIONA COM AsyncStorage
});

export const db = getFirestore(app);