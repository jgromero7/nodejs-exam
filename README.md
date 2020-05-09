# NodeJS-Exam

### Tecnologías

NodeJS-Exam usa varios proyectos de código abierto para funcionar correctamente:

* [express](http://expressjs.com/) - Framework utilizado para el manejo de las rutas y middleware.
* [express-validator](https://www.npmjs.com/package/express-validator) - conjunto de middlewares express.js que envuelve las funciones validator.js validator y sanitizer.
* [cors](https://www.npmjs.com/package/cors) - Middleware para habilitar opciones de conexión a la servidor (Su uso es opcional).
* [mongoose](https://mongoosejs.com/docs/index.html) - ORM para uso de consultas y crear colecciones en MongoDB
* [dotenv](http://momentjs.com/) - Módulo de dependencia cero que carga variables de entorno de un archivo .env en process.env. El almacenamiento de la configuración en el entorno separado del código se basa en la metodología de la aplicación The Twelve-Factor.
* [nodemon](https://www.npmjs.com/package/nodemon) - Herramienta de desarrollo reinicia automáticamente la aplicación de node cuando se detectan cambios de archivos en el directorio.


### Instalación

NodeJS-Exam requiere [Node.js](https://nodejs.org/) v10.4 + para ejecutarse.

Clonar Repositorio
```sh
$ git clone https://github.com/jgromero7/nodejs-exam.git
```

Copia el archivo `.env` en base al archivo `.env.example` y modifica los siguientes valores
```sh
    APP_PORT=8080
    DB_URI=mongodb://localhost/nodejs-exam
```

Instale las dependencias y devDependencies e inicie el servidor.
```sh
$ cd nodejs-exam
$ npm install 
$ npm run start
```
Iniciar servidor con con [nodemon](https://www.npmjs.com/package/nodemon)
```sh
$ npm install nodemon -D 
$ npm run start:devs
```
Verifique la implementación navegando a la dirección de su servidor en su navegador preferido.
```sh
127.0.0.1:8080 || http://localhost:8080
```

### Información adicional

1 Buscar registro por ID
```JOSN
    GET /api/v1//name/query/{id}
```
* Req: {id}: Debe ser tipo numérico
* Res: {status}: 400, 404, 500, 200

1.1 Respuesta
```JSON
    STATUS 200
    {
        "message": "Read Name By ID Successfuly",
        "data": {
            "id": 1,
            "name": "Jose Romero 1"
        }
    }
```

2 Crea un nuevo registro
```JSON
    POST /api/v1/name/store 
    {
        "id": 1,
        "name": "Example Name"
    }
```
* Req: {id}: Debe ser tipo numerico
* Req: {name}: Debe ser tipo cadena

2.1 Respuesta
```JSON
    STATUS 200
    {
        "message": "You are registered successfuly",
        "data": {
            "id": 1,
            "name": "Example Name"
        }
    }
```
* Res: {status}: 400, 409, 500, 200

Autor: José Romero
----
**Software Libre!**