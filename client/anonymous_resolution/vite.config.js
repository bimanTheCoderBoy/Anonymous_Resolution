import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
//   server:{proxy:{
//     '/api':'https://resoluxe.onrender.com',
//     changeOrigin: true,
//     secure: false,
//   },
//   host: true,
//   port : 3000,
// },
  plugins: [react()],
})
