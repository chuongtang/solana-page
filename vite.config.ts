import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {},
  define: {
    global: {},
    process: {
      'env': {}
    } 
  },
  plugins: [react(), WindiCSS()],
  optimizeDeps:{
    esbuildOptions:{
      target: 'es2020'
    }
  }
})
