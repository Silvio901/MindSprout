# MindSprout – Matemática

**Aprenda matemática jogando!**  
Um app estilo **Duolingo**, mas **100% focado em matemática** — com **corações, streak, quiz com áudio, XP, moedas, leaderboard e login com Google**.

> **Status: 100% FUNCIONAL**  
> **Feito com: React Native, Expo SDK 51, Firebase v10, TypeScript, lucide-react-native**

---

## Tela de Login
![Login](screenshots/login.png)

## Home com Corações & Streak
![Home](screenshots/home.png)

## Quiz de Matemática com Áudio
![Quiz](screenshots/quiz.png)

## Recompensas
![Recompensas](screenshots/rewards.png)

## Perfil com Avatar Evolutivo
![Perfil](screenshots/profile.png)

## Leaderboard Global
![Leaderboard](screenshots/leaderboard.png)

---

## FUNCIONALIDADES MATEMÁTICAS

| Funcionalidade | Status | Descrição |
|----------------|--------|---------|
| Login com Google | Concluído | Firebase Auth |
| Persistência de Login | Concluído | `indexedDBLocalPersistence` + AsyncStorage |
| 3 Corações (vidas) | Concluído | Perde ao errar |
| Streak com fogo | Concluído | +1 dia por login |
| XP + Moedas | Concluído | +20 XP / +10 moedas por acerto |
| Quiz do Backend | Concluído | Firestore + Storage |
| Áudio da equação | Concluído | "Quanto é 5 + 3?" |
| Som de acerto/erro | Concluído | `expo-av` |
| Confetti ao acertar | Concluído | `react-native-confetti-cannon` |
| Recompensas | Concluído | "Mestre da Tabuada" |
| Perfil com avatar | Concluído | Sementinha → Árvore |
| Leaderboard Global | Concluído | Top 10 por XP |
| Tema Escuro Automático | Concluído | Detecta modo do celular |

---

## ESTRUTURA DO PROJETO

<img width="449" height="685" alt="image" src="https://github.com/user-attachments/assets/f9440669-7be0-4155-a8df-0fababddd8e2" />

---

## COMO RODAR (PASSO A PASSO)

### 1. Clone o repositório
git clone https://github.com/seu-usuario/mindsprout-math.git
cd mindsprout-math

### 2. Instale as dependências
npm install

### 3. Instale os pacotes do Expo
npx expo install \
  expo-router \
  expo-status-bar \
  expo-av \
  @react-native-async-storage/async-storage \
  react-native-confetti-cannon \
  lucide-react-native \
  firebase

### 4. Configure o Firebase

1. Crie um projeto no Firebase Console
2. Ative:
   - Authentication → Google
   - Firestore Database
   - Storage
3. Crie a coleção:
   - `math_quiz` (perguntas de matemática)

### 5. Atualize src/services/firebase.ts

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "mindsproutmath.firebaseapp.com",
  projectId: "mindsproutmath",
  storageBucket: "mindsproutmath.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

### 6. Suba os áudios no Firebase Storage
- audio/correct.mp3
- audio/wrong.mp3
- audio/math1.mp3 → "Quanto é 5 + 3?"
- audio/math2.mp3 → "7 × 6?"

### 7. Adicione perguntas no Firestore (`math_quiz` collection)

{
  "question": "5 + 3",
  "options": ["6", "8", "10", "15"],
  "correct": "8",
  "audioUrl": "https://firebasestorage.../math1.mp3",
  "type": "addition"
}

---

## EXEMPLO DE QUIZ NO APP

> **Áudio:** "Quanto é 5 + 3?"  
> **Opções:**  
> ☐ 6  
> ☑ 8  
> ☐ 10  
> ☐ 15  
>  
> **Acerto! +20 XP**  
> **Confetti explode!**

---

## COMANDOS ÚTEIS

| Comando | Descrição |
|--------|---------|
| npx expo start -c | Limpa cache e roda |
| npx expo export   | Build para produção |
| npx expo prebuild | Gera pastas nativas |

---

## PRÓXIMOS PASSOS (FUTURO)

- [ ] 500+ questões (adição, subtração, multiplicação, frações)
- [ ] Níveis por operação
- [ ] Modo "Desafio Infinito"
- [ ] Gráficos de progresso
- [ ] Notificações diárias: "Hora da tabuada!"
- [ ] Publicar na Play Store & App Store

---

## TECNOLOGIAS USADAS

| Tecnologia | Versão |
|----------|--------|
| React Native | 0.74+ |
| Expo SDK     | 51 |
| Firebase     | v10 |
| TypeScript   | 5.x |
| lucide-react-native | Ícones |
| expo-av      | Áudio |
| react-native-confetti-cannon | Efeitos |

---

## AUTORES

**Silvio Domingos da Costa Junior**  
*Desenvolvedor Desenvolvedor Mobile e Full Stack Júnior*

**Natalia Saraiva Cortez**
**

**Alex Leandro Lucacheuski**
**
---

## LICENÇA

**MIT License** – Use, modifique e compartilhe livremente!

---

**MindSprout – Matemática nunca foi tão divertida!**

---

**Pronto para publicar?**  
Rode `npx expo export` → envie para a Play Store!


