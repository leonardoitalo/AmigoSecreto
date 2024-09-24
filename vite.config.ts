import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom', // Isso configura o ambiente para suportar o DOM
    globals: true, // Torna `expect`, `describe`, etc., disponíveis globalmente
    setupFiles: './src/setupTests.ts',
  },
})
