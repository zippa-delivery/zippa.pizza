import path from 'path';
import type { Plugin, UserConfig, ViteDevServer } from 'vite';

const pages = {
  main: '',
  business: 'business',
  privacy: 'privacy',
  signInError: 'sign-in-error',
  signInSuccess: 'sign-in-success',
} as const;

const resolvePage = (page: string) =>
  path.resolve(__dirname, `src/pages/${page}/index.html`);

const IndexHtmlPlugin: Plugin = {
  name: 'index-html',
  apply: ({ mode }) => mode === 'development',
  configureServer: (server: ViteDevServer) => {
    Object
      .entries(pages)
      .map(([name, path]) => {
        server.middlewares.use((req, res, next) => {
          if (req.url === `/${path}`) {
            req.url += '/index.html';
          }

          next()
        });
      });
  }
};

export default {
  appType: 'mpa',
  root: path.resolve(__dirname, 'src', 'pages'),
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: Object
        .entries(pages)
        .map(([name, path]) => ({ [name]: resolvePage(path) }))
        .reduce((prev, curr) => ({ ...prev, ...curr }), {}),
    },
  },
  server: { open: true },
  plugins: [IndexHtmlPlugin],
} as UserConfig;
