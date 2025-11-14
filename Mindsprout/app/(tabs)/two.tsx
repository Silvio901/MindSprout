// app/(tabs)/two.tsx
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { UserContext } from '@/src/context/UserContext';
import { Link } from 'expo-router';
import { Volume2, Heart } from 'lucide-react-native';
import { Audio } from 'expo-av';
import ConfettiCannon from 'react-native-confetti-cannon';
import { getRandomQuiz } from '@/src/services/quiz';

export default function QuizScreen() {
  const [question, setQuestion] = useState<any>(null);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [confetti, setConfetti] = useState<any>(null);
  const { updateHearts, addXP, progress } = useContext(UserContext);

  useEffect(() => {
    loadQuestion();
  }, []);

  const loadQuestion = async () => {
    const q = await getRandomQuiz();
    setQuestion(q);
    setAnswer('');
    setFeedback('');
  };

  const playAudio = async () => {
    if (question?.audioUrl) {
      try {
        const { sound } = await Audio.Sound.createAsync({ uri: question.audioUrl });
        await sound.playAsync();
        setTimeout(() => sound.unloadAsync(), 3000);
      } catch (error) {
        console.log('Erro no áudio:', error);
      }
    }
  };

  const checkAnswer = () => {
    if (answer.trim().toLowerCase() === question.correct.toLowerCase()) {
      setFeedback('ACERTOU! +20 XP');
      addXP(20, 'Quiz correto');
      confetti?.start();
      setTimeout(loadQuestion, 2000);
    } else {
      setFeedback(`Errado! Era: "${question.correct}"`);
      updateHearts(-1);
    }
  };

  if (!question) return <Text style={styles.loading}>Carregando...</Text>;

  return (
    <View style={styles.container}>
      <ConfettiCannon
        count={80}
        origin={{ x: -10, y: 0 }}
        autoStart={false}
        ref={setConfetti}
        fadeOut
      />

      <Text style={styles.title}>Monte a frase:</Text>

      <TouchableOpacity style={styles.audioBtn} onPress={playAudio}>
        <Volume2 size={32} color="#4CAF50" />
        <Text style={styles.audioText}>Tocar áudio</Text>
      </TouchableOpacity>

      <Text style={styles.question}>{question.scrambled.join('   ')}</Text>

      <TextInput
        style={styles.input}
        placeholder="sua resposta..."
        value={answer}
        onChangeText={setAnswer}
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.btn} onPress={checkAnswer}>
        <Text style={styles.btnText}>VERIFICAR</Text>
      </TouchableOpacity>

      {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}

      <View style={styles.hearts}>
        {[1, 2, 3].map((i) => (
          <Heart
            key={i}
            size={28}
            color={i <= progress.hearts ? '#e91e63' : '#ccc'}
            fill={i <= progress.hearts ? '#e91e63' : 'none'}
          />
        ))}
      </View>

      <Link href="/" asChild>
        <TouchableOpacity style={styles.back}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

// ESTILOS OBRIGATÓRIOS (COLOQUE NO FINAL!)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  loading: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2e7d32',
  },
  audioBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },
  audioText: {
    fontSize: 18,
    color: '#4CAF50',
    fontWeight: '600',
  },
  question: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: '600',
  },
  input: {
    borderWidth: 2,
    borderColor: '#4CAF50',
    padding: 16,
    borderRadius: 12,
    fontSize: 18,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#4CAF50',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  feedback: {
    marginVertical: 25,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  hearts: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 20,
  },
  back: {
    marginTop: 30,
    backgroundColor: '#2196F3',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  backText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});