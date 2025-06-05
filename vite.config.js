import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'd072-106-51-88-137.ngrok-free.app',
      'localhost',
      '127.0.0.1'
    ],
    host: true // This allows connections from all hosts
  }
})
