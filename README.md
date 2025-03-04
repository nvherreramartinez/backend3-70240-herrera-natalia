# Plantilla de Documentación

## Descripción
Este proyecto es una API REST para la gestión de usuarios, mascotas y adopciones, con generación de datos ficticios y documentación con Swagger.

## Tecnologías Utilizadas 🖥️
- Node.js
- Express
- MongoDB con Mongoose
- Swagger para documentación
- Mocha, Chai y Supertest para testing
- Docker para contenedorización

## Instalación ⚙️

1. Clona este repositorio:
   ```sh
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Ingresa al directorio del proyecto:
   ```sh
   cd plantilladocumentacion
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```

## Configuración ⚙️
1. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```env
   PORT=8080
   MONGO_URL=mongodb+srv://usuario:contraseña@cluster.mongodb.net/dbname
   SECRET_KEY=clave_secreta
   ```

## Uso 📖

### Iniciar el servidor 🔝
- Modo producción:
  ```sh
  npm start
  ```
- Modo desarrollo con recarga automática:
  ```sh
  npm run dev
  ```

### Endpoints Principales ➡️⬅️⬆️⬇️

| Método | Endpoint               | Descripción |
|--------|------------------------|-------------|
| GET    | `/api/users`           | Obtener todos los usuarios |
| POST   | `/api/users`           | Crear un usuario |
| GET    | `/api/pets`            | Obtener todas las mascotas |
| POST   | `/api/pets`            | Crear una mascota |
| GET    | `/api/adoptions`       | Obtener todas las solicitudes de adopción |
| POST   | `/api/adoptions`       | Crear una solicitud de adopción |
| GET    | `/api/mocks/mockingpets` | Obtener mascotas ficticias |
| GET    | `/api/mocks/mockingusers` | Obtener usuarios ficticios |
| POST   | `/api/mocks/generateData` | Generar datos ficticios |

### Documentación con Swagger 📚
La documentación de la API está disponible en:
```
http://localhost:8080/api/docs
```

## Testing
Ejecutar los tests con:
```sh
npm test
```

## Docker 🐋
1. Construir la imagen:
   ```sh
   docker build -t plantilladocumentacion .
   ```
2. Ejecutar el contenedor:
   ```sh
   docker run -p 8080:8080 plantilladocumentacion
   ```

### Imagen en Docker Hub 🐋
Puedes encontrar la imagen del proyecto en Docker Hub en el siguiente enlace:
[Docker Hub - Plantilla Documentación](https://hub.docker.com/repository/docker/nvherreramartinez/trabajofinalbk3/general)

## Autor ✒️
Desarrollado por Lic. Natalia V. Herrera.

## Contacto 📬
📩 nvherreramartinez@gmail.com 🔗 [GitHub](https://github.com/nvherreramartinez)

### Competencias, conocimientos y habilidades adquiridas
<p align="left"> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a>  
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>  <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a>  <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a>  <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a>  <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a>  <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> </p>