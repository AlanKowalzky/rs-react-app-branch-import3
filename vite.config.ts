// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   // base: '/rs-react-app/', // Dodaj tę linię
//   test: {
//     globals: true, // Umożliwia korzystanie z `expect` bez importowania
//     setupFiles: './src/setupTests.ts', // Opcjonalne pliki konfiguracji
//   },
// });
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Umożliwia korzystanie z `expect` bez importowania
    setupFiles: './src/setupTests.ts', // Opcjonalne pliki konfiguracji
  },
});
