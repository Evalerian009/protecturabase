import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command, mode }) => {
  const plugins = [
    react(),
    tailwindcss(),
  ]

  if (command === 'serve') {
    return {
      plugins,
      server: {
        port: 5173, // Optional: Customize dev server port
      },
    }
  } else {
    return {
      plugins,
      base: './', // Important for Namecheap hosting
      build: {
        outDir: 'dist',
        rollupOptions: {
          output: {
            manualChunks: undefined,
          },
        },
      },
    }
  }
})