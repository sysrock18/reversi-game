Juego Reversi
===================

Aplicación Angular 2+ (4.3.5) que consume la API de [Swagger UI](http://34.213.192.159:9000/swagger/) para el front del juego de reversi.

----------
#### Recursos usados

 - [Angular Material](https://material.angular.io/)

 - [Ionic Icons](http://ionicons.com/)

#### Imagen Previa

![](https://drive.google.com/uc?id=0BwRKmOb3vYULbUJDSmotd09WVTg)

## Instalación

Clonar el proyecto y ejecutar en la terminal desde la carpeta raiz el comando `npm install` para descargar los paquetes necesarios. Luego ejecutar `ng serve` para iniciar el servidor y arrancar la aplicaciñon desde el navegador en la ruta `http://localhost:4200/`.

### Observación API

Como primer movimiento en las coordenadas x=0 y y=0 se realizaba la siguiente petición:

http://34.213.192.159:9000/reversi/game/movements?token=TOKEN&x=0&y=0

La cual aceptaba como movimiento valido siendo incorrecto de la lógica del juego reversi.

#### Desarrollador
Simon González
e-mail: gonzalezsimon18@gmail.com
