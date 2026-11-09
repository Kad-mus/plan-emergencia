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

window.FIREBASE_CONFIG = { apiKey: "AIzaSyDnL6_wc4WvNB6JUaxiX-c-5ixqoVP_ci8", authDomain: "plan-emergencia-bd4ec.firebaseapp.com", projectId: "plan-emergencia-bd4ec", messagingSenderId: "974286640360", appId: "1:974286640360:web:aabdb3587c41bddea5a55d" };

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
