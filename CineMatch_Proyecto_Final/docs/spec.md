# Especificación CineMatch
## Objetivo
Permitir que usuarios se registren, consulten un catálogo, busquen contenido, registren visualizaciones, califiquen y reciban recomendaciones.
## Entidades
Usuario (id, nombre, email, passwordHash, edad, géneros); Contenido (id, título, tipo, géneros, director, actores, duración, sinopsis, edad, popularidad); Historial (usuario, contenido, progreso); Calificación (usuario, contenido, puntaje); Recomendación (contenido, motivo).
## Reglas
- Email único; contraseñas no se almacenan en texto plano.
- Cada usuario accede solo a sus datos.
- Calificación entera entre 1 y 5, única por usuario y contenido.
- Progreso de visualización entre 0 y 100.
- Recomendaciones priorizan preferencias y popularidad, respetan edad y excluyen contenido visto.
- Sin integración con IA externa ni notificaciones.
## Endpoints
Consultar README.md para lista de rutas.
## Diferencias respecto a la referencia
MVP con Node.js nativo, frontend estático y JSON local. La referencia proponía React, Express y PostgreSQL; esas tecnologías quedan fuera del alcance de esta entrega rápida.
