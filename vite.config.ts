import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
        allowedHosts: true,
      },
      plugins: [
        react(),
        {
          name: 'avatar-uploader',
          configureServer(server) {
            server.middlewares.use('/api/upload-avatar', (req, res) => {
              if (req.method === 'POST') {
                const chunks: any[] = [];
                req.on('data', chunk => chunks.push(chunk));
                req.on('end', () => {
                  try {
                    const body = JSON.parse(Buffer.concat(chunks).toString());
                    const base64Data = body.image.replace(/^data:image\/\w+;base64,/, '');
                    const imgBuffer = Buffer.from(base64Data, 'base64');
                    fs.writeFileSync(path.resolve(__dirname, 'public/assets/img/profile.jpg'), imgBuffer);
                    fs.writeFileSync(path.resolve(__dirname, 'public/assets/img/samuel_presentation.jpg'), imgBuffer);
                    fs.writeFileSync(path.resolve(__dirname, 'public/assets/img/samuel_profile.jpg'), imgBuffer);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: true, url: '/assets/img/profile.jpg' }));
                  } catch (e) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: String(e) }));
                  }
                });
              } else {
                res.writeHead(405).end();
              }
            });
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
