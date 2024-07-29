# Frontend Hermenautas Store

Aplicación Frontend que combina un diario digital de noticias junto con un catálogo de productos y servicios editoriales para la [`Web Oficial de Hermenautas`](https://hermenautas.com/).

**Índice**

1. [Realizando la Instalación](#id1)
2. [Variables de Entorno](#id2)
3. [Gestión de traducciones](#id3)
4. [Control de Versiones Automatizadas](#id4)


## **1. Realizando la Instalación** <div id='id1' />

La aplicación ha sido desarrollada con [`ReactJS`](https://react.dev/learn)usando el metaframework [`NextJS`](https://nextjs.org/docs). Se usó [`create-next-app`](https://nextjs.org/docs/getting-started/installation) por lo que requiere de tener instalado NodeJS. Para poder usar el repositorio en un entorno local de desarrollo se requiere:

Ejecutar comando de instalación de paquetes de package.json:

```bash
npm install

```

Ejecutar comando para iniciar servidor en modo desarrollo:

```bash
npm run dev

```

```bash
# IMPORTANTE: En el modo desarrollo local, NextJS se encarga de realizar la build
# automáticamente, es por esto que NO SE DEBE EJECUTAR el comando npm run build
```

## **2. Variables de Entorno** <div id='id2' />

Para un correcto funcionamiento de la APP se deben utilizar las variables de entorno. Crear un archivo **.env.local** en la carpeta raíz del repositorio (**IMPORTANTE:** Debe quedar al mismo nivel que el archivo package.json o el README.md. No insertar en /src ni en ninguna otra carpeta existente.)

```bash
# IMPORTANTE: Estas variables son solo para el entorno local de desarrollo.
# No usar para la rama Master ni para la rama Dev.
```

Copiar y pegar las siguientes variables en el interior del archivo **.env.local**

```env
# .env

#
# API URL
#
NEXT_PUBLIC_API_URL = "https://api.hermenautas.es/v1"

#
# HOST WEB URL
#
NEXT_PUBLIC_SITE_NAME = "Hermenautas"
NEXT_PUBLIC_HOST_URL = "http://localhost:3000"
NEXT_PUBLIC_PORT = 3000

```

## **3. Gestión de las traducciones** <div id='id3' />

Para gestionar las traducciones usamos la dependencia de [`next-intl`](https://next-intl-docs-git-feat-next-13-rsc-next-intl.vercel.app/) y lo integramos a la plataforma de [`crowdin`](https://crowdin.com/) con la que podemos sincronizar todas las traducciones de nuestros frontends sin necesidad de enviar información manualmente al equipo de traducciones.

Todas las traducciones al español se registran en la carpeta "messenger" en el archivo es.json

Para poder usar adecuadamente el middleware de crowdin se deben seguir las instrucciones de instalación del [`Crowdin CLI`](https://crowdin.github.io/crowdin-cli/installation)

Una vez instalado puedes el push para enviar el archivo es.json al equipo de traducción

```bash
crowdin push
```

Cuando el equipo haya terminado de traducir puedes usar el pull para obtener todos los archivos traducidos en todos los idiomas
```bash
crowdin pull
```

## **4. Control de Versiones Automatizadas** <div id='id4' />

### ¿Cómo realizar commits?

Para agregar un commit, introducir el siguiente comando:

```bash
git commit -a
```

Se abre una nueva terminal en VIM.

Escribir la tipología del commit: fix, feat, docs, etc. (Siguiendo los parámetros establecidos en el package.json lineas 70 a la 85).

EJEMPLO
```bash
fix: este es una corrección de un bug
```

```bash
feat: esta es una actualización importante
```

Salir de terminal usando ctrl+c

```bash
:wq
```

Ejecutar release-it

```bash
npm run release
```

Configurar release conforme a lo que se requiera en cada momento
Para +Info consultar la [`Documentación Oficial`](https://github.com/release-it/release-it)

