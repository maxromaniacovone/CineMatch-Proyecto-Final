# CineMatch — Proyecto final Generación T

Aplicación web educativa de catálogo de películas y series con recomendaciones según géneros, edad e historial. Proyecto propio inspirado en el tipo de requisitos del material de referencia StreamFlix; los títulos del catálogo son ficticios.

## Requisitos
- Node.js 18 o superior.
- No requiere instalar paquetes ni configurar una base de datos externa.

## Cómo ejecutarlo
1. Descargá o cloná el repositorio.
2. Abrí una terminal dentro de la carpeta.
3. Ejecutá `npm start`.
4. Entrá a `http://localhost:3000`.
5. Registrá una cuenta (contraseña de 8 caracteres o más).

## Funcionalidades
- Registro y login con contraseñas derivadas con scrypt.
- Catálogo, detalle por API y búsqueda por título o género.
- Historial de contenido visto y calificaciones de 1 a 5.
- Recomendaciones por géneros, popularidad y clasificación por edad, excluyendo vistos.
- Acceso privado con token firmado y control de pertenencia de usuario.
- Persistencia local en `data.json` (no se sube al repositorio).
- Interfaz responsive.

## API
`POST /api/usuarios`, `POST /api/login`, `PUT /api/usuarios/:id`, `GET /api/peliculas`, `GET /api/peliculas/:id`, `GET /api/buscar?nombre=`, `POST /api/usuarios/:id/historial`, `POST /api/usuarios/:id/calificaciones`, `GET /api/usuarios/:id/recomendaciones`. También hay GET para historial y calificaciones.

## Alcance y limitaciones
Este es un MVP educativo. A diferencia de la arquitectura propuesta en la referencia, usa Node.js sin dependencias, frontend HTML/CSS/JS y un archivo JSON local en vez de React, Express y PostgreSQL. No está preparado para alta concurrencia ni despliegue público de producción. Para producción se necesitarían base de datos transaccional, gestión de secretos, HTTPS, rate limiting y pruebas adicionales.

## Pruebas
`npm test` ejecuta pruebas básicas de API. También se puede probar manualmente: crear usuario, buscar, calificar, marcar visto y revisar recomendaciones.

## Entrega
Subir todos los archivos de este proyecto al repositorio GitHub (incluidos `docs/`, `AGENTS.md` y `.env.example`), excluyendo `.env` y `data.json`. Compartir el enlace del repositorio en la plataforma del curso.
