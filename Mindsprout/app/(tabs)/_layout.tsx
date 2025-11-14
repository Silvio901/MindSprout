// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { House, Brain, Trophy, User } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#4CAF50' }}>
      <Tabs.Screen name="index"   options={{ title: 'Home',        tabBarIcon: ({color}) => <House color={color} size={28} /> }} />
      <Tabs.Screen name="two"     options={{ title: 'Quiz',        tabBarIcon: ({color}) => <Brain color={color} size={28} /> }} />
      <Tabs.Screen name="rewards" options={{ title: 'Recompensas', tabBarIcon: ({color}) => <Trophy color={color} size={28} /> }} />
      <Tabs.Screen name="profile" options={{ title: 'Perfil',      tabBarIcon: ({color}) => <User color={color} size={28} /> }} />
    </Tabs>
  );
}