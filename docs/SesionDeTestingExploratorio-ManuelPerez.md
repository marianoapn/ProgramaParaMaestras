# Sesión de Testing Exploratorio

### Misión

Esta es una sesión general donde se va a probar el flujo completo de la aplicación, este es la creación de un nuevo nivel, un nuevo grupo una nueva actividad y una nueva planificación utilizando los elementos creados anteriormente.

### Tester

**Manuel Perez**

### Inicio | Fin

**01-12-2024 10:30 - 11:15**

### División de Tareas

- **Diseño y ejecución de pruebas:** 45%
- **Reporte de investigación de defectos:** 50%
- **Armado de la sesión:** 5%

### Misión vs Oportunidad

**40% / 60%**

### Notas de Pruebas

- Crear un nuevo nivel.
- Crear un nuevo grupo.
- Crear una nueva actividad.
- Crear una nueva planificación.


### Observaciones
Una posible mejora en la creación de nivel es que luego de crear el nivel se vuelva a la lista con todos los niveles por conveniencia del usuario.
También note que si la advertencia de que los campos son obligatorios aparece ya con hacerle click en un campo que no sea el nombre, debería esperar a que el usuario intente crear un nivel para que aparezcan estas advertencias.
Estas mismas observaciones se pueden hacer para la creación de un grupo.
Lo mismo para crear una nueva actividad, pero también se puede agregar que los campos Tramo, Grado, Espacio curricular, Unidad curricular y Niveles no vuelven a estar vacíos cuando se crea la nueva actividad.
Las mismas observaciones se aplican para la creación de una nueva planificación y se le agrega que si uno aprieta la tecla enter se creará la planificación por más que el usuario no haya completado todos los campos. Los campos que no vuelven a estar vacíos en este caso son Competencias, Actividades y Grupos.
Como observación adicional ninguno de estos elementos puede ser editado y quitando a los grupos ninguno puede ser eliminado. Si uno elimina un grupo que ya tenía asociado un plan este plan sigue apareciendo en la lista de planes pero sin grupo.

### Incidentes

1. **Redirección después de crear un elemento**:
   - Luego de crear un nuevo elemento, el sistema no redirige automáticamente a la lista correspondiente (niveles, grupos, planes, actividades).

2. **Advertencias de campos obligatorios aparecen prematuramente**:
   - La advertencia de campos obligatorios aparece inmediatamente al hacer clic en un campo vacío (excepto el nombre). Estas advertencias deberían mostrarse solo al intentar crear un elemento sin completar los campos requeridos.

3. **Persistencia de campos tras la creación de una actividad**:
   - En la creación de actividades, los campos **Grado**, **Espacio Curricular**, **Unidad Curricular** y **Niveles** no se vacían tras crear una actividad.

4. **Creación de planificación al presionar Enter**:
   - El sistema intenta crear una planificación al presionar la tecla Enter, incluso si los campos requeridos están incompletos.

5. **Persistencia de campos tras la creación de una planificación**:
   - Los campos **Competencias**, **Actividades** y **Grupos** no se vacían tras crear una planificación.

6. **Falta de funcionalidad para editar elementos**:
   - Ninguno de los elementos (niveles, actividades, planificaciones) puede ser editado.

7. **Falta de funcionalidad para eliminar elementos**:
   - Ninguno de los elementos (niveles, actividades, planificaciones) puede ser eliminado, excepto los grupos.

8. **Grupos eliminados afectan a las planificaciones asociadas**:
   - Si se elimina un grupo asociado a un plan, este sigue apareciendo en la lista de planificaciones, pero sin grupo asignado.

### Inconvenientes
Ninguno.
