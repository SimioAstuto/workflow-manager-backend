# Backend - API REST (Productos, Categorías y Usuarios)

En este proyecto se desarrolló una API REST que permite manejar **Usuarios**, **Categorías** y **Productos**, implementando las operaciones básicas de **Crear, Leer, Actualizar y Eliminar (CRUD)**.

Los **Productos** están relacionados con las **Categorías**, por lo que al consultar productos también se muestra la información de la categoría correspondiente.

El sistema incluye **registro e inicio de sesión de usuarios**. Las contraseñas se guardan de forma segura mediante **encriptación**, y al iniciar sesión se genera un **token (JWT)** que permite acceder a las zonas protegidas de la API, como crear o modificar productos y categorías.

El proyecto está organizado en carpetas separadas para mantener el código claro y ordenado (modelos, controladores, rutas, conexión a la base de datos y middleware). Además, se utilizan **variables de entorno** para manejar datos sensibles como la conexión a la base de datos y la clave del token.

## ✅ Funcionalidades Principales

- CRUD de **Productos**
- CRUD de **Categorías**
- Registro e inicio de sesión de **Usuarios**
- Encriptación de contraseñas
- Seguridad mediante **JWT**
- Relación **Producto → Categoría**
- Organización modular del código

---

## 📂 Estructura del Proyecto

src/
 ├── models/              # Modelos de MongoDB
 │   ├── userModel.js
 │   ├── productModel.js
 │   └── categoryModel.js
 │
 ├── controllers/         # Manejan las peticiones HTTP
 │   ├── userController.js
 │   ├── productController.js
 │   └── categoryController.js
 │
 ├── routes/              # Definición de rutas
 │   ├── userRoute.js
 │   ├── productRoute.js
 │   └── categoryRoute.js
 │
 ├── middleware/
 │   └── verifyToken.js   # Valida el token JWT
 │
 └── config/
     └── db.js            # Conexión a MongoDB



## ⚙️ Tecnologías Utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- JWT (autenticación)
- Bcrypt (encriptación)
- Dotenv (variables de entorno)
- CORS

---

## 🧩 Instalación y Ejecución

1) Clonar el repositorio:

git clone <URL_DEL_REPOSITORIO>

cd backend
Instalar dependencias:


npm install
Crear el archivo .env:


PORT=5000
MONGO_URI=TU_CONEXION_MONGO
JWT_SECRET=TU_CLAVE_SECRETA
Iniciar el servidor:


npm start
El backend quedará disponible en:


http://localhost:5000

🌐 Endpoints Disponibles

🔐 Autenticación

Método	Ruta	Descripción
POST	/api/users/register	Registrar usuario
POST	/api/users/login	Iniciar sesión y obtener token

📦 Productos (requiere token para crear/editar/eliminar)

Método	Ruta	Descripción
GET	/api/products	Listar productos
GET	/api/products/:id	Ver un producto
POST	/api/products	Crear producto
PUT	/api/products/:id	Editar producto
DELETE	/api/products/:id	Eliminar producto

🗂️ Categorías (requiere token para crear/editar/eliminar)

Método	Ruta	Descripción
GET	/api/categories	Listar categorías
POST	/api/categories	Crear categoría
PUT	/api/categories/:id	Editar categoría
DELETE	/api/categories/:id	Eliminar categoría

📄 Ejemplos de Datos (JSON)

Crear Usuario

{
  "name": "Juan Perez",
  "email": "juan@example.com",
  "password": "123456"
}
Iniciar Sesión

{
  "email": "juan@example.com",
  "password": "123456"
}
Crear Categoría (requiere token)

{
  "name": "Herramientas",
  "description": "Productos de uso mecánico"
}
Crear Producto (requiere token)

{
  "name": "Martillo",
  "description": "Martillo de acero",
  "price": 2500,
  "stock": 12,
  "category": "ID_DE_CATEGORIA"
}
