# Guia rapida por roles - VotaVision

## Enfoque

Esta guia esta pensada para una persona que llega por primera vez a VotaVision, especialmente un reclutador senior que quiere entender rapido que puede hacer la aplicacion, que flujos probar y que valor tecnico/producto demuestra cada rol.

VotaVision es una plataforma de encuestas con tres perfiles principales: `USER`, `CREATOR` y `ADMIN`. Cada rol tiene una experiencia diferenciada y permite evaluar autenticacion, autorizacion por permisos, gestion de datos, experiencia de usuario, personalizacion, recompensas, moderacion y visualizacion de resultados.

---

## Credenciales de demo

Para la demo publica se deja documentada una cuenta de rol `USER`, suficiente para probar el recorrido principal de usuario final.

| Perfil | Email | Contrasena | Que permite probar |
| --- | --- | --- | --- |
| USER | `demo.user@votavision.app` | `Lolaso300!` | Panel personal, encuestas activas, filtros, borrador, recompensa e historial. |

La ruta de acceso es `/login`.

---

## USER - Usuario normal

El usuario normal es el foco principal de participacion. Su experiencia esta orientada a descubrir encuestas relevantes, responderlas de forma sencilla, acumular recompensas y seguir su actividad.

### Que puede hacer

- Registrarse e iniciar sesion.
- Ver un panel personal en `/home`.
- Consultar saldo acumulado por recompensas.
- Ver encuestas respondidas, disponibles y recomendadas.
- Acceder directamente a la mejor encuesta recomendada.
- Explorar encuestas activas en `/surveys/active`.
- Filtrar encuestas por categoria, recomendadas, cierre proximo, alta recompensa y pendientes.
- Identificar tarjetas con etiquetas como `Segun tus intereses`, `Cierra pronto`, `Alta recompensa` y `Popular`.
- Responder encuestas pregunta a pregunta.
- Guardar borrador local mientras responde.
- Revisar un resumen antes de enviar.
- Recibir confirmacion con recompensa ganada y nuevo saldo.
- Continuar con una siguiente encuesta recomendada.
- Ver historial de encuestas respondidas.
- Revisar sus respuestas anteriores.
- Suscribirse a categorias de interes.
- Activar o desactivar recomendaciones.
- Recibir notificaciones de nuevas encuestas en categorias seguidas.
- Reportar encuestas inapropiadas.
- Editar datos de perfil y cambiar contrasena.

### Que deberia probar un reclutador

1. Entrar con `demo.user@votavision.app` y revisar `/home`.
2. Comprobar que el panel muestra saldo, respondidas, disponibles y recomendacion principal.
3. Ir a `/surveys/active` y probar filtros inteligentes.
4. Responder una encuesta y recargar a mitad para comprobar el borrador local.
5. Enviar la encuesta y revisar recompensa ganada, saldo total y sugerencia siguiente.
6. Entrar en historial y ver respuestas ya enviadas.
7. Cambiar suscripciones y comprobar como afectan a recomendaciones/notificaciones.

### Valor que demuestra

- Experiencia centrada en usuario final.
- Personalizacion basada en intereses.
- Retencion mediante progreso, recompensa y siguiente accion.
- Validacion de permisos y participacion unica por encuesta.
- Flujo de respuesta cuidado, con borrador y confirmacion final.
- Integracion entre backend, frontend, estado local y datos persistidos.

---

## CREATOR - Creador de encuestas

El creador representa a la persona u organizacion que necesita recopilar opiniones. Su experiencia esta orientada a crear encuestas, gestionarlas y analizar resultados.

### Que puede hacer

- Iniciar sesion con rol `CREATOR`.
- Acceder a su panel de creador.
- Crear encuestas nuevas.
- Definir titulo, descripcion, fechas, categoria y recompensa.
- Anadir preguntas de respuesta corta, larga u opcion multiple.
- Marcar preguntas como obligatorias.
- Editar encuestas propias cuando corresponde.
- Consultar sus propias encuestas en `/surveys/my`.
- Ver numero de respuestas recibidas.
- Ordenar y buscar sus encuestas.
- Consultar resultados de una encuesta.
- Ver metricas de participacion.
- Revisar resultados por pregunta.
- Eliminar encuestas propias.

### Que deberia probar un reclutador

1. Entrar como creador.
2. Crear una encuesta con varias preguntas y una recompensa.
3. Confirmar que aparece en el listado de encuestas activas para usuarios.
4. Responder esa encuesta desde una cuenta `USER`.
5. Volver como creador y revisar resultados.
6. Probar busqueda, ordenacion y gestion de encuestas propias.

### Valor que demuestra

- CRUD completo de encuestas.
- Modelado de formularios dinamicos.
- Gestion de preguntas y opciones.
- Reglas de negocio con fechas, categorias y recompensas.
- Separacion clara entre creador y usuario participante.
- Resultados agregados para toma de decisiones.

---

## ADMIN - Administrador

El administrador supervisa la plataforma. Su experiencia esta orientada a control, moderacion, gestion de usuarios y seguridad del ecosistema.

### Que puede hacer

- Iniciar sesion con rol `ADMIN`.
- Acceder al panel de administracion.
- Ver todas las encuestas visibles.
- Buscar y ordenar encuestas.
- Consultar resultados de cualquier encuesta.
- Ver detalle de encuestas.
- Eliminar encuestas como moderador indicando motivo.
- Revisar reportes enviados por usuarios.
- Descartar reportes.
- Eliminar encuestas reportadas.
- Revocar acciones de reporte cuando corresponda.
- Gestionar usuarios y creadores.
- Registrar nuevos creadores.
- Editar o eliminar usuarios segun permisos.
- Mantener la plataforma moderada y segura.

### Que deberia probar un reclutador

1. Entrar como administrador.
2. Revisar `/reports` y comprobar el flujo de moderacion.
3. Eliminar una encuesta reportada con motivo.
4. Ver la gestion global de encuestas en `/surveys/moderate`.
5. Revisar usuarios y crear una cuenta de creador.
6. Comprobar que las acciones de admin no aparecen para `USER` ni `CREATOR`.

### Valor que demuestra

- Control de acceso por rol.
- Moderacion y seguridad de contenido.
- Trazabilidad de reportes y acciones administrativas.
- Gestion de usuarios.
- Separacion de responsabilidades entre perfiles.
- Vision de producto completa, no solo pantallas aisladas.

---

## Flujos recomendados para una demo completa

### Demo corta

1. Login como `USER`.
2. Mostrar panel personal.
3. Filtrar encuestas activas.
4. Responder una encuesta.
5. Mostrar recompensa y siguiente recomendacion.

### Demo de producto

1. Login como `CREATOR`.
2. Crear una encuesta con recompensa.
3. Login como `USER`.
4. Suscribirse a la categoria de la encuesta.
5. Ver recomendacion/notificacion.
6. Responder encuesta.
7. Login como `CREATOR`.
8. Revisar resultados.

### Demo de plataforma completa

1. Crear encuesta como `CREATOR`.
2. Responder como `USER`.
3. Reportar encuesta como `USER`.
4. Revisar reporte como `ADMIN`.
5. Moderar o descartar reporte.
6. Revisar que cada rol solo ve sus acciones permitidas.

---

## Funcionalidades destacables para entrevista

- Autenticacion con JWT.
- Roles diferenciados: `USER`, `CREATOR`, `ADMIN`.
- Guards de rutas en frontend.
- Proteccion de endpoints en backend.
- Encuestas con fechas, categorias, preguntas y recompensas.
- Recomendaciones por intereses.
- Suscripciones por categoria.
- Notificaciones.
- Historial de participacion.
- Resultados agregados.
- Reportes y moderacion.
- Panel personal dinamico para usuarios.
- Filtros inteligentes para descubrimiento.
- Borrador local en flujo de respuesta.
- Recompensa visible al completar encuestas.
- Despliegue preparado para frontend y backend.

---

## Cambios documentados

### 2026-06-26

- Se documento la cuenta demo publica `demo.user@votavision.app` para validar el login USER.

### 2026-06-22

- Se documento la guia rapida por roles para recruiters y nuevos evaluadores.
- Se implemento y documento el panel personal dinamico para `USER`.
- Se implemento y documento el descubrimiento inteligente de encuestas.
- Se implemento y documento el flujo de respuesta con borrador local, recompensa visible y siguiente recomendacion.
- Se cambio la configuracion del frontend para consumir backend local en `http://localhost:8080/api` durante trabajo en `main`.

---

## Nota de mantenimiento

Cada vez que se implemente un cambio funcional, esta guia debe actualizarse en dos sitios:

- En el rol afectado, explicando que puede hacer ahora el usuario.
- En `Cambios documentados`, agregando fecha y resumen del cambio.

La intencion es que este documento funcione como una guia viva de producto y como apoyo rapido para demos, entrevistas tecnicas y revisiones de portfolio.
