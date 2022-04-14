import { mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import baseConig from './vite.config.base';

export default mergeConfig(
  {
    mode: 'development',
    server: {
      open: true,
      fs: {
        strict: true,
      },
      host: '0.0.0.0',
      proxy: {
        '/api/sso': {
          target: 'http://login-dev.digitforce.com',
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/api/ums': {
          target: 'http://login-dev.digitforce.com',
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/api/metadatax': {
          target: 'http://bigdata-server-04:8090',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/metadatax/, ''),
        },
      },
    },
    plugins: [
      eslint({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        exclude: ['node_modules'],
      }),
    ],
  },
  baseConig
);
