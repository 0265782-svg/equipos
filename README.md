# Fichas de equipo NFC · Planta Vallejo (Mantenimiento Autónomo)

Cada máquina tiene una ficha que se abre al acercar el celular a su tag NFC:
foto, código, dueño del equipo, paso AM, descripción, proceso, especificaciones,
mapa de seguridad, CIL con know-why, estándar de lubricación y documentos.
Todo en español e inglés (botón ES / EN).

## Estructura
- index.html → la página (no hace falta tocarla)
- equipos.js → LOS DATOS de cada equipo (aquí editas)
- img/ → fotos del equipo, del dueño, mapa de seguridad, diagramas
- docs/ → PDFs (mapa de seguridad, estándar de lubricación…)
- img/logo.png → (opcional) logo oficial; si existe aparece en la barra azul

## Agregar un equipo
1. Sube su foto a img/ (nombre en minúsculas, ej. motor2.jpg).
2. En equipos.js, al final hay una PLANTILLA: pon una coma después de la }
   del equipo anterior y pega la plantilla sin las //.
3. Solo "nombre" es obligatorio. Las secciones seguridad, cil, lubricacion,
   documentos, specs y proceso aparecen solo si las agregas.
4. Commit, espera 1–2 min y graba el NFC con:
   https://0265782-svg.github.io/equipos/?id=MOTOR2

## Códigos del CIL
- frecuencia: S = por turno, D = diario, W = semanal, F = quincenal,
  M = mensual, T = trimestral, A = anual
- corriendo: R = equipo corriendo, S = equipo parado
