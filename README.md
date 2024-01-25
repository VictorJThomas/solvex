
# User Management 

El Sistema de Gestión de Proyectos y Usuarios es una aplicación diseñada para simplificar y optimizar la gestión de proyectos y la asignación de usuarios en un entorno empresarial. Este sistema ofrece herramientas eficientes para la creación, administración y seguimiento de proyectos, así como la gestión de usuarios asociados a dichos proyectos.


## Características

- ### Mantenimiento de proyectos:
    - Creación y administración de proyectos.
    - Asignación y visualización de usuarios por proyecto.
    - Actualización y eliminación de proyectos.
- ###  Base de datos robusta:
    - El sistema utiliza una base de datos sólida implementada con Prisma ORM y PostgreSQL, asegurando un almacenamiento eficiente y seguro de los datos de proyectos y usuarios.
- ###  Registro de Usuarios y Autenticación Segura:
    - El sistema utiliza Clerk y JWT para un registro de usuarios sin complicaciones y una autenticación segura. Clerk proporciona una solución completa para la gestión de identidades, facilitando el proceso de registro y garantizando la seguridad del inicio de sesión. Además, se emplea JWT dentro de Clerk para asegurar la información del usuario.
- ###  Paginación de datos.
- ###  API Eficiente y segura:
    - Implementación de una API diseñada para asegurar la seguridad, eficiencia y escalabilidad en las interacciones entre la interfaz de usuario y la base de datos.


## Stack Utilizado

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express


## Intalación

Instalar user-management con npm:

```bash
  cd user-management
  npm install 
```

Generar base de datos con Prisma:

```bash
  npx prisma generate 
```

Correr aplicación:

```bash
  npm run dev 
```

Realizar ''seed'' de datos dentro de la base de datos:

```bash
  npx prisma db seed
```
## Environment Variables

Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno y archivos .env correspondientes:.

.env

`DATABASE_URL`

.env.local

`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`

`CLERK_SECRET_KEY`


## Referencia API 

#### Get all projects

```http
  GET /api/projects
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | **Requerido**. Número de página para paginación. |
|    `perPage`    |    `number`    |  **Requerido**.  Número de artículos por página.         |

#### Create project

```http
  POST /api/projects/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `owner`      | `string` | **Requerido**. Nombre del propietario del nuevo proyecto.|
| `name`      | `string` | **Requerido**. Nombre del nuevo proyecto. |
| `description`      | `string` | **Requerido**. Descripción del nuevo proyecto. |
| `users`      | `string[]` | **Requerido**. Array de usuarios asignados al proyecto. |
| `tasks`      | `string[]` | **Requerido**. Array de tareas asociadas al proyecto. |

#### Edit project

```http
  PUT /api/projects/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Requerido**. Id del proyecto a ser actualizado.|
| `name`      | `string` | **Requerido**. Nuevo nombre para el proyecto. |
| `description`      | `string` | **Requerido**. Nueva descripción para el proyecto. |
| `users`      | `string[]` | **Requerido**. Array actualizado de usuarios asignados al proyecto. |
| `tasks`      | `string[]` | **Requerido**.  Array actualizado de tareas asociadas al proyecto. |

#### Delete project

```http
  GET /api/projects
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | **Requerido**. ID del proyecto a eliminar. |
