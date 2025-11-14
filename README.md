# MindSprout

**Aprenda português jogando!**  
Um app estilo **Duolingo** com **corações, streak, quiz com áudio, XP, moedas, leaderboard e login com Google** — tudo com **Firebase + React Native + Expo Router**.

> **Status: 100% FUNCIONAL**  
> **Feito com: React Native, Expo SDK 54, Firebase v10, TypeScript, lucide-react-native**

---

## Tela de Login
![Login](screenshots/login.png)

## Home com Corações & Streak
![Home](screenshots/home.png)

## Quiz com Áudio + Confetti
![Quiz](screenshots/quiz.png)

## Recompensas
![Recompensas](screenshots/rewards.png)

## Perfil com Avatar Evolutivo
![Perfil](screenshots/profile.png)

## Leaderboard Global
![Leaderboard](screenshots/leaderboard.png)

---

## FUNCIONALIDADES

| Funcionalidade | Status | Descrição |
|----------------|--------|---------|
| Login com Google | Concluído | Firebase Auth |
| Persistência de Login | Concluído | `indexedDBLocalPersistence` + AsyncStorage |
| 3 Corações (vidas) | Concluído | Perde ao errar |
| Streak com fogo | Concluído | +1 dia por login |
| XP + Moedas | Concluído | +20 XP / +10 moedas por acerto |
| Quiz do Backend | Concluído | Firestore + Storage |
| Áudio da frase | Concluído | Firebase Storage |
| Som de acerto/erro | Concluído | `expo-av` |
| Confetti ao acertar | Concluído | `react-native-confetti-cannon` |
| Recompensas | Concluído | Conquistas desbloqueadas |
| Perfil com avatar | Concluído | Evolui com nível |
| Leaderboard Global | Concluído | Top 10 por XP |
| Tema Escuro Automático | Concluído | Detecta modo do celular |

---

## ESTRUTURA DO PROJETO
MindSprout/
├── app/
│   ├── _layout.tsx
│   ├── (auth)/
│   │   ├── _layout.tsx
│   │   └── login.tsx
│   └── (tabs)/
│       ├── _layout.tsx
│       ├── index.tsx         → Home
│       ├── two.tsx           → Quiz
│       ├── rewards.tsx       → Conquistas
│       ├── profile.tsx       → Perfil
│       └── leaderboard.tsx   → Ranking
├── assets/
│   ├── logo.png
│   ├── audio/
│   │   ├── correct.mp3
│   │   ├── wrong.mp3
│   │   └── phrase.mp3
│   └── avatar/
│       ├── seed.png
│       ├── sprout.png
│       └── tree.png
├── src/
│   ├── context/
│   │   └── UserContext.tsx
│   ├── services/
│   │   ├── firebase.ts
│   │   └── quiz.ts
│   └── components/
├── .gitignore
├── app.json
├── package.json
├── tsconfig.json
└── README.md


---

## COMO RODAR (PASSO A PASSO)

### 1. Clone o repositório
```bash
git clone https://github.com/silvio901/mindsprout-pro.git
cd mindsprout

2. Instale as dependências
    npm install

3. Instale os pacotes do Expo
  expo install \
  expo-router \
  expo-status-bar \
  expo-av \
  @react-native-async-storage/async-storage \
  react-native-confetti-cannon \
  lucide-react-native \
  firebase

4. Configure o Firebase

Crie um projeto no Firebase Console
Ative:
Authentication → Google
Firestore Database
Storage

Crie as coleções:
users (para progresso)
quiz (para perguntas)


5. Atualize src/services/firebase.ts

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "mindsproutpro.firebaseapp.com",
  projectId: "mindsproutpro",
  storageBucket: "mindsproutpro.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

6. Suba os áudios no Firebase Storage

audio/correct.mp3
audio/wrong.mp3
audio/phrase1.mp3, phrase2.mp3, etc.

7. Adicione perguntas no Firestore (quiz collection)

{
  "phrase": "o gato mia",
  "scrambled": ["gato", "o", "mia"],
  "correct": "o gato mia",
  "audioUrl": "https://firebasestorage.../phrase1.mp3"
}
8. Rode o app
npx expo start -c

COMANDOS ÚTEIS

Comando,Descrição
npx expo start -c, Limpa cache e roda
npx expo export,Build para produção
npx expo prebuild,Gera pastas nativas


PRÓXIMOS PASSOS (FUTURO)

    100+ frases com áudio real
    Missões diárias
    Loja com moedas
    Push notifications
    Publicar App Store
    Multi-idioma (inglês, espanhol)


TECNOLOGIAS USADAS

Tecnologia, Versão
React Native,0.74+
Expo SDK,51
Firebase, v10
TypeScript, 5.x
lucide-react-native, Ícones
expo-av, Áudio
react-native-confetti-cannon, Efeitos

AUTOR
Silvio Domingos da Costa Junior
Desenvolvedor Mobile e Full Stack Júnior

Natalia Saraiva Cortez


Alex Leandro Lucacheuski


LICENÇA
MIT License – Use, modifique e compartilhe livremente!

MindSprout – O app que transforma aprendizado em jogo!