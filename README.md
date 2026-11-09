# Plan de Emergencia Familiar

App web para controlar la reserva de emergencia del hogar: despensa con caducidades (FIFO), agua, calorías, gas, utensilios, mochila de 72 h, plan familiar, guías de supervivencia, diario de emergencia y hojas imprimibles para llevar el control en papel.

- **Alojamiento:** GitHub Pages (solo el código; no contiene datos personales).
- **Login y datos:** Firebase Authentication (correo y contraseña) y Firestore. Los datos se sincronizan entre todos los dispositivos de la familia.
- **Sin conexión:** la app se puede instalar en el móvil y abrir sin internet. Los cambios se guardan en el dispositivo y se sincronizan al volver la red.
- **Papel:** pestaña *Imprimir*, con hojas A4 en blanco y negro y casillas para marcar a bolígrafo.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app completa |
| `config.js` | Configuración de Firebase (la rellenas tú) |
| `sw.js` | Permite abrir la app sin conexión |
| `manifest.webmanifest`, `icon-*.png` | Instalación como app en el móvil |
| `firestore.rules` | Plantilla de reglas de seguridad (se pegan en la consola de Firebase) |

---

## Puesta en marcha (unos 15 minutos)

### 1. Subir a GitHub

1. Entra en GitHub con tu cuenta y crea un repositorio nuevo, por ejemplo `plan-emergencia`. Puede ser **público**: el código no contiene datos.
2. Pulsa **Add file → Upload files** y arrastra todos los archivos de esta carpeta **excepto `firestore.rules`** si vas a poner los correos reales en él.
3. En el repo: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. En un minuto estará en `https://TU-USUARIO.github.io/plan-emergencia/`. Sin `config.js` rellenado funciona en *modo local*.

### 2. Crear el proyecto de Firebase (gratis, plan Spark)

1. Ve a <https://console.firebase.google.com> → **Agregar proyecto** → nombre `plan-emergencia` (Analytics no hace falta).
2. **Authentication → Comenzar → Correo electrónico/contraseña → Habilitar**.
3. **Authentication → Usuarios → Agregar usuario**: crea uno por cada persona de casa, con correo y contraseña.
4. **Authentication → Configuración → Dominios autorizados → Agregar dominio**: `TU-USUARIO.github.io`.
5. *(Recomendado)* **Authentication → Configuración → Acciones del usuario**: desmarca *Habilitar la creación (registro)* si aparece la opción, para que nadie pueda darse de alta solo.
6. **Firestore Database → Crear base de datos → modo producción → ubicación `europe-southwest1 (Madrid)`**.
7. **Firestore → Reglas**: pega el contenido de `firestore.rules`, **cambia los correos de ejemplo por los vuestros** y pulsa **Publicar**.

### 3. Conectar la app con Firebase

1. **⚙️ Configuración del proyecto → General → Tus apps → icono `</>` (Web)** → registra la app (no hace falta Hosting).
2. Copia el bloque `firebaseConfig` que aparece.
3. En GitHub abre `config.js` → ✏️ editar → sustituye `window.FIREBASE_CONFIG = null;` por `window.FIREBASE_CONFIG = { …lo que copiaste… };` → **Commit changes**.

### 4. Primer uso

1. Abre `https://TU-USUARIO.github.io/plan-emergencia/` y entra con tu usuario.
2. La primera vez se crea el plan con los datos de ejemplo. Si ya tenías datos en otra versión, ve a **Copias → Importar datos** y carga el JSON exportado.
3. **Instalar en el móvil:** en Android/Chrome, menú ⋮ → *Añadir a pantalla de inicio*; en iPhone/Safari, Compartir → *Añadir a pantalla de inicio*.

---

## Seguridad

- La configuración de `config.js` **no es secreta**; la protección la dan el login y las reglas de Firestore, que solo dejan entrar a los correos de la lista.
- No subas al repositorio público el `firestore.rules` con correos reales.
- Para dar de baja a alguien: quítalo de las reglas y bórralo en *Authentication → Usuarios*.
- *Salir* cierra la sesión del dispositivo. Hazlo en dispositivos que no sean tuyos.

## Funcionamiento sin conexión

- Hay que haber abierto la app con internet al menos una vez en ese dispositivo y haber iniciado sesión.
- Sin red verás *📴 Sin conexión*. Puedes seguir trabajando y todo se sincroniza al volver la conexión.
- Para máxima resiliencia: **Copias → Descargar app offline** (un solo HTML que funciona en cualquier navegador, incluso desde un pendrive) y **Imprimir** el plan completo después de cada revisión.

## Actualizar la app

Sustituye `index.html` en el repositorio. Los dispositivos recogerán la versión nueva la próxima vez que abran la app con conexión. Si cambias `sw.js`, sube el número de `CACHE` (`plan-emergencia-v2`, …).
