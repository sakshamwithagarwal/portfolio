import { defineConfig } from 'vite'
import postcssPresetEnv from 'postcss-preset-env'
import pluginRewriteAll from 'vite-plugin-rewrite-all';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  appType: 'mpa',
  base: '/',
  plugins: [react(), pluginRewriteAll()],
  css: {
    postcss: {
      plugins: [postcssPresetEnv]
    }
  }
})
