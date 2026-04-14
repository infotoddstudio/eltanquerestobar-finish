// Middleware para CORS y headers de seguridad (Vite/Express)
// NOTA: Este archivo es para referencia. Para implementación real,
// necesitarás un servidor backend (Express, Next.js, etc.)

// Lista de orígenes permitidos
const allowedOrigins = [
  'https://eltanquerestobar.com',
  'https://www.eltanquerestobar.com',
  'http://localhost:3000',
  'http://localhost:8080',
  'https://localhost:3000',
  'https://localhost:8080',
];

// Función para verificar origen
const isOriginAllowed = (origin: string | null): boolean => {
  if (!origin) return true; // Permitir solicitudes same-origin
  return allowedOrigins.includes(origin);
};

// Headers de seguridad para implementar en tu servidor
export const corsSecurityConfig = {
  // CORS
  origins: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  maxAge: 86400, // 24 horas
  
  // Headers de seguridad
  headers: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-XSS-Protection': '1; mode=block',
    
    // Content Security Policy
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'", // Necesario para React
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com",
      "connect-src 'self' https://maps.googleapis.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests"
    ].join('; '),
    
    // Permissions Policy
    'Permissions-Policy': [
      'geolocation=()',
      'microphone=()',
      'camera=()',
      'payment=()',
      'usb=()',
      'magnetometer=()',
      'gyroscope=()',
      'accelerometer=()',
      'ambient-light-sensor=()',
      'autoplay=(self)',
      'fullscreen=(self)',
      'picture-in-picture=(self)'
    ].join(', '),
    
    // Headers adicionales de seguridad
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Resource-Policy': 'same-origin'
  }
};

// Para implementación en Express.js:
/*
const express = require('express');
const cors = require('cors');

const app = express();

// Configurar CORS
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Aplicar headers de seguridad
app.use((req, res, next) => {
  Object.entries(corsSecurityConfig.headers).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
  next();
});
*/

export { corsSecurityConfig, isOriginAllowed };
