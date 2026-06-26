# Guia rapida para reclutadores senior

## Teleasistencia Jacaranda

Teleasistencia Jacaranda es una aplicacion web de gestion asistencial construida con Spring Boot, Thymeleaf, Spring Security, JPA y MySQL. El objetivo es centralizar el seguimiento de usuarios de teleasistencia: expedientes, llamadas, medicacion, telefonos, cuidadores, empleados, localidades, tipos de llamada y bajas.

Este documento esta pensado para que una persona que llega nueva al proyecto pueda entrar, probar los flujos principales y entender rapidamente que demuestra la aplicacion segun el rol autenticado.

## Arranque rapido

1. Levantar la base de datos y phpMyAdmin:

```bash
docker compose up -d
```

2. Arrancar la aplicacion:

```bash
./mvnw spring-boot:run
```

3. Abrir la aplicacion:

```text
http://localhost:8080
```

4. Abrir phpMyAdmin, si se quiere inspeccionar la base de datos:

```text
http://localhost:8081
```

## Acceso de demo

Para la demo publica no se publican usuarios ni contrasenas concretas. Si se quiere revisar la aplicacion en vivo, se recomienda solicitar una cuenta temporal de rol `USER`.

| Perfil | Acceso | Que permite probar |
| --- | --- | --- |
| USER | Solicitar por contacto | Operativa diaria: llamadas propias, usuarios, telefonos, medicacion y cuidadores. |

## Recorrido recomendado para evaluar la app

1. Entrar con una cuenta temporal `USER` para probar la experiencia de operador.
2. Revisar `Llamadas` y comprobar que el usuario ve sus llamadas propias.
3. Abrir `Usuarios`, buscar o paginar expedientes, entrar en un detalle y revisar llamadas, medicacion, telefonos y cuidadores asociados.
4. Crear una llamada desde un usuario para validar el flujo operativo principal.
5. Probar el flujo con otra cuenta temporal si se quiere comparar la experiencia entre operadores.
6. Revisar perfil propio, telefonos, medicacion y cuidadores desde el menu de gestion.
7. Comprobar que las zonas administrativas quedan fuera del recorrido demo actual.

## Que puede hacer un USER

El rol `USER` representa a un empleado operativo que trabaja con usuarios de teleasistencia y registra seguimiento.

| Area | Que puede hacer | Ruta principal |
| --- | --- | --- |
| Inicio | Acceder al panel de trabajo y accesos rapidos. | `/` |
| Llamadas propias | Ver las llamadas asociadas al empleado autenticado. | `/call/myCalls` |
| Llamadas de un usuario | Consultar el historico de llamadas de un usuario concreto. | `/call/userCalls/{userId}` |
| Registrar llamada | Crear una nueva llamada asociada al empleado autenticado. | `/call/add` |
| Actualizar llamada | Editar la descripcion de una llamada propia; la app conserva trazabilidad creando una nueva version con orden incrementado. | `/call/update` |
| Ver llamada | Consultar el detalle de una llamada. | `/call/view` |
| Usuarios | Listar, buscar, ordenar y paginar usuarios. | `/usuario/list` |
| Expediente de usuario | Ver datos personales, localidad, llamadas recientes o historico. | `/usuario/view/{id}` |
| Alta de usuario | Registrar nuevos usuarios de teleasistencia. | `/usuario/add` |
| Edicion de usuario | Actualizar datos del expediente. | `/usuario/update/{id}` |
| Baja de usuario | Dar de baja un usuario indicando causa y fecha. | `/usuario/delete/{id}` |
| Medicacion | Listar, buscar, ver, crear, editar y eliminar medicamentos. | `/medication/list` |
| Medicacion por usuario | Ver medicamentos asignados a un usuario, asignar existentes y desvincularlos. | `/medication/list/user/{userId}` |
| Telefonos | Listar, ver, crear, actualizar y eliminar telefonos, con validacion de duplicados y minimo un telefono por usuario. | `/phone/listPhone` |
| Cuidadores | Ver relaciones usuario-cuidador y asignar cuidadores. | `/carer/list` |
| Localidades | Consultar listado y detalle de localidades. | `/Locality/list` |
| Tipos de llamada | Consultar listado y detalle de tipos de llamada. | `/callType/list` |
| Empleados | Ver listado limitado segun permisos y consultar/editar el perfil propio. | `/employee/list`, `/employee/me/view`, `/employee/me/update` |
| Sesion | Iniciar sesion, cerrar sesion y usar el menu de perfil. | `/login`, `/logout` |

### Lo mas interesante para probar como USER

- La app diferencia entre llamadas propias y llamadas globales.
- El formulario de llamada asigna automaticamente el empleado autenticado cuando trabaja un operador.
- La ficha de usuario muestra contexto asistencial: datos personales, llamadas y accesos a medicacion.
- La gestion de telefonos protege reglas de negocio reales: no duplicar telefonos en un mismo usuario y no dejar a un usuario sin ningun telefono.
- La asignacion de cuidadores evita que una persona sea su propio cuidador.

## Que puede hacer un ADMIN

El rol `ADMIN` representa a un perfil de supervision y mantenimiento. Puede auditar informacion global y administrar catalogos o empleados.

| Area | Que puede hacer | Ruta principal |
| --- | --- | --- |
| Llamadas globales | Ver todas las llamadas registradas en el sistema. | `/call/list` |
| Eliminar llamadas | Borrar llamadas desde el listado global. | `/call/delete` |
| Usuarios | Listar, buscar, ver, crear, editar y dar de baja usuarios. | `/usuario/list` |
| Empleados | Listar todos los empleados. | `/employee/list` |
| Alta de empleado | Crear empleados con rol `USER`, `ADMIN` o `USER,ADMIN`; la app genera contrasena y puede enviar correo. | `/employee/add` |
| Edicion de empleado | Actualizar datos y roles de empleados. | `/employee/update/{username}` |
| Borrado de empleado | Eliminar empleados, con proteccion para no borrarse a si mismo. | `/employee/delete/{username}` |
| Perfil propio | Ver y editar su propia ficha. | `/employee/me/view`, `/employee/me/update` |
| Bajas | Consultar bajas registradas y ver su detalle. | `/injury/list` |
| Localidades | Crear, editar y borrar localidades, ademas de consultarlas. | `/locality/add`, `/locality/update/{id}`, `/locality/delete/{id}` |
| Tipos de llamada | Crear, editar y borrar tipos de llamada, ademas de consultarlos. | `/callType/add`, `/callType/update/{id}`, `/callType/delete/{id}` |
| Medicacion | Gestionar catalogo y asignaciones de medicacion. | `/medication/list` |
| Telefonos | Gestionar telefonos asociados a usuarios. | `/phone/listPhone` |
| Cuidadores | Consultar y asignar relaciones de cuidado. | `/carer/list` |

### Lo mas interesante para probar como ADMIN

- El listado de llamadas cambia respecto a USER: ADMIN ve la vision global.
- La gestion de empleados demuestra control de roles, validaciones de usuario/email y envio de credenciales.
- Los mantenimientos de tipos de llamada y localidades muestran CRUD administrativo clasico.
- Las bajas permiten revisar trazabilidad de usuarios dados de baja.
- El borrado de empleado impide eliminar la propia cuenta autenticada.

## Que puede hacer un USER/ADMIN

El rol `USER,ADMIN` combina capacidades operativas y administrativas. Es util para validar que Spring Security interpreta varias autoridades en una misma cuenta y que la interfaz muestra opciones de ambos mundos.

| Area | Que puede hacer | Valor para la evaluacion |
| --- | --- | --- |
| Operativa USER | Registrar llamadas, actualizar llamadas propias y trabajar con usuarios. | Comprueba que el perfil hibrido no pierde las tareas de operador. |
| Supervision ADMIN | Acceder a vistas globales y secciones administrativas. | Comprueba que la app expone acciones de administracion cuando existe autoridad ADMIN. |
| Navegacion | Ver accesos de gestion y administracion en el menu. | Permite revisar condiciones Thymeleaf + Spring Security. |
| Perfil | Ver y editar su propia ficha. | Valida experiencia comun autenticada. |

## Funcionalidades transversales

- Autenticacion con Spring Security y contrasenas BCrypt.
- Control de acceso por autoridad: `USER`, `ADMIN` y combinacion `USER,ADMIN`.
- Vistas Thymeleaf con fragmentos compartidos de layout, cabecera y footer.
- Formularios con validacion y mensajes de exito/error.
- Paginacion y busqueda en modulos como usuarios y medicacion.
- Reglas de negocio en capa de servicio/controlador para evitar estados inconsistentes.
- Despliegue local con Docker Compose para MySQL y phpMyAdmin.
- Configuracion preparada para despliegue Java en Render mediante `render.yaml`.

## Mapa rapido de modulos

| Modulo | Proposito |
| --- | --- |
| Usuarios | Expedientes de personas usuarias del servicio. |
| Llamadas | Registro de contactos, seguimiento y trazabilidad por usuario, empleado y tipo. |
| Medicamentos | Catalogo y asignacion de medicacion a usuarios. |
| Telefonos | Contactos telefonicos asociados a usuarios. |
| Cuidadores | Relaciones entre usuarios y cuidadores. |
| Empleados | Gestion de cuentas internas, perfiles y roles. |
| Localidades | Catalogo territorial para clasificar usuarios. |
| Tipos de llamada | Catalogo de motivos o categorias de llamada. |
| Bajas | Registro de usuarios dados de baja con causa y fecha. |

## Checklist de demo para reclutador senior

| Prueba | Resultado esperado |
| --- | --- |
| Login con cuenta temporal `USER` | Acceso como operador USER. |
| Ir a llamadas | Se muestran llamadas propias, no vision global. |
| Crear llamada desde usuario | Se registra una llamada ligada al empleado autenticado. |
| Editar llamada propia | Se actualiza mediante una nueva version/orden. |
| Buscar usuario | El listado responde a busqueda, orden y paginacion. |
| Ver expediente | Se ven datos asistenciales y accesos relacionados. |
| Gestionar telefono | Valida duplicados y minimo un telefono por usuario. |
| Login con otra cuenta temporal `USER` | Se contrasta la experiencia operativa con otro empleado. |
| Intentar acceder a zona administrativa | Se comprueba que la demo actual se mantiene centrada en USER. |

## Como mantener esta guia

Cada cambio funcional que se implemente debe documentarse aqui. La idea es que este archivo sea la guia viva de producto para demos tecnicas, entrevistas y revision de alcance.

Cuando se anada una funcionalidad:

1. Actualizar la tabla del rol afectado: `USER`, `ADMIN` o `USER/ADMIN`.
2. Anadir la ruta principal si existe una pantalla nueva.
3. Incluir una prueba recomendada en el checklist si aporta valor de demo.
4. Registrar el cambio en el historico inferior.

## Historico de cambios documentados

| Fecha | Cambio | Rol afectado | Donde probar |
| --- | --- | --- | --- |
| 2026-06-26 | Se retiran credenciales concretas de la guia publica para evitar publicar datos sensibles. | USER | Cuenta temporal solicitada por contacto |
| 2026-06-26 | Se limita la seccion de usuarios demo a cuentas con rol USER. | USER | Cuenta temporal solicitada por contacto |
| 2026-06-26 | Creacion de la guia rapida de funcionalidades por rol para reclutadores senior. | USER, ADMIN, USER/ADMIN | `GUIA_RAPIDA_RECLUTADOR.md` |
