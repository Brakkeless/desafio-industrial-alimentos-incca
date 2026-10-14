# Desafío Productivo INCCA · Corferias 2026

Aplicación web responsive con diez retos que integran Ingeniería Industrial e Ingeniería de Alimentos. Incluye retroalimentación teórico-práctica, puntuación, ranking centralizado, vista de proyección y panel administrativo.

## Contenidos

1. Diseño del flujo productivo.
2. Prevención de contaminación cruzada.
3. Inventarios FEFO para perecederos.
4. Identificación del cuello de botella.
5. Balance de masa.
6. Formulación de mezclas.
7. Control térmico validado.
8. Interpretación de cartas de control.
9. Eficiencia de producción.
10. Gestión integrada de una desviación de cadena de frío.

Cada respuesta presenta la solución correcta, su fundamento teórico y una aplicación práctica. Los errores no restan puntos y no bloquean el avance.

## Desarrollo local

Requiere Node.js 20 o posterior.

```bash
npm install
npm run dev
```

Sin variables de servidor, la aplicación activa el modo demostración y conserva el ranking solo en el navegador.

## Base de datos y publicación

Ejecute `supabase/schema.sql` una vez en un proyecto Supabase independiente. Configure en Vercel las variables de `.env.example`; ninguna clave privada debe llevar el prefijo `VITE_`.

```bash
npm test
npm run build
```

La aplicación recalcula el puntaje en el servidor, firma cada partida, evita envíos duplicados y mantiene bloqueado el acceso directo del navegador a las tablas mediante RLS.

Rutas especiales:

- `/ranking-display`: clasificación para proyectar, actualizada cada 15 segundos.
- `/admin`: estadísticas por nivel, moderación de alias, exportación CSV y reinicio del ranking.

Solo se solicitan alias; no se deben introducir datos personales. Antes del evento, la Universidad debe definir el aviso de privacidad, el periodo de retención y el responsable del tratamiento.

