# José Cortés — Portfolio

Portfolio en inglés construido con Astro y CSS. Genera HTML estático; los desplegables funcionan sin JavaScript. El sitio antiguo queda intacto.

## Abrir en local

Desde esta carpeta:

```powershell
npm install
npm run dev
```

Abre la dirección que imprime Astro, normalmente `http://localhost:4321/portfolio/`.

Si partes de Node 20, npm puede avisar de requisitos de versión durante la primera instalación. El proyecto incluye su propio Node compatible. Si aparece `Cannot find native binding`, completa la instalación con ese Node (en Windows con npm en su ruta habitual):

```powershell
& './node_modules/node/bin/node.exe' 'C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js' install --include=optional
```

Con una instalación global de Node 22.23.4 o superior basta con `npm install`.

Para compilar y comprobar enlaces internos, recursos, anclas y metadatos:

```powershell
npm run build
npm run check:output
```

## Editar

- **Textos, proyectos y enlaces:** `src/data/portfolio.ts`.
- **Portada y estructura:** `src/pages/index.astro`.
- **Caso Nexosend:** `src/pages/work/nexosend.astro`.
- **Colores, tipografía y responsive:** `src/styles/global.css`.
- **SEO:** `src/layouts/Layout.astro`.
- **Archivos descargables:** `public/`.

Para actualizar el CV, sustituye `public/Jose-Cortes-Becerra-PHP-Laravel-Developer.pdf`. Si cambias el nombre del archivo, actualiza también `profile.resume`.

## Antes de enviar candidaturas

- Revisar la redacción en inglés y confirmar que describe fielmente tu aportación.
- Añadir CV, LinkedIn, experiencia profesional real con fechas y nivel de inglés. No se han inventado empleos, cifras ni años de experiencia.
- Confirmar ubicación prevista, disponibilidad y coincidencia horaria. El texto expresa la intención de trabajar desde LATAM, no una residencia actual.
- Ampliar Nexosend con stack confirmado, arquitectura, pruebas, una decisión técnica con alternativas y una demo breve en inglés.
- Sustituir la ilustración del flujo por una captura real si la tienes. Está identificada expresamente como ilustración; no representa una captura del producto.
- Comprobar manualmente los repositorios públicos, que no pudieron verificarse durante la revisión inicial.
- Añadir el vídeo de cada proyecto cuando tengas su URL exacta.
- El enlace antiguo de Mykelt no se incluye: ahora apunta a otra web. Fintool tampoco tiene una demo verificada.
- Revisar visualmente en móvil y escritorio antes de publicar. La compilación no sustituye esta revisión.

## Publicar en GitHub Pages

Esta carpeta debe ser **la raíz del nuevo repositorio** `portfolio`. No subas la carpeta contenedora con `contexto.txt`. El workflow debe quedar en `.github/workflows/deploy.yml` en la raíz del repositorio.

1. Crea el repositorio `portfolio` en GitHub y sube el contenido de esta carpeta a la rama `main`, incluyendo `package-lock.json`.
2. En **Settings → Pages → Build and deployment → Source**, elige **GitHub Actions**.
3. El workflow compila, comprueba enlaces y publica al hacer push a `main`.
4. Dirección esperada: `https://josecortesdev.github.io/portfolio/`.

No se ha creado un repositorio remoto ni publicado esta versión.

### URL raíz o dominio propio

Para el repositorio `josecortesdev.github.io`, configura la variable de Actions `PUBLIC_BASE_PATH` como `/`.

Para un dominio propio:

1. Configura `PUBLIC_SITE_URL` con `https://tu-dominio.com` y `PUBLIC_BASE_PATH` con `/` en **Settings → Secrets and variables → Actions → Variables**.
2. Configura y verifica el dominio y sus DNS siguiendo la documentación de GitHub Pages.
3. Añade `public/CNAME` con el dominio, sin protocolo, para conservarlo en siguientes despliegues.
4. Vuelve a ejecutar el workflow y activa HTTPS en Pages cuando esté disponible.

En local se pueden definir esas mismas variables en `.env` (copia `.env.example`).

## Decisiones

- Astro 7 con Node 22.23.4 incluido como dependencia de desarrollo del proyecto: los comandos npm lo usan sin cambiar tu instalación global. En GitHub Actions también se usa Node 22. `package-lock.json` fija las versiones instaladas.
- CSS propio, sin framework de interfaz ni dependencias de JavaScript en el cliente.
- Fuentes de Google Fonts con fuentes del sistema como alternativa. Se pueden eliminar las solicitudes externas quitando el `@import` de `global.css`.
- Sin formulario que simule enviar mensajes: el contacto abre tu correo con `mailto:`.
- Sin cifras, testimonios, capturas o enlaces de CV inventados.
- No incluye analítica ni cookies de seguimiento.

## Verificación y límite conocido

La compilación genera las dos páginas y `check:output` verifica enlaces internos, recursos y destinos de anclas. También se comprueba la configuración con el sitio en la raíz y en `/portfolio/`.

No se ha completado la inspección visual en navegador: el acceso de navegador no estaba disponible y la ventana nativa estaba minimizada. Conviene revisar escritorio y móvil antes de publicar.

La auditoría de npm con Astro 7.4.12 informa de 10 avisos altos, todos derivados de `picomatch` (ReDoS, GHSA-fc5q-39xc-vjpf). En la consulta realizada, la versión marcada como más reciente de picomatch era 4.0.7 y estaba incluida en el rango afectado; no se ha aplicado una bajada de Astro que reintroduciría otros avisos. El portfolio publicado contiene HTML y CSS estáticos y no ejecuta picomatch en el navegador. Mantén actualizadas las herramientas de compilación y repite `npm audit` al actualizar.
