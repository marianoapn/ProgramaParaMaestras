# Informe académico (entrega 1)

## Repositorio Git

### Repositorios locales y remotos

### Aplicación de comandos Git

## Versionado

### Buenas prácticas de versionado

El control de versiones Git permite que varias personas trabajen juntas simultáneamente en el mismo proyecto sin interferir con el trabajo de los demás.
Git integra el trabajo realizado simultáneamente por distintos miembros del equipo, también te permite acceder a las versiones anteriores de tu proyecto, esto te protege de la pérdida de datos o de fallos informáticos. 
Estas son algunas buenas prácticas para el control de versionado en git:

- **Haz pequeños cambios incrementales:** Hacer commit del código en pequeñas dosis reduce las posibilidades de que se produzcan conflictos de integración.

- **Conservar los commits atómicos:** Los commits atómicos son unidades únicas de trabajo que implican una única tarea o corrección, facilitan revisiones de código más rápidas y una reversión más sencilla ya que pueden revertirse sin efectos secundarios no deseados.

- **Desarrollo mediante branches:** El Branching (uso de branches) organiza el desarrollo y distingue entre el trabajo en curso y el código estable y probado en la rama principal.
La creación de branches garantiza que las vulnerabilidades y los errores no lleguen al código fuente y afecten a los usuarios, ya que son más fáciles de probar y encontrar en una branch.

- **Identificar una estrategia de branching:** Crear e implementar una estrategia de branching es una de las mejores prácticas de Git para gestionar la caótica experiencia de desarrollo. Algunas de las estrategias más usadas son:
    - **Bifurcación de funciones:** Su equipo podría utilizar una nueva rama para cada nueva característica sin comprometerse directamente a la rama principal.
    - **Branching personalizado:** En lugar de desarrollar en diferentes ramas por característica, es por desarrollador. Cada usuario se fusiona con la rama principal cuando termina su trabajo.
    - **Flujo de trabajo centralizado:** Tu equipo podría utilizar sólo un repositorio y confirmar directamente a la rama principal.
    - **GitFlow:** Se trata de una versión extrema de la bifurcación de características en la que el desarrollo tiene lugar en la rama de desarrollo, luego pasa a una rama de lanzamiento y finalmente se fusiona con la rama principal.

- **Escribir mensajes de confirmación descriptivos:** Redactar correctamente los mensajes de confirmación ayuda a los equipos a comprender el valor que aporta una corrección o un añadido a la línea de código existente, un mensaje de confirmación descriptivo puede ser tan importante como un cambio real.

https://aw.club/global/es/blog/git-version-control-best-practices

### Evolución del proyecto

Para esta entrega, nuestro equipo optó por una combinación de estrategias de branching personalizada y Gitflow. Cada miembro del equipo trabaja en su propia rama para implementar sus cambios. Además, hemos creado una rama de desarrollo para consolidar los cambios antes de fusionarlos. De esta manera, solo actualizaremos la rama principal (main) cuando tengamos versiones completamente finalizadas.

A continuación, se enumeran algunos de los comandos que más utilizamos, sin un orden específico:

- **git add [file] :**  Mueve los cambios del directorio de trabajo al área del entorno de ensayo.
- **git commit -m “[descriptive message]” :** Captura una instantánea de los cambios preparados en ese momento del proyecto. 
- **git pull :** Se emplea para extraer y descargar contenido desde un repositorio remoto y actualizar al instante el repositorio local para reflejar ese contenido.
- **git branch :** Muestra una lista con tus ramas 
- **git checkout :** Te permite desplazarte entre las ramas
- **git push [alias] [branch] :** Se utiliza para comunicarte con otro repositorio, calcular lo que tu base de datos local tiene que la remota no tiene, y luego subir  la diferencia al otro repositorio.

## Elicitación

### Evidencia de actividades de investigación

### Referencias a fuentes de información

### Caracterización de usuarios

### Modelo conceptual del problema

## Especificación

### Requerimientos funcionales y no funcionales

### User stories

### Use cases

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

### Técnicas aplicadas y aprendizajes
