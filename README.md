# Proyecto de Ejemplo con JSON Server

Este proyecto es una maqueta de una aplicación web que utiliza JSON Server como backend para simular una API de datos. JSON Server es una herramienta que permite crear rápidamente un servidor de desarrollo API a partir de un archivo JSON.

## Requisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu sistema. Puedes verificar si Node.js está instalado ejecutando:

```bash
node -v
```

````

Si Node.js no está instalado, descárgalo e instálalo desde el sitio web oficial.

## Configuración

1. Clona este repositorio o descarga los archivos en tu sistema.

2. Abre una terminal y navega hasta el directorio del proyecto.

3. Instala las dependencias utilizando [Yarn](https://yarnpkg.com/) o [npm](https://www.npmjs.com/):

```bash
yarn install
# o
npm install
```

## Ejecución del Servidor JSON

El proyecto utiliza JSON Server para simular una API de datos. Para ejecutar el servidor JSON, asegúrate de que estás en el directorio del proyecto y ejecuta el siguiente comando:

```bash
yarn json-server db.json
# o
npx json-server db.json
```
```bash
yarn start
# o
npx start
```

Esto iniciará el servidor JSON y servirá los datos desde el archivo `db.json`.

## Ejecución de la Aplicación

Una vez que el servidor JSON esté en funcionamiento, puedes ejecutar la aplicación web. Utiliza el siguiente comando:

```bash
yarn dev
# o
npm run dev
```

Esto iniciará la aplicación en tu navegador. Asegúrate de que la aplicación pueda acceder al servidor JSON en `http://localhost:3000` para obtener y mostrar datos.

# Uso

La aplicación muestra una lista de tarjetas de usuarios, donde cada tarjeta representa un usuario con su nombre, descripción y estado de administrador. Puedes interactuar con las tarjetas, seguir y dejar de seguir usuarios.


````
