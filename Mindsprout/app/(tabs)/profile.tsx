// app/(tabs)/profile.tsx
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { UserContext } from '@/src/context/UserContext';
import { User, Trophy, Flame } from 'lucide-react-native';

const avatars = [
  require('@/assets/avatar/seed.png'),
  require('@/assets/avatar/sprout.png'),
  require('@/assets/avatar/tree.png'),
];

export default function ProfileScreen() {
  const { user, progress } = useContext(UserContext);
  const avatarIndex = progress.level > 10 ? 2 : progress.level > 5 ? 1 : 0;

  return (
    <View style={styles.container}>
      <Image source={avatars[avatarIndex]} style={styles.avatar} />
      <Text style={styles.name}>{user?.displayName || 'Aluno'}</Text>
      <Text style={styles.email}>{user?.email}</Text>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Trophy size={24} color="#FFD700" />
          <Text style={styles.statText}>{progress.level} Nível</Text>
        </View>
        <View style={styles.stat}>
          <Flame size={24} color="#ff9800" />
          <Text style={styles.statText}>{progress.streak} dia(s)</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5fdfc', alignItems: 'center', padding: 20 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginTop: 40 },
  name: { fontSize: 24, fontWeight: 'bold', color: '#2e7d32', marginTop: 16 },
  email: { fontSize: 16, color: '#666', marginBottom: 30 },
  stats: { flexDirection: 'row', gap: 30 },
  stat: { alignItems: 'center' },
  statText: { fontSize: 16, color: '#1b5e20', marginTop: 8, fontWeight: '600' },
});