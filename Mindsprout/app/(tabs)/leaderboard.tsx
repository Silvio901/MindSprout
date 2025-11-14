// app/(tabs)/leaderboard.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { db } from '@/src/services/firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { Trophy } from 'lucide-react-native';

interface LeaderboardUser {
  id: string;
  name: string;
  xp: number;
  level: number;
}

export default function LeaderboardScreen() {
  const [top10, setTop10] = useState<LeaderboardUser[]>([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const q = query(collection(db, 'users'), orderBy('xp', 'desc'), limit(10));
      const snapshot = await getDocs(q);
      const users = snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().displayName || 'Anônimo',
        xp: doc.data().xp || 0,
        level: doc.data().level || 1,
      }));
      setTop10(users);
    };
    fetchLeaderboard();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard Global</Text>
      <FlatList
        data={top10}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text style={styles.rank}>#{index + 1}</Text>
            {index < 3 && <Trophy size={24} color={index === 0 ? '#FFD700' : index === 1 ? '#C0C0C0' : '#CD7F32'} />}
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.xp}>{item.xp} XP</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5fdfc', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#2e7d32', textAlign: 'center', marginVertical: 20 },
  row: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 8, elevation: 2 },
  rank: { fontSize: 20, fontWeight: 'bold', width: 40, color: '#1b5e20' },
  name: { flex: 1, fontSize: 18, color: '#1b5e20', fontWeight: '600' },
  xp: { fontSize: 16, color: '#ff9800', fontWeight: 'bold' },
});