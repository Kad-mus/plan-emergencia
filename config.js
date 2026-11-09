// =====================================================================
//  CONFIGURACIÓN DE FIREBASE
//  Pega aquí el bloque "firebaseConfig" de tu proyecto:
//  Consola de Firebase → ⚙️ Configuración del proyecto → Tus apps → Web.
//
//  Estos valores NO son secretos: identifican el proyecto. La seguridad
//  la dan el login y las reglas de Firestore (archivo firestore.rules).
//
//  Mientras FIREBASE_CONFIG sea null, la app funciona en "modo local"
//  (sin login, datos solo en el navegador).
// =====================================================================

window.FIREBASE_CONFIG = null;

/* Ejemplo (sustituye null por algo así):
window.FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "plan-emergencia-xxxxx.firebaseapp.com",
  projectId: "plan-emergencia-xxxxx",
  storageBucket: "plan-emergencia-xxxxx.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:xxxxxxxxxxxx"
};
*/

// Nombre del documento donde se guarda el plan (todos los usuarios comparten este).
window.PLAN_ID = "familia";
