// app/(tabs)/index.tsx
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { UserContext } from '@/src/context/UserContext';
import { Link } from 'expo-router';
import { Heart, Flame, Brain, Trophy, User } from 'lucide-react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

export default function HomeScreen() {
  const { progress } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <ConfettiCannon count={50} origin={{ x: -10, y: 0 }} fadeOut />

      <Text style={styles.title}>MindSprout</Text>

      <View style={styles.statsCard}>
        <Text style={styles.level}>Nível {progress.level}</Text>
        <Text style={styles.xp}>XP: {progress.xp}</Text>
        <Text style={styles.coins}>Moedas: {progress.coins}</Text>

        <View style={styles.hearts}>
          {[1, 2, 3].map((i) => (
            <Heart
              key={i}
              size={32}
              color={i <= progress.hearts ? '#e91e63' : '#ccc'}
              fill={i <= progress.hearts ? '#e91e63' : 'none'}
            />
          ))}
        </View>

        <View style={styles.streak}>
          <Flame size={28} color="#ff9800" fill="#ff9800" />
          <Text style={styles.streakText}>{progress.streak} dia{progress.streak > 1 ? 's' : ''}</Text>
        </View>
      </View>

      <View style={styles.buttons}>
        <Link href="/two" asChild>
          <TouchableOpacity style={styles.btn}>
            <Brain size={24} color="#fff" />
            <Text style={styles.btnText}>Iniciar Quiz</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/rewards" asChild>
          <TouchableOpacity style={styles.btn}>
            <Trophy size={24} color="#fff" />
            <Text style={styles.btnText}>Recompensas</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/profile" asChild>
          <TouchableOpacity style={[styles.btn, styles.profileBtn]}>
            <User size={24} color="#fff" />
            <Text style={styles.btnText}>Perfil</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5fdfc', alignItems: 'center', padding: 20 },
  title: { fontSize: 36, fontWeight: 'bold', color: '#2e7d32', marginTop: 40, marginBottom: 20 },
  statsCard: { backgroundColor: '#e8f5e8', padding: 25, borderRadius: 20, alignItems: 'center', width: '100%', elevation: 5 },
  level: { fontSize: 32, fontWeight: '900', color: '#1b5e20' },
  xp: { fontSize: 18, color: '#1b5e20', marginVertical: 5 },
  coins: { fontSize: 18, color: '#ff9800', fontWeight: '600' },
  hearts: { flexDirection: 'row', gap: 8, marginVertical: 15 },
  streak: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 10 },
  streakText: { fontSize: 20, fontWeight: 'bold', color: '#ff9800' },
  buttons: { width: '100%', gap: 16, marginTop: 30 },
  btn: { backgroundColor: '#4caf50', padding: 18, borderRadius: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 },
  profileBtn: { backgroundColor: '#1976d2' },
  btnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});