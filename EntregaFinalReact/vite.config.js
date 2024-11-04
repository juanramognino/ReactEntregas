import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// PASO 1 -AGREGAR GIT PAGES CON REACT EN JSON : INSTALAR EL NPM INSTALL GH-PAGES --SAVE-DEV
// PASO 2 -JSON   ENTRE "dev" , " build" + "predeploy":"npm run build",
//    "deploy": "gh-pages -d dist",
// PASO 3 -AJUSTAMOS VITE ======>

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
    strictPort: true,
    caseSensitive: false },
})
