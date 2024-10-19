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

Además se puede ver el relevamiento de la herramienta existente Guri en el siguiente apartado [Relevamiento Guri](docs/Relevamiento_Herramientas_Mercado.md)
y las imágenes de esa aplicación en este otro
[Imágenes Guri](docs/ImagenesRelevamientoMercado.md)

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

[User Personas](/docs/User_persona_V2.pdf)

### Modelo conceptual del problema

## Especificación

### Requerimientos funcionales y no funcionales

**Requerimientos funcionales:**
- **Usuarios:** El sistema debe permitir la creacion, edicion y eliminacion de usuarios tanto para maestras como para alumnos.
- **Planificación:** Los usuarios maestras deben poder crear, editar y eliminar planes de clase, vinculándolos a las unidades curriculares correspondientes y agregarlos a un calendario.
- **Visualización:** Los usuarios deben poder visualizar sus planes de clase en un calendario.

**Requerimientos no funcionales:**
- **Usabilidad:** La interfaz del sistema debe ser intuitiva y permitir que los usuarios puedan realizar sus tareas sin necesidad de estar familiarizados con la tecnologia.
- **Seguridad:** Los datos personales de los alumnos deberán ser accesibles únicamente por la maestra asignada a cada grupo.
- **Compatibilidad:** La aplicación debe funcionar en las versiones más recientes de los navegadores Chrome, Firefox y Safari.

### User stories

**Título:** Verificar el Plan de Clase

**Como:** Alumno

**Quiero:** Consultar el plan de una clase específica

**Para:** Conocer los contenidos, objetivos y actividades programadas para esa clase, y así poder prepararme adecuadamente.

**Criterios de aceptación:**

- El alumno puede acceder al calendario con las clases programadas.
- El sistema permite al alumno seleccionar una clase específica para ver el plan correspondiente.
- El plan de clase muestra los contenidos, objetivos y actividades programadas para esa clase.

### Use cases

**Título:** Verificar el Plan de Clase

**Actor principal:** Alumno

**Precondiciones:** El alumno ha iniciado sesión en la aplicación con un usuario del tipo alumno.

**Flujo principal:**

- El sistema muestra el calendario con las clases programadas.
- El alumno selecciona una clase específica del calendario.
- El sistema muestra el plan de clase correspondiente, incluyendo contenidos, objetivos y actividades programadas.
- El alumno revisa la información del plan de clase.

**Flujos alternativos:**

- **Clase no encontrada:** Si el alumno selecciona una clase que no existe (por error), el sistema muestra un mensaje de error indicando que la clase no se encuentra.
- **Sin conexión:** Si hay un problema de conexión al intentar recuperar el plan de clase, el sistema muestra un mensaje de error y le permite al alumno intentar nuevamente.

**Postcondiciones:** El alumno ha revisado el plan de clase y tiene acceso a la información actualizada.



### Bocetos de IU

## Checkpoint obligatorio 1

Incluir un resumen del avance en elicitación y especificación de requerimientos
Se evaluará de acuerdo al grado de avance

## Validación y verificación

### Verificación

### Validación

## Reflexión

### Detalle del trabajo individual

Detallar: fecha, actividad, horas, responsable
Incluir totales de esfuerzo







