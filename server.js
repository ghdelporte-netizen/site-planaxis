// ==========================================================================
// SERVEUR WEB OFFICIEL PLANAXIS · GLAND (SUISSE)
// Port : 3001 (http://localhost:3001)
// ==========================================================================

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { renderHomePage } from './src/pages/HomePage.js';
import { renderCentrePage } from './src/pages/CentrePage.js';
import { renderPrestationsPage } from './src/pages/PrestationsPage.js';
import { renderMedecinsPage } from './src/pages/MedecinsPage.js';
import { renderRendezVousPage } from './src/pages/RendezVousPage.js';
import { renderContactAccesPage } from './src/pages/ContactAccesPage.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3001;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff'
};

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost:3001'}`);
  const pathname = urlObj.pathname;

  // 1. Routes HTML de l'application Planaxis
  if (pathname === '/' || pathname === '/index.html' || pathname === '/accueil') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(renderHomePage());
    return;
  }

  if (pathname === '/centre' || pathname === '/centre.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(renderCentrePage());
    return;
  }

  if (pathname === '/prestations' || pathname === '/prestations.html' || pathname === '/specialites') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(renderPrestationsPage());
    return;
  }

  if (pathname === '/medecins' || pathname === '/medecins.html' || pathname === '/equipe') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(renderMedecinsPage());
    return;
  }

  if (pathname === '/rendez-vous' || pathname === '/rendez-vous.html' || pathname === '/rdv') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(renderRendezVousPage());
    return;
  }

  if (pathname === '/contact-acces' || pathname === '/contact' || pathname === '/acces' || pathname === '/contact.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(renderContactAccesPage());
    return;
  }

  // 2. Fichiers Statiques (styles, scripts, images, logos)
  let staticFilePath;
  if (pathname === '/styles.css') {
    staticFilePath = path.join(__dirname, 'public', 'styles.css');
  } else if (pathname === '/app.js') {
    staticFilePath = path.join(__dirname, 'public', 'app.js');
  } else if (pathname.startsWith('/assets/')) {
    staticFilePath = path.join(__dirname, 'public', pathname);
  } else {
    staticFilePath = path.join(__dirname, 'public', pathname);
  }

  // Protection contre le Directory Traversal
  const normalizedPath = path.normalize(staticFilePath);
  if (!normalizedPath.startsWith(path.join(__dirname, 'public'))) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(normalizedPath, (err, stats) => {
    if (err || !stats.isFile()) {
      // 404 Personnalisée Planaxis
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`
        <!DOCTYPE html>
        <html lang="fr-CH">
        <head>
          <meta charset="UTF-8">
          <title>Page non trouvée · PLANAXIS</title>
          <link rel="stylesheet" href="/styles.css">
        </head>
        <body style="display:flex; flex-direction:column; min-height:100vh; justify-content:center; align-items:center; text-align:center; padding:2rem;">
          <img src="/assets/logo/planaxis-logo.svg" alt="PLANAXIS" style="width:200px; margin-bottom:2rem;">
          <h1 style="font-size:2.5rem; margin-bottom:1rem;">Page introuvable</h1>
          <p style="color:var(--color-muted); max-width:480px; margin-bottom:2rem;">
            La ressource demandée n'existe pas ou a été déplacée. Notre secrétariat médical reste à votre disposition.
          </p>
          <a href="/" class="btn btn-primary">Retour à l'accueil</a>
        </body>
        </html>
      `);
      return;
    }

    const ext = path.extname(normalizedPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Cache pour assets statiques
    const headers = {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=86400'
    };

    res.writeHead(200, headers);
    const readStream = fs.createReadStream(normalizedPath);
    readStream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`
  ===============================================================
  🌟 PLANAXIS · CENTRE MÉDICAL GLAND (SUISSE)
  ---------------------------------------------------------------
  Serveur actif avec succès !
  Adresse locale : http://localhost:${PORT}
  Port requis     : ${PORT}
  Statut          : Opérationnel
  ===============================================================
  `);
});
