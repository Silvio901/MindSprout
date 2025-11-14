// src/context/UserContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth, db } from '@/src/services/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface Progress {
  level: number;
  xp: number;
  coins: number;
  hearts: number;
  streak: number;
  achievements: string[];
}

interface UserContextType {
  user: User | null;
  progress: Progress;
  updateHearts: (change: number) => void;
  addXP: (xp: number, reason: string) => void;
}

const defaultProgress: Progress = {
  level: 1,
  xp: 0,
  coins: 0,
  hearts: 3,
  streak: 0,
  achievements: [],
};

export const UserContext = createContext<UserContextType>({
  user: null,
  progress: defaultProgress,
  updateHearts: () => {},
  addXP: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [progress, setProgress] = useState<Progress>(defaultProgress);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        if (userDoc.exists()) {
          setProgress(userDoc.data() as Progress);
        } else {
          await setDoc(doc(db, 'users', firebaseUser.uid), defaultProgress);
          setProgress(defaultProgress);
        }
      } else {
        setUser(null);
        setProgress(defaultProgress);
      }
    });

    return () => unsubscribe();
  }, []);

  const updateHearts = (change: number) => {
    setProgress(prev => {
      const newHearts = Math.max(0, Math.min(3, prev.hearts + change));
      if (user) {
        setDoc(doc(db, 'users', user.uid), { hearts: newHearts }, { merge: true });
      }
      return { ...prev, hearts: newHearts };
    });
  };

  const addXP = async (xp: number, reason: string) => {
    setProgress(prev => {
      const newXP = prev.xp + xp;
      const newLevel = Math.floor(newXP / 100) + 1;
      const newCoins = prev.coins + Math.floor(xp / 2);
      const updated = { ...prev, xp: newXP, level: newLevel, coins: newCoins };

      if (user) {
        setDoc(doc(db, 'users', user.uid), updated, { merge: true });
      }

      return updated;
    });
  };

  return (
    <UserContext.Provider value={{ user, progress, updateHearts, addXP }}>
      {children}
    </UserContext.Provider>
  );
};