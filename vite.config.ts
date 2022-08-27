import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  // const data = await asyncFunction()
  return {
    // vite config
    esbuild: {},
  plugins: [react(), WindiCSS()],
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'
    }
  }
}})
