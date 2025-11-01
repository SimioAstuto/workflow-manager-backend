WorkFlow Manager Backend - API REST (Productos, Categorías y Usuarios)

Este proyecto corresponde al desarrollo de una API REST que permite gestionar **Usuarios**, **Categorías** y **Productos**, incluyendo las operaciones básicas de **Crear, Leer, Actualizar y Eliminar (CRUD)**.

Los **Productos** están asociados a una **Categoría**, por lo que al consultar productos se muestra la información completa de su categoría.  
Además, se implementa **registro e inicio de sesión** para los usuarios. Las contraseñas se guardan en forma segura y al iniciar sesión se genera un **token JWT** que habilita el acceso a las acciones protegidas.

---

## ✅ Funcionalidades Principales

- CRUD de **Productos**
- CRUD de **Categorías**
- Registro e inicio de sesión de **Usuarios**
- Encriptación de contraseñas (bcrypt)
- Autenticación con **JWT**
- Relación **Producto → Categoría**
- Middleware para proteger rutas
- Uso de variables de entorno

---

## 🗂️ Esquema de la Base de Datos (MongoDB)

### Usuarios (users)
| Campo | Tipo | Descripción |
|------|------|-------------|
| name | String | Nombre del usuario |
| email | String | Correo único para iniciar sesión |
| password | String (hasheado) | Contraseña encriptada |

### Categorías (categories)
| Campo | Tipo | Descripción |
|------|------|-------------|
| name | String | Nombre de la categoría |
| description | String | Descripción breve |

### Productos (products)
| Campo | Tipo | Descripción |
|------|------|-------------|
| name | String | Nombre del producto |
| description | String | Descripción del producto |
| price | Number | Precio |
| stock | Number | Cantidad disponible en inventario |
| category | ObjectId (ref: Category) | Categoría a la que pertenece |



## ⚙️ Tecnologías Utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- JWT (autenticación)
- Bcrypt (encriptación)
- Dotenv (variables de entorno)
- CORS

---

## 🔧 Instalación y Ejecución

1) Clonar el repositorio:
```bash
git clone <URL_DEL_REPO_BACKEND>
Entrar a la carpeta del backend:

bash
Copiar código
cd backend
Instalar dependencias:

bash
Copiar código
npm install
Crear archivo .env en la raíz del proyecto:

ini
Copiar código
PORT=5000
MONGO_URI=TU_URL_DE_MONGO_AQUI
JWT_SECRET=TU_CLAVE_SECRETA_AQUI
Ejecutar el servidor:

bash
Copiar código
npm start
El backend estará disponible en:

arduino
Copiar código
http://localhost:5000
🌐 Endpoints Disponibles
🔐 Autenticación
Método	Ruta	Acción
POST	/api/users/register	Registrar usuario
POST	/api/users/login	Iniciar sesión y obtener token

📦 Productos (Requiere token para crear, editar, eliminar)
Método	Ruta	Acción
GET	/api/products	Listar productos
GET	/api/products/:id	Ver un producto
POST	/api/products	Crear producto
PUT	/api/products/:id	Editar producto
DELETE	/api/products/:id	Eliminar producto

🗂️ Categorías (Requiere token para crear, editar, eliminar)
Método	Ruta	Acción
GET	/api/categories	Listar categorías
POST	/api/categories	Crear categoría
PUT	/api/categories/:id	Editar categoría
DELETE	/api/categories/:id	Eliminar categoría

📄 Ejemplos de Datos (JSON)

Crear Usuario
---
{
  "name": "Juan Perez",
  "email": "juan@example.com",
  "password": "123456"
}

Iniciar Sesión
---
{
  "email": "juan@example.com",
  "password": "123456"
}

Crear Categoría (requiere token)
---
{
  "name": "Herramientas",
  "description": "Productos de uso mecánico"
}

Crear Producto (requiere token)
---
{
  "name": "Martillo",
  "description": "Martillo de acero",
  "price": 2500,
  "stock": 12,
  "category": "ID_DE_CATEGORIA"
}
