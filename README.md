# Herramienta colaborativa (MachuDocxs)

## Introducción
Este proyecto se basa en el concepto de “editor de documentos en tiempo real” donde varios usuarios pueden interactuar en la edición de un documento. 
Dicha aplicación tiene la principal característica de ser un editor enriquecido, esto quiere decir que se puede agregar formato al texto, además de poder saber quienes están editando el documento por medio de múltiples cursores que representan a cada usuario conectado.
## Objetivo
Afianzar las ideas teóricas incorporadas durante el curso mediante el desarrollo de una aplicación en tiempo real flexible, a través de internet.
## Detalle
Se requiere la construcción de un sistema rudimentario que permita la edición colaborativa de un texto en tiempo real. Utilizando los protocolos estándares: http, websockets, etc.
Para ello se recomienda utilizar modulos provistos por el lenguaje de programacion JavaScript.
## Pre requisitos
Los principales requerimientos del proyectos se basan en la instalacion de las siguientes aplicaciones:
* [Git](https://github.com/)
* [NodeJS](https://nodejs.org/es/)
* [NPM](https://www.npmjs.com/) (Por lo general una vez instalado NodeJS se instala automaticamente npm)
## Instalación
Primero se requerira descargar el proyecto. Para ello, debe abrir una terminal y descargarse el proyecto con el siguiente comando:
```bash
git clone -b master https://github.com/leoguanco/CollaborativeDocumentEditor.git
```
Este comando crea una carpeta llamada “CollaborativeDocumentEditor” que contiene el código fuente de la aplicación.
Dentro de esa carpeta, se debera ejecutar:
```bash
npm install
```
Esto crea una nueva carpeta llamada “node_modules” donde se instalan las dependencias correspondientes para el funcionamiento de la aplicación.

Luego, podra crear una instancia de la aplicacion.
```bash
npm run dev
```
## Dependencias
El proyecto cuenta con las siguientes librerias que se instalan una vez ejecutados los comandos de instalación:
* [ExpressJS](https://expressjs.com/es/)
* [Nodemon](https://nodemon.io/)
* [Socket.io](https://socket.io/)
* [QuillJS](https://quilljs.com/)
* [Quill-cursors](https://github.com/reedsy/quill-cursors)
* [Bootstrap](https://getbootstrap.com/)

## Modulos
* ExpressJS
  * Es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.
* Nodemon
  * Es una herramienta muy útil para desarrollo de aplicaciones en NodeJS. Se encarga de monitorear los cambios en el codigo fuente que se esta desarrollando y automaticamente reinicia el servidor.
* Socket IO
  * Es una librería que encapsula al protocolo WebSockets. Es utilizada para la emisión y recepción de mensajes/eventos entre el servidor y los participantes.
* QuillJS
  * Es el modulo que se encarga de agregar diseño a la interaccion dentro del recuadro utilizado para la edicion de texto.