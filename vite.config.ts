import { AliasOptions, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import path from 'path';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
const root = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': root,
    } as AliasOptions,
  },
});
