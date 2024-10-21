# Informe académico (entrega 1)

## Repositorio Git

Para esta entrega, nuestro equipo eligio usar una combinación de estrategias de branching personalizada, bifurcacion de funciones y Gitflow. Cada miembro del equipo trabaja en su propia rama para implementar sus cambios y, posteriormente, sube estos cambios a la rama de la funcionalidad correspondiente. Finalmente, hemos establecido una rama de desarrollo para consolidar estos cambios. De este modo, solo actualizaremos la rama principal (main) cuando tengamos versiones completamente finalizadas.

A continuación, se enumeran algunos de los comandos que más utilizamos, sin un orden específico:

- **git add [file] :**  Mueve los cambios del directorio de trabajo al área del entorno de ensayo.
- **git commit -m “[descriptive message]” :** Captura una instantánea de los cambios preparados en ese momento del proyecto. 
- **git pull :** Se emplea para extraer y descargar contenido desde un repositorio remoto y actualizar al instante el repositorio local para reflejar ese contenido.
- **git branch :** Muestra una lista con tus ramas 
- **git checkout :** Te permite desplazarte entre las ramas
- **git push [alias] [branch] :** Se utiliza para comunicarte con otro repositorio, calcular lo que tu base de datos local tiene que la remota no tiene, y luego subir  la diferencia al otro repositorio.

## Versionado

### Buenas prácticas de versionado

El control de versiones Git permite que varias personas trabajen juntas simultáneamente en el mismo proyecto sin interferir con el trabajo de los demás.
Git integra el trabajo realizado simultáneamente por distintos miembros del equipo, también te permite acceder a las versiones anteriores de tu proyecto, esto te protege de la pérdida de datos o de fallos informáticos. 
Estas son algunas buenas prácticas para el control de versionado en git:

- **Haz pequeños cambios incrementales:** Hacer commit del código en pequeñas dosis reduce las posibilidades de que se produzcan conflictos de integración.

- **Conservar los commits atómicos:** Los commits atómicos son unidades únicas de trabajo que implican una única tarea o corrección, facilitan revisiones de código más rápidas y una reversión más sencilla ya que pueden revertirse sin efectos secundarios no deseados.

- **Desarrollo mediante branches:** El Branching (uso de branches) organiza el desarrollo y distingue entre el trabajo en curso y el código estable y probado en la rama principal.
La creación de branches garantiza que las vulnerabilidades y los errores no lleguen al código fuente y afecten a los usuarios, ya que son más fáciles de probar y encontrar en una branch.

- **Identificar una estrategia de branching:** Crear e implementar una estrategia de branching es una de las mejores prácticas de Git para gestionar la experiencia de desarrollo. Algunas de las estrategias más usadas son:
    - **Bifurcación de funciones:** Se utiliza una nueva rama para cada nueva característica sin comprometerse directamente a la rama principal.
    - **Branching personalizado:** En lugar de desarrollar en diferentes ramas por característica, es por desarrollador. Cada usuario se fusiona con la rama principal cuando termina su trabajo.
    - **Flujo de trabajo centralizado:** Tu equipo podría utilizar sólo un repositorio y confirmar directamente a la rama principal.
    - **GitFlow:** Se trata de una versión extrema de la bifurcación de características en la que el desarrollo tiene lugar en la rama de desarrollo, luego pasa a una rama de lanzamiento y finalmente se fusiona con la rama principal.

- **Escribir mensajes de confirmación descriptivos:** Redactar correctamente los mensajes de confirmación ayuda a los equipos a comprender el valor que aporta una corrección o un añadido a la línea de código existente, un mensaje de confirmación descriptivo puede ser tan importante como un cambio real.

**Fuentes de Informacion**

[Buenas prácticas de control de versiones Git
](https://aw.club/global/es/blog/git-version-control-best-practices).


### Evolución del proyecto

<img src="ImagenesLogs\GitLog1.jpg" alt="Imagen GIT log 1">

<img src="ImagenesLogs\GitLog2.jpg" alt="Imagen Git log 2">

## Elicitación

### Evidencia de actividades de investigación

Podemos acceder a la entrevista realizada, y a su resumen en los siguientes apartados:

- [Transcripción](docs/Entrevista_transcripcion.md)
- [Entrevista resumen](docs/Entrevista_resumen.md)

Además se puede ver el relevamiento de la herramienta existente Guri en el siguiente apartado [Relevamiento Guri](Relevamiento_Herramientas_Mercado.md)
y las imágenes de esa aplicación en este otro
[Imágenes Guri](ImagenesRelevamientoMercado)

### Técnicas aplicadas y aprendizajes

Dentro de las técnicas dadas en clase: Entrevistas, Cuestionarios, Ingeniería inversa, Análisis de documentos, tormenta de ideas, User Personas, Observación, Workshops, entre otras.

Elegimos trabajar con las siguientes técnicas:

- Entrevistas: Que consiste en preguntas libres de contexto y con contexto. Elegimos esta técnica, ya que es la manera más eficiente para intercambiar ideas con los interesados/usuarios. Además, permiten obtener información más cualitativa y profunda, lo que ayuda a identificar necesidades no evidentes. También el alcance es menor y más realista a nuestras posibilidades de contactos.

- Análisis de GUI (Ingeniería Reversa): Es una técnica de elicitación independiente que implica examinar un sistema en el cual ya tenga alguna de las soluciones para tu sistema. Elegimos esta técnica porque es fácil aplicarla en otros sistemas/app/sitios web e identificar requisitos que necesitaríamos para nuestra app. Aplicaríamos la misma en la página ["Guri"](https://guri2.ceip.edu.uy/GuriFamiliaAppWeb/) y en la página de la [ORT](https://aulas.ort.edu.uy/).

- Análisis de documentos: El análisis de la documentación implica examinar toda la documentación existente para detectar potenciales requerimientos. Elegimos esta técnica porque, al tener detallado el programa en la web de [ANEP](https://www.anep.edu.uy/programas-ebi-2023-2023), permite identificar las normas, exigencias y pensar en posibles requerimientos para el software.

- Tormenta de ideas:  La tormenta de ideas es una técnica grupal para generar ideas originales en un ambiente relajado. Es útil cuando se desea liberar la creatividad de los equipos, generar un número extenso de ideas, involucrar a un número importante de personas en el proceso. Esta técnica la elegimos ya que es necesario fomentar la creatividad para generar ideas sobre los requerimientos, el funcionamiento del sistema y el diseño del mismo. Además, esta técnica facilita la colaboración y ayuda a seleccionar las ideas más viables para su implementación.

- User Persona: Consiste en crear usuarios ficticios a los cuales se les inventa una vida, habilidades y aptitudes. La idea es que esos usuarios se acerquen lo más posible a un usuario real que utilizaría el sistema. Esta técnica fue elegida ya que es una buena manera de imaginar al usuario y cómo podría utilizar el sistema con sus capacidades y necesidades, lo que ayuda a diseñar una interfaz y funcionalidades alineadas con sus expectativas y limitaciones.

### Referencias a fuentes de información

**Fuentes de Información**

**ANEP (2022).** Programas de Educación Básica Integrada. Este documento establece las bases para la planificación educativa.

**ANEP (2022).** Marco Curricular Nacional. Proporciona información sobre las competencias generales y específicas que deben desarrollarse, así como las progresiones de aprendizaje.

[ANEP - Programas EBI 2023](https://www.anep.edu.uy/programas-ebi-2023-2023)

[Guri Aplicación](https://guri2.ceip.edu.uy/GuriFamiliaAppWeb)

[ORT Aulas](https://aulas.ort.edu.uy)


**Investigación del Problema**

Una buena planificación es fundamental para el proceso de enseñanza y aprendizaje. Los Programas de Educación Básica Integrada (EBI) de la ANEP son una clara referencia que permite a las maestras desarrollar propuestas educativas. Sin embargo, existen varios desafíos a la hora de planificar las clases:

- **Falta de herramientas adecuadas:** Muchas maestras no cuentan con las herramientas necesarias para facilitar la planificación y el seguimiento de los temas dados. Esto puede resultar en un manejo ineficiente del tiempo y dificulta la evaluación del progreso de los alumnos.
- **Carga administrativa:** La planificación suele convertirse en una tarea agotadora debido a la carga administrativa que conlleva fuera del horario de clases. Esta situación puede afectar la calidad de la enseñanza y generar estrés en las maestras.

**Usuarios Afectados**
- **Maestras:** Principales responsables de la planificación y ejecución de las clases.
- **Alumnos:** Se ven directamente impactados por la calidad de la enseñanza.
- **Padres de Alumnos:** Interesados en el progreso académico de sus hijos.
- **Administradores Educativos:** Encargados de supervisar y evaluar la calidad de la educación.

**Objetivos de la Investigación**

- **Analizar las Dificultades:** Identificar las dificultades que enfrentan las maestras al planificar sus clases.
- **Identificar Herramientas y Recursos:** Evaluar las herramientas y recursos actualmente utilizados para la planificación, sus beneficios y áreas de mejora.
- **Proponer un Sistema de Software:** Desarrollar un sistema de software que permita una planificación de clases sencilla y eficiente, alineada con los planes establecidos por ANEP.


### Caracterización de usuarios

[User Personas](/docs/User_persona_V3.pdf)

### Modelo conceptual del problema

<img src="ImagenModeloConceptual\ModeloConceptual.png" alt="Modelo Conceptual App">


## Especificación

### Requerimientos funcionales y no funcionales

#### Requerimientos funcionales:

- **Usuarios:**
	- **Usu1:** El sistema debe permitir la creacion de Usuario Maestra.
	- **Usu2:** El sistema debe permitir la creacion de Usuario Responsable de Alumno.
	- **Usu3:** El sistema debe permitir modificar la contraseña.
	- **Usu4:** El sistema debe permitir la eliminacion de Usuarios.
	- **Usu5:** El sistema debe permitir la autenticación de los usuarios mediante correo electrónico.
	- **Usu6:** El sistema debe permitir la recuperación de contraseñas en caso de olvido.
	- **Usu7:** El sistema debe permitir cerrar usuario.

- **Usuario Maestra:**
	- **UsuMaestra1:** El sistema debe permitir a los usuarios maestra crear los planes de clase.
	- **UsuMaestra2:** El sistema debe permitir a los usuarios maestra editar los planes de clase.
	- **UsuMaestra3:** El sistema debe permitir a los usuarios maestra eliminar los planes de clase, 
	- **UsuMaestra4:** El sistema debe permitir a los usuarios maestra vincular una clase a las unidades curriculares correspondientes de ANEP.
	- **UsuMaestra5:** El sistema debe permitir a los usuarios maestra agregar a un calendario los planes de clase.
	- **UsuMaestra6:** El sistema debe permitir a los usuarios maestra visualizar la informacion de los alumnos asignados.
	- **UsuMaestra7:** El sistema debe permitir a los usuarios maestra asignar unidades personalizadas a los alumnos asignados.
	- **UsuMaestra8:** El sistema debe permitir a los usuarios maestra visualizar su información personal.
	

- **Usuario Responsable del alumno :**
	- **UsuRespons1:** El sistema debe permitir a los usuarios responsable del alumno visualizar su información personal
	- **UsuRespons2:** El sistema debe permitir a los usuarios responsable del alumno visualizar el calendario de actividades asignadas por la maestra.
	- **UsuRespons3:** El sistema debe permitir a los usuarios responsable del alumno recibir notificaciones sobre modificaciones en los planes de clase o actividades nuevas.

 #### Requerimientos no funcionales:

- **Seguridad:**
	- **Seg1:** Los datos personales de los alumnos deberán ser accesibles únicamente por la maestra asignada a cada grupo, conforme a la Ley de Protección de Datos Personales.
	- **Seg2:** Debe garantizarse que los usuarios puedan acceder y modificar solo la información que les corresponde, según su rol en el sistema.


- **Responsive:**
	- **Resp1:** La aplicación debe ser compatible con las versiones más recientes de los navegadores Chrome, Firefox y Safari.
	- **Resp2:** La interfaz debe ser totalmente responsiva, adaptándose correctamente a dispositivos móviles como smartphones y tabletas.


- **Rendimiento:**
	- **Ren1:** El sistema debe ser capaz de manejar grandes cantidades de usuarios y planes de clase sin experimentar una disminución significativa en su rendimiento.


- **Escalabilidad:**
	- **Esc1:** El sistema debe estar diseñado para ser escalable, permitiendo la adición de nuevas funcionalidades o módulos sin una reestructuración significativa.


- **Usabilidad:**
	- **Usa1:** La aplicación debe seguir las heurísticas de usabilidad de Nielsen, asegurando una experiencia de usuario eficiente y agradable.


- **Accesibilidad:**
	- **Acc1:** La aplicación debe cumplir con las pautas de accesibilidad WCAG 2.2, para garantizar que personas con diferentes tipos de discapacidades puedan usar el sistema sin problemas.



### User stories

1) 
    **Título:** Verificar el Plan de Clase

    **Como:** Responsable del alumno

    **Quiero:** Consultar el plan de una clase específica

    **Para:** Conocer los contenidos, objetivos y actividades programadas para esa clase, y así poder prepararme adecuadamente.

    **Criterios de aceptación:**

    - El responsable puede acceder al calendario con las clases programadas.
    - El sistema permite al responsable seleccionar una clase específica para ver el plan correspondiente.
    - El plan de clase muestra los contenidos, objetivos y actividades programadas para esa clase.

2) 
    **Título:** Crear un Plan de Clase

    **Como:** Maestra

    **Quiero:** Crear un nuevo plan de clase

    **Para:** Establecer los objetivos, contenidos y actividades a desarrollar en una clase específica.

    **Criterios de aceptación:**

    - La maestra puede acceder a la sección de creación de planes de clase.
    - El sistema permite a la maestra ingresar títulos, objetivos, contenidos y actividades.
    - La maestra puede guardar el plan de clase y recibir una confirmación de que se ha creado correctamente.

3) 
    **Título:** Recibir Notificaciones de Cambios

    **Como:** Responsable del alumno

    **Quiero:** Recibir notificaciones sobre modificaciones en los planes de clase

    **Para:** Estar al tanto de cualquier cambio que afecte a mi hijo.

    **Criterios de aceptación:**

    - El responsable puede recibir notificaciones a través de correo electrónico o en la aplicación.
    - Las notificaciones incluyen detalles sobre el cambio realizado.
    - El responsable puede acceder al plan de clase actualizado desde la notificación.

4) 
    **Título:** Editar Plan de Clase

    **Como:** Maestra

    **Quiero:** Editar un plan de clase existente

    **Para:** Realizar ajustes según sea necesario, como añadir actividades o cambiar objetivos.

    **Criterios de aceptación:**

    - La maestra puede seleccionar un plan de clase existente para editar.
    - El sistema permite modificar el contenido del plan y guardar los cambios.
    - Se muestra un mensaje de confirmación una vez que se han guardado los cambios.

5) 
    **Título:** Ver Información de Alumnos

    **Como:** Maestra

    **Quiero:** Visualizar la información de los alumnos asignados a mi clase

    **Para:** Conocer sus progresos y personalizar la enseñanza según sus necesidades.

    **Criterios de aceptación:**

    - La maestra puede acceder a una lista de los alumnos asignados a su clase.
    - El sistema muestra información relevante sobre cada alumno, como calificaciones y asistencia.
    - La maestra puede filtrar la información por diferentes criterios.


### Use cases

1) 
    **Título:** Verificar el Plan de Clase

    **Actor principal:** Responsable del alumno

    **Precondiciones:** El responsable ha iniciado sesión en la aplicación con un usuario del tipo responsable.

    **Flujo principal:**

    1) El sistema muestra el calendario con las clases programadas.
    2) El responsable selecciona una clase específica del calendario.
    3) El sistema muestra el plan de clase correspondiente, incluyendo contenidos, objetivos y actividades programadas.
    4) El responsable revisa la información del plan de clase.

    **Flujos alternativos:**

    - **Clase no encontrada:** Si el responsable selecciona una clase que no existe (por error), el sistema muestra un mensaje de error indicando que la clase no se encuentra.
    - **Sin conexión:** Si hay un problema de conexión al intentar recuperar el plan de clase, el sistema muestra un mensaje de error y le permite al alumno intentar nuevamente.

    **Postcondiciones:** El alumno ha revisado el plan de clase y tiene acceso a la información actualizada.

2) 
    **Título:** Crear un Plan de Clase

    **Actor principal:** Maestra

    **Precondiciones:** La maestra ha iniciado sesión en la aplicación.

    **Flujo principal:**

    1) La maestra selecciona el dia en el cual quiere crear un nuevo plan de clase
    2) La maestra selecciona la opción de "Crear Plan de Clase".
    3) El sistema presenta un formulario para ingresar los detalles del plan.
    4) La maestra completa el formulario con el título, objetivos, contenidos y actividades.
    5) La maestra guarda el plan de clase.
    6) El sistema muestra un mensaje de confirmación de creación exitosa.

    **Flujos alternativos:**

    - **Error en el formulario:** Si la maestra no completa todos los campos obligatorios, el sistema muestra un mensaje de error indicando qué campos son necesarios.

    **Postcondiciones:** El nuevo plan de clase está guardado en el sistema y disponible para su visualización.

3) 
    **Título:** Editar un Plan de Clase

    **Actor principal:** Maestra

    **Precondiciones:** La maestra ha iniciado sesión en la aplicación y tiene un plan de clase existente.

    **Flujo principal:**

    1) La maestra accede al calendario.
    2) La maestra selecciona el dia con el plan que desea editar.
    3) El sistema carga la información del plan.
    4) La maestra selecciona editar plan.
    5) La maestra realiza los cambios necesarios y guarda el plan.
    6) El sistema muestra un mensaje de confirmación de que el plan ha sido editado.

    **Flujos alternativos:**

    - **No se pueden guardar los cambios:** Si hay un problema al guardar (por ejemplo, conexión a Internet), el sistema muestra un mensaje de error y sugiere intentar nuevamente.

    **Postcondiciones:** El plan de clase editado está actualizado en el sistema.

4) 
    **Título:** Recuperar Contraseña

    **Actor principal:** Maestra o Responsable del alumno

    **Precondiciones:** El usuario ha olvidado su contraseña.

    **Flujo principal:**

    1) El usuario selecciona la opción "Recuperar Contraseña" en la pantalla de login.
    2) El sistema solicita la dirección de correo electrónico asociada al usuario.
    3) El usuario ingresa su correo electrónico y envía la solicitud.
    4) El sistema envía un enlace de recuperación al correo electrónico proporcionado.
    5) El usuario sigue el enlace y establece una nueva contraseña.

    **Flujos alternativos:**

    - **Correo electrónico no registrado:** Si el correo electrónico ingresado no está asociado a ningún usuario, el sistema muestra un mensaje de error.

    **Postcondiciones:** El usuario ha recuperado su contraseña y puede iniciar sesión con la nueva contraseña.

5) 
    **Título:** Cerrar Sesión en la Aplicación

    **Actor principal:** Maestra o Responsable del alumno

    **Precondiciones:** El usuario ha iniciado sesión en la aplicación.

    **Flujo principal:**

    1) El usuario selecciona la opción "Cerrar Sesión" en el menú de la aplicación.
    2) El sistema muestra un mensaje de confirmación para asegurarse de que el usuario desea cerrar sesión.
    3) El usuario confirma que desea cerrar sesión.
    4) El sistema cierra la sesión del usuario y redirige a la pantalla de inicio de sesión.
    5) El sistema muestra un mensaje de confirmación de que la sesión ha sido cerrada exitosamente.

    **Flujos alternativos:**

    - **Cancelar cierre de sesión:** Si el usuario decide no cerrar sesión, el sistema vuelve a la pantalla anterior sin realizar cambios.

    **Postcondiciones:** El usuario ha cerrado sesión y no tiene acceso a la aplicación hasta que inicie sesión nuevamente.

### Bocetos de IU

## Checkpoint obligatorio 1

Incluir un resumen del avance en elicitación y especificación de requerimientos
Se evaluará de acuerdo al grado de avance

## Validación y verificación

### Verificación

### Validación

## Reflexión

**Manuel Perez:** Disfrute mucho hacer este trabajo con Mariano y Magui, ambos son muy buenos compañeros y muy responsables, nos dividimos de forma muy pareja las distintas tareas aprovechando siempre las virtudes de cada uno.
Adquiri muchos conocimientos muy valiosos a lo largo de este proyecto que estoy seguro que me van a ayudar mucho en mi vida profesional como desarrollador.
Si tengo que destacar algo de todo lo que aprendi seria el manejo de Git, ya habia trabajado con otras herramientas de control de version pero ahora tengo un mejor entendimiento de como funcionan y porque se usan. Sin ir mas lejos ya pude aplicar lo aprendido en un proyecto interno en mi trabajo asi que estoy muy contento de haber adquirido ese conocimiento.

### Detalle del trabajo individual

Detallar: fecha, actividad, horas, responsable
Incluir totales de esfuerzo

### Técnicas aplicadas y aprendizajes







