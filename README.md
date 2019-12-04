# Herramienta colaborativa

## Objetivo
Afianzar las ideas teóricas incorporadas durante el curso mediante el desarrollo de una aplicación en tiempo real flexible, a través de internet.
## Detalle
Se deberán formar equipos de desarrollo para realizar el siguiente trabajo.
Se requiere la construcción de un sistema rudimentario que permita la edición colaborativa de un texto en tiempo real, a través de internet (utilizando los protocolos estándares: http, websockets, etc.)
Para ello se recomienda utilizar como herramientas las provistas por el lenguaje JavaScript, Node.js, Socket.IO, HTML, CSS, etc.
Para la emisión y recepción de mensajes/eventos entre el servidor y los participantes de la sesión se recomienda la utilización del paquete Socket.IO para Node.js. Socket.IO es una librería que encapsula al protocolo WebSockets.
## Condiciones de entrega
* Fecha límite de entrega: 07/12/2019. Se espera ver avances la última clase: 30/11/2019
* La entrega deberá constar del código fuente de la aplicación y un documento que detalle el proyecto: módulos, funcionamiento, requerimientos para su instalación, etc.
* La entrega es grupal, en grupos de 3 o 4 integrantes.
## Introducción
El presente proyecto es una herramienta colaborativa del tipo “editor de documentos” donde varios usuarios pueden interactuar entre ellos a través de la participación en la edición de un documento. 
La aplicación tiene la principal característica de ser un editor enriquecido, esto quiere decir que se puede agregar formato al texto, además de poder saber quienes están editando el documento por medio de múltiples cursores que representan a cada usuario conectado.
## Pre requisitos
Para poder correr el proyecto correctamente se recomienda tener instalados los siguientes paquetes:
* [NodeJS](https://nodejs.org/es/)
* [NPM](https://www.npmjs.com/)
* [Git](https://github.com/)

Por lo general una vez instalado NodeJS se instala automaticamente npm.
## Instalación
Posicionarse en el directorio donde se quiere tener el proyecto y luego correr el comando:

git clone -b master https://github.com/leoguanco/CollaborativeDocumentEditor.git

Este comando crea una carpeta llamada “CollaborativeDocumentEditor” que contiene el código fuente de la aplicación

En la raíz del proyecto se debe correr el comando:

npm install

Esto crea una nueva carpeta llamada “node_modules” donde se instalan las dependencias correspondientes para el funcionamiento de la aplicación.

Para poder probar la aplicación se debe correr el comando:

npm run dev
## Dependencias
El proyecto cuenta con las siguientes dependencias que se instalan luego de correr los comandos de instalación:
* [ExpressJS](https://expressjs.com/es/)
* [Nodemon](https://nodemon.io/)
* [Socket.io](https://socket.io/)
* [QuillJS](https://quilljs.com/)
* [Quill-cursors](https://github.com/reedsy/quill-cursors)
* [Bootstrap](https://getbootstrap.com/)

## Modulos utilizados
* ExpressJS
* Nodemon
* Socket IO
* QuillJS
## Funcionamiento
## Problemas
## Conclusión
