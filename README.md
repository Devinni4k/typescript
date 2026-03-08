# Node TypeScript API
## Descripción

**Este proyecto es una API básica desarrollada con Node.js, Express y TypeScript como parte de una práctica de desarrollo de APIs.**

#### El servidor incluye rutas que demuestran el uso de:

rutas básicas

parámetros dinámicos (params)

parámetros de consulta (query)
---
#### Tecnologías utilizadas

-Node.js
-Express.js
-TypeScript

### Instalación

```
1. Clonar el repositorio:
git clone https://github.com/Devinni4k/node-typescript-api.git
```

```
2. Entrar al proyecto: 
cd node-typescript-api
```

```
3. Instalar dependencias:
npm install
```

```
4. Ejecutar el servidor:
npm run dev
```

#### El servidor correra en: 
```http://localhost:3000```

#### Endpoints disponibles
```Ruta base
GET/
Respuesta:
{
  "mensaje": "Bienvenido a mi servidor con Node y Typescript"
}
Ruta con parámetro
GET /usuario/:id

Ejemplo:

/usuario/10

Respuesta:

{
  "usuario": "10"
}
```

```Ruta con query
GET /buscar?nombre=juan

Respuesta:

{
  "nombre": "juan"
}
```
