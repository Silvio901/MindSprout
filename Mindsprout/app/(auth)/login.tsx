// app/(auth)/login.tsx
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { UserContext } from '@/src/context/UserContext';  // ← CORRETO
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/src/services/firebase';          // ← CORRETO
import { Link } from 'expo-router';

const provider = new GoogleAuthProvider();

export default function LoginScreen() {
  const { user } = useContext(UserContext);

  const signIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      alert('Erro ao fazer login. Tente novamente.');
    }
  };

  if (user) {
    return <Link href="/(tabs)" style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require('@/assets/logo.jpg')}  // ← CORRETO
        style={styles.logo} 
        resizeMode="contain"
      />
      <Text style={styles.title}>MindSprout</Text>
      <Text style={styles.subtitle}>Aprenda jogando!</Text>

      <TouchableOpacity style={styles.googleBtn} onPress={signIn}>
        <Text style={styles.googleText}>Continuar com Google</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>By Junior & Grok</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#4CAF50', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20 
  },
  logo: { 
    width: 120, 
    height: 120, 
    marginBottom: 20 
  },
  title: { 
    fontSize: 42, 
    fontWeight: 'bold', 
    color: '#fff', 
    marginBottom: 10 
  },
  subtitle: { 
    fontSize: 18, 
    color: '#e8f5e8', 
    marginBottom: 50 
  },
  googleBtn: { 
    backgroundColor: '#fff', 
    padding: 16, 
    borderRadius: 12, 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 12 
  },
  googleText: { 
    color: '#000', 
    fontSize: 18, 
    fontWeight: '600' 
  },
  footer: { 
    position: 'absolute', 
    bottom: 30, 
    color: '#e8f5e8', 
    fontSize: 12 
  },
});