// src/services/quiz.ts
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export interface QuizQuestion {
  id: string;
  phrase: string;
  scrambled: string[];
  audioUrl: string;
  correct: string;
}

export const getRandomQuiz = async (): Promise<QuizQuestion> => {
  const snapshot = await getDocs(collection(db, 'quiz'));
  const questions = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as QuizQuestion));
  return questions[Math.floor(Math.random() * questions.length)];
};