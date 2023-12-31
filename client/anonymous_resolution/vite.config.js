import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{proxy:{
    '/api':'https://resoluxe.onrender.com/',
    changeOrigin: true,
    secure: false,
    ws: true,
    rewrite: (path) => path.replace(/^\/api/, ""),
  },
  host: true,
  port : 3000,
},
  plugins: [react()],
})
