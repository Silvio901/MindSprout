// app/_layout.tsx
import { Stack } from 'expo-router';
import { UserProvider } from '@/src/context/UserContext';

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </UserProvider>
  );
}