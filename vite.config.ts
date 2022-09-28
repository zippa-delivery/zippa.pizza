import path from 'path';
import type { UserConfig } from 'vite';

const resolvePage = (page: string) =>
  path.resolve(__dirname, `src/pages/${page}/index.html`);

export default {
  appType: 'mpa',
  root: path.resolve(__dirname, 'src', 'pages'),
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolvePage(''),
        business: resolvePage('business'),
        privacy: resolvePage('privacy'),
        signInError: resolvePage('sign-in-error'),
        signInSuccess: resolvePage('sign-in-success'),
      },
    },
  },
  server: { open: true },
} as UserConfig;
