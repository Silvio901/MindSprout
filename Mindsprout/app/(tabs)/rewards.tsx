// app/(tabs)/rewards.tsx
import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { UserContext } from '@/src/context/UserContext';
import { Trophy, Star, Zap, Flame } from 'lucide-react-native';

const achievements = [
  { id: '1', title: 'Primeira Vitória', icon: Trophy, xp: 50, unlocked: true },
  { id: '2', title: 'Streak de 3 dias', icon: Flame, xp: 100, unlocked: false },
  { id: '3', title: '100 XP', icon: Star, xp: 100, unlocked: false },
  { id: '4', title: 'Mestre do Quiz', icon: Zap, xp: 500, unlocked: false },
];

export default function RewardsScreen() {
  const { progress } = useContext(UserContext);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Conquistas</Text>
      {achievements.map((ach) => {
        const isUnlocked = progress.achievements.includes(ach.title) || ach.unlocked;
        return (
          <View key={ach.id} style={[styles.card, !isUnlocked && styles.locked]}>
            <ach.icon size={40} color={isUnlocked ? '#FFD700' : '#666'} />
            <View style={styles.info}>
              <Text style={[styles.achTitle, !isUnlocked && styles.lockedText]}>
                {ach.title}
              </Text>
              <Text style={styles.xp}>+{ach.xp} XP</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5fdfc', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#2e7d32', textAlign: 'center', marginVertical: 20 },
  card: { flexDirection: 'row', backgroundColor: '#fff', padding: 16, borderRadius: 16, marginBottom: 12, elevation: 3, alignItems: 'center' },
  locked: { opacity: 0.5 },
  info: { marginLeft: 16, flex: 1 },
  achTitle: { fontSize: 18, fontWeight: '600', color: '#1b5e20' },
  lockedText: { color: '#666' },
  xp: { fontSize: 14, color: '#ff9800', fontWeight: '600' },
});