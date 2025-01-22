import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/auth': {
          target: env.VITE_FIREBASE_FUNCTIONS_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/auth/, ''),
        },
        '/user': {
          target: env.VITE_FIREBASE_FUNCTIONS_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/user/, ''),
        },
        '/vertex-claude': {
          target: env.VITE_FIREBASE_FUNCTIONS_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/vertex-claude/, '/api/vertex-claude'),
        },
        '/question-reading': {
          target: env.VITE_FIREBASE_FUNCTIONS_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/question-reading/, ''),
        },
      },
    },
  };
});
