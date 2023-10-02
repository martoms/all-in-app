import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import https from 'https';
import fs from 'fs';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.join('C:/Windows/System32/localhost-key.pem')),
      cert: fs.readFileSync(path.join('C:/Windows/System32/localhost.pem')),
    },
  },
});
