// app/(tabs)/index.tsx
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserContext } from '@/src/context/UserContext';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const { progress } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao MindSprout! 🌱</Text>
      
      <View style={styles.stats}>
        <Text style={styles.stat}>Nível {progress.level}</Text>
        <Text style={styles.stat}>XP: {progress.xp}</Text>
        <Text style={styles.stat}>Moedas: {progress.coins}</Text>
      </View>

      <View style={styles.buttons}>
        <Link href="/two" style={styles.btn}>
          <Text style={styles.btnText}>Iniciar Quiz</Text>
        </Link>
        <Link href="/rewards" style={styles.btn}>
          <Text style={styles.btnText}>Ver Recompensas</Text>
        </Link>
        <Link href="/profile" style={[styles.btn, styles.profileBtn]}>
          <Text style={styles.btnText}>Meu Perfil</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fff8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 30,
  },
  stats: {
    backgroundColor: '#e8f5e8',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 40,
    elevation: 3,
  },
  stat: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1b5e20',
    marginVertical: 4,
  },
  buttons: {
    width: '100%',
    gap: 16,
  },
  btn: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  profileBtn: {
    backgroundColor: '#1976d2',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});