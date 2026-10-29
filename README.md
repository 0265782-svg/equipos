# Fichas de equipo para NFC

## Probar en tu Mac
Opción rápida: doble clic en `index.html` (muestra la lista de equipos).
Para probar un equipo: `index.html?id=LLEN-01` o `index.html?id=LLEN-01&lang=en`.

Opción con servidor local (más parecido a producción):
    cd nfc-equipos
    python3 -m http.server 8000
y abre http://localhost:8000/?id=LLEN-01

## Editar equipos
Todo está en `equipos.js`. Copia un bloque, cambia el ID y los datos.
Las fotos van en la carpeta `img/` (jpg, png o svg).

## Publicar gratis en GitHub Pages
1. Crea un repo en github.com (ej. `equipos`).
2. Sube todos estos archivos (Add file → Upload files).
3. Settings → Pages → Source: "Deploy from a branch" → main → / (root) → Save.
4. Tu sitio queda en: https://TU_USUARIO.github.io/equipos/

## Grabar el NFC
App NFC Tools → Escribir → Añadir registro → URL:
    https://TU_USUARIO.github.io/equipos/?id=LLEN-01
Usa tags NTAG213 (anti-metal si van sobre la máquina).
