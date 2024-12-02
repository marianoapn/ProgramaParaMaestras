## Testing Exploratorio Planificaciones ##

**Misión:**  
Controlar el funcionamiento del requisito. El sistema debe permitir a los docentes crear, modificar y ajustar planificaciones por día o semanales, adaptándose a las necesidades diversas de los estudiantes. La planificación debe ser adaptable a distintos niveles de aprendizaje dentro de la misma clase.

**Áreas:**  
- **Funcionalidad:** Planificaciones  
- **Dispositivo:** Lenovo laptop  
- **Estrategia:** Testing exploratorio  

**Inicio y Fin de la sesión:**  
1/12/2024 - 12:05 a 12:20  

**Tester:**  
Mariano Pérez  

**División de Tareas:**  
- Diseño y ejecución de pruebas: 75%  
- Reporte de investigación de defectos: 23%  
- Armado de la sesión: 2%  

**Misión vs Oportunidad:**  
40% / 60%  

---

### Notas de Pruebas:
1. Probar si se agrega correctamente la planificación.  
2. Probar si el sistema acepta campos vacíos.  
3. Probar si se puede modificar una planificación tras un error.  
4. Probar si se puede eliminar una planificación para evitar sobrecarga de información errónea.  
5. Verificar si, cada vez que se crea una planificación, se agrega correctamente a la sección donde se listan todas las planificaciones.  

---

### Riesgos:
- Se corre el riesgo de que el usuario sobrecargue una página al no poder borrar o editar la planificación creada. Si el sistema obliga a crear una nueva planificación y la anterior sigue existiendo sin poder eliminarse o corregirse, podría confundir aún más al usuario, aumentando la posibilidad de que se genere información errónea.  

---

### Incidentes:
- Se crea una planificación sin ningún dato ni fecha.  
- No es posible borrar una planificación.  
- No es posible editar o modificar una planificación después de su creación.  

---

### Inconvenientes:
- Ninguno.
