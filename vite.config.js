import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Parcial-I/',//nombre del repositorio en git hub
  plugins: [vue()],
})
