// firebase-config.js

const firebaseConfig = {
 apiKey: "AIzaSyBq6yO3tocrZaoCHrV8H-5Ey18lh3mAETo",
    authDomain: "diario-das-aguas-1.firebaseapp.com",
    projectId: "diario-das-aguas-1",
    storageBucket: "diario-das-aguas-1.firebasestorage.app",
    messagingSenderId: "857490149038",
    appId: "1:857490149038:web:b75de2cb170879662e273f"
  };

try {
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
  window.db = firebase.firestore();

  console.log("[Firebase] OK - projectId:", firebaseConfig.projectId);
} catch (e) {
  console.error("[Firebase] Falha ao inicializar:", e);
}
