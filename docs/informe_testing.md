# Informe de testing

Proyecto asignado: [[link](https://github.com/IngSoft-FIS-2024-2/proyecto-n3a-rocco-tosar-caceres)]

## Test de sistema

### Diseño de casos de prueba

[Casos De Prueba](CasosDePrueba.xlsx)

### Sesiones de pruebas exploratorias

[Manuel Perez](SesionDeTestingExploratorio-ManuelPerez.md)

[Mariano Perez](MarianoTestingExploratorio.md)

[Magdalena Danese](SesionDeTestingExploratorio-MagdalenaDanese)

## Reporte de issues

### Buenas prácticas de reporte

Reportar bugs de manera efectiva es clave para ayudar a los desarrolladores a identificar y resolver problemas rápidamente. A continuación, se detallan las buenas prácticas a seguir:

1. **Título Claro y Descriptivo**
- El título debe resumir el problema de manera precisa y concisa.

2. **Descripción del Problema**
Incluye los siguientes puntos:
- **Qué ocurre:** Describe el comportamiento observado.
- **Qué debería ocurrir:** Explica el comportamiento esperado.
- **Impacto:** Detalla cómo afecta al usuario o sistema.

3. **Pasos para Reproducir**
Proporciona instrucciones detalladas para replicar el bug:
  - Detalla cada acción específica que debe realizarse.
  - Menciona cualquier configuración o requisito previo.
  - Describe el momento en que el problema aparece.

4. **Entorno del Sistema**
Incluye información sobre el entorno donde ocurre el problema:
- **Sistema Operativo:** Versión del sistema operativo utilizado.
- **Navegador (si aplica):** Versión del navegador utilizado.
- **Dispositivo:** Tipo de dispositivo y especificaciones relevantes.
- **Versión del Software:** Versión exacta de la aplicación o sistema.

5. **Evidencias**
- Adjunta capturas de pantalla, grabaciones de pantalla o cualquier elemento visual que ayude a entender el problema.
- Incluye logs del sistema o mensajes de error relevantes, si están disponibles.

6. **Frecuencia**
- Indica si el bug ocurre siempre o es intermitente.
- Proporciona una estimación de la frecuencia si es necesario.

7. **Severidad y Prioridad**
- **Severidad:** Clasifica el problema según su impacto en el sistema.
  - Crítico: Impide el funcionamiento del sistema.
  - Mayor: Afecta funciones principales pero no bloquea completamente.
  - Menor: No afecta funciones clave.
- **Prioridad:** Establece la urgencia de la solución.
  - Alta: Requiere atención inmediata.
  - Media: Puede ser resuelto a mediano plazo.
  - Baja: Puede esperar sin afectar significativamente.

8. **Contexto Adicional**
Proporciona cualquier información adicional relevante:
- Condiciones específicas bajo las cuales ocurre el problema.
- Cambios recientes en el sistema o aplicación que podrían estar relacionados.

### Clasificación

La clasificación está basada en el impacto en la funcionalidad del sistema y la experiencia del usuario. Los bugs de alta severidad afectan la integridad de los datos o bloquean funcionalidades clave, mientras que los de media severidad impactan principalmente la experiencia del usuario.

## Informe de calidad del sistema

### Resumen de issues por tipo y severidad

## **Alta Severidad**
- **ID: BUG-PLAN001** - El sistema permite crear un plan con el campo "Nombre" vacío.
- **ID: BUG-PLAN002** - El sistema permite crear un plan con una fecha en formato inválido.
- **ID: BUG-PLAN003** - El sistema permite crear un plan con el campo "Objetivo" vacío.
- **ID: BUG-PLAN004** - El sistema permite crear un plan sin seleccionar competencias.
- **ID: BUG-PLAN005** - El sistema permite crear un plan sin seleccionar actividades.
- **ID: BUG-PLAN006** - El sistema permite crear un plan sin seleccionar un grupo.
- **ID: BUG-PLAN008** - Creación de planificación al apretar la tecla Enter.
- **ID: BUG-ANUAL001** - Falta de implementación de la funcionalidad de planificación anual.
- **ID: BUG-GROUP001** - Grupos eliminados afectan a las planificaciones asociadas.
- **ID: BUG-NIV001** - El sistema acepta un espacio como nombre.
- **ID: BUG-NIV002** - El sistema permite crear un nivel con un nombre vacío.
- **ID: BUG-NIV003** - El sistema acepta un espacio como criterio pedagógico.
- **ID: BUG-NIV004** - El sistema permite crear un nivel con el criterio pedagógico vacío.
- **ID: BUG-GRP001** - El sistema permite crear un grupo con un nombre que solo contiene un espacio.
- **ID: BUG-GRP002** - El sistema permite crear un grupo con un nombre vacío pero muestra un mensaje de error incorrecto.
- **ID: BUG-ACT001** - El sistema permite crear una actividad con un nombre con solamente un espacio y no muestra mensaje de error

## **Media Severidad**
- **ID: BUG-PERSIST002** - Los campos persisten tras la creación de una planificación.
- **ID: BUG-PERSIST001** - Los campos persisten tras la creación de una nueva actividad.
- **ID: BUG-WARN001** - Advertencias de campos obligatorios aparecen prematuramente.
- **ID: BUG-GRP003** - El sistema permite crear un grupo con una descripción que contiene solo un espacio.
- **ID: BUG-GRP004** - El sistema permite crear un grupo con el campo de descripción vacío pero genera un mensaje genérico de error.
- **ID: BUG-GRP005** - El sistema permite crear un grupo sin seleccionar el grado pero muestra un mensaje de error genérico.
- **ID: BUG-GRP006** - Sin selección de Turno.
- **ID: BUG-ACT002** - El sistema permite crear una actividad con una descripción que solo contiene un espacio y no muestra mensaje de error

 ## **Baja Severidad**
 - **ID: BUG-PLAN007** - El sistema no permite editar un plan existente.
 - **ID: BUG-EDIT001** - Falta de funcionalidad para editar elementos.
- **ID: BUG-DEL001** - Falta de funcionalidad para eliminar elementos.
- **ID: BUG-GRP007** - Actualizar Grupo.
- **ID: BUG-ACT003** - El sistema no permite editar una actividad existente
- **ID: BUG-ACT004** - El sistema no permite eliminar una actividad existente
- **ID: BUG-ACT005** - El sistema no redirige a ver la lista de actividades luego de crear una actividad

### Evaluación global de calidad

Como equipo, consideramos que el proyecto evaluado presenta una calidad aceptable, especialmente considerando las limitaciones de tiempo disponibles para su desarrollo. Durante el proceso de prueba, identificamos y reportamos los errores encontrados con el objetivo de contribuir a la mejora continua del producto y garantizar su calidad. 

## Reflexión

**Manuel:** En mi caso me parecio mucho mas valioso hacer testing exploratorio ya que el no restringirme a seguir los pasos de un caso de prueba me permitio encontrar mas bugs.

**Mariano:** Aprendi testing funcional y exploratorio fue tremenda experiencia. Me ayudó a entender mejor los sistemas, a encontrar detalles clave y a reportar problemas claros. Ahora valoro mucho más la calidad en el desarrollo.

**Magdalena:** Creo que fue interesante aprender de testing funcional y exploratorio, en lo personal centrarme en los requerimientos y crear los pasos de prueba sentí que fue lo más objetivo y ordenado para corroborar el correcto funcionamiento. Puedo ver luego de trabajar en esto que el testing es una parte fundamental del proceso de desarrollo.

### Detalle del trabajo individual

Nos dividimos el testeo por funcionalidad:

- **RF_005 Planificaciones** - Manuel 3 horas
- **RF_006 Niveles**	- Mariano 3 horas
- **RF_010 Actividad** - Magdalena 3 horas
- **RF_011 Grupos** - Mariano 2 horas
- **RF_014 Planificación anual** - Manuel 30 min
