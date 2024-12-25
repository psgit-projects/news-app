import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
resolve: {
  alias: {
    '@': '/src', // Example alias for src folder
  },
},
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
