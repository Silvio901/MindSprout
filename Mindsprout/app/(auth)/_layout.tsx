// app/(auth)/_layout.tsx
import { Stack } from 'expo-router';
import { useContext } from 'react';
import { UserContext } from '@/src/context/UserContext';
import { Redirect } from 'expo-router';

export default function AuthLayout() {
  const { user } = useContext(UserContext);

  if (user) {
    return <Redirect href="/(tabs)" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
    </Stack>
  );
}