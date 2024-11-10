// Instanciación de elementos de la UI
const calendarElement = document.getElementById('calendar');
const selectedDateElement = document.getElementById('selected-date');
const lessonItemsElement = document.getElementById('lesson-items');
const classForm = document.getElementById('class-form');
const editForm = document.getElementById('edit-form');
const editModal = document.getElementById('edit-modal');
const closeButton = document.querySelector('.close-button');

// Variables de estado
let lessons = []; // Array de instancias de lecciones
let curriculumUnits = []; // Unidades curriculares desde JSON
let studentList = []; // Lista de estudiantes

// Instanciar la clase Calendar
const calendar = new Calendar(calendarElement, selectedDateElement, (selectedDay) => {
    populateLessonsList(selectedDay);
});

// Inicializar el calendario
calendar.renderCalendar();

// Controladores de los botones de navegación de mes
document.getElementById('prev-month').onclick = () => {
    calendar.currentDate.setMonth(calendar.currentDate.getMonth() - 1);
    calendar.renderCalendar();
};

document.getElementById('next-month').onclick = () => {
    calendar.currentDate.setMonth(calendar.currentDate.getMonth() + 1);
    calendar.renderCalendar();
};

// Cargar unidades curriculares desde un archivo JSON
fetch('data/curriculum_units.json')
    .then(response => response.json())
    .then(data => {
        curriculumUnits = data;
        populateCurriculumDropdown();
    })
    .catch(error => console.error('Error al cargar las unidades:', error));

// Cargar alumnos desde un archivo JSON
fetch('data/students.json')
.then(response => response.json())
.then(data => {
    studentList = data;
    populateStudentsDropdown();
})
.catch(error => console.error('Error al cargar los estudiantes', error));


// Función para llenar los menús de unidades
function populateCurriculumDropdown() {
    const curriculumSelect = document.getElementById('curriculum-unit');
    const editCurriculumSelect = document.getElementById('edit-curriculum-unit');

    curriculumSelect.innerHTML = '';
    editCurriculumSelect.innerHTML = '';

    const emptyOption = document.createElement('option');
    emptyOption.value = '';
    emptyOption.textContent = 'Seleccione una unidad curricular';
    curriculumSelect.appendChild(emptyOption);

    curriculumUnits.forEach(unit => {
        const option = document.createElement('option');
        option.value = unit.id;
        option.textContent = unit.name;
        curriculumSelect.appendChild(option);

        const editOption = document.createElement('option');
        editOption.value = unit.id;
        editOption.textContent = unit.name;
        editCurriculumSelect.appendChild(editOption);
    });
}

// Función para cargar las lecciones del día seleccionado
function populateLessonsList(day) {
    lessonItemsElement.innerHTML = ''; // Limpiar lista de lecciones

    const filteredLessons = lessons.filter(lesson => lesson.date === day);
    const maxDescriptionLength = 50;

    filteredLessons.forEach(lesson => {
        const truncatedDescription = lesson.description.length > maxDescriptionLength 
            ? lesson.description.substring(0, maxDescriptionLength) + '...' 
            : lesson.description;

        // Obtener los nombres de los estudiantes asignados
        const studentNames = lesson.studentAsignado
        .map(studentId => {
            const student = studentList.find(s => s.id == studentId);
            return student ? student.name : 'Desconocido';
        })
        .join(', ');

        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Tema:</strong> ${lesson.topic} <br>
            <strong>Descripción:</strong> ${truncatedDescription} <br>
            <strong>Unidad Curricular:</strong> ${curriculumUnits.find(unit => unit.id == lesson.curriculumUnit).name}<br>
            <strong>Estudiante/s:</strong> ${studentNames} <br>
            <button onclick="populateEditForm(${lesson.id})">Editar</button>
            <button onclick="handleDeleteLesson(${lesson.id})">Eliminar</button>
        `;
        lessonItemsElement.appendChild(li);
    });
    console.log;
}

// Función para llenar el menú de estudiantes
function populateStudentsDropdown() {
    const studentSelect = document.getElementById('students-asignados');
    
    // Limpiar el dropdown antes de agregar los nuevos elementos
    studentSelect.innerHTML = '';

    // Opción "Seleccionar Todos"
    const selectAllLi = document.createElement('li');
    const selectAllCheckbox = document.createElement('input');
    selectAllCheckbox.type = 'checkbox';
    selectAllCheckbox.id = 'select-all';
    selectAllCheckbox.addEventListener('change', () => toggleSelectAll(selectAllCheckbox.checked));
    const selectAllLabel = document.createElement('label');
    selectAllLabel.setAttribute('for', 'select-all');
    selectAllLabel.textContent = 'Seleccionar Todos';
    
    const selectAllContainer = document.createElement('a');
    selectAllContainer.classList.add('dropdown-item');
    const selectAllFormCheck = document.createElement('div');
    selectAllFormCheck.classList.add('form-check');
    selectAllFormCheck.appendChild(selectAllCheckbox);
    selectAllFormCheck.appendChild(selectAllLabel);
    selectAllContainer.appendChild(selectAllFormCheck);
    selectAllLi.appendChild(selectAllContainer);
    studentSelect.appendChild(selectAllLi);

    // Crear un separador
    const hr = document.createElement('li');
    hr.innerHTML = '<hr class="dropdown-divider" />';
    studentSelect.appendChild(hr);

    // Crear los checkboxes para los estudiantes
    studentList.forEach(student => {
        const li = document.createElement('li');
        li.classList.add('dropdown-item'); // Clase para formato del item

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `student-${student.id}`;
        checkbox.name = 'students';
        checkbox.value = student.id;

        const label = document.createElement('label');
        label.htmlFor = `student-${student.id}`;
        label.textContent = student.name;

        // Añadir el checkbox y el label al li
        li.appendChild(checkbox);
        li.appendChild(label);

        // Añadir el li al dropdown
        studentSelect.appendChild(li);
    });
}

// Función para manejar el comportamiento de "Seleccionar Todos"
function toggleSelectAll(selectAllChecked) {
    const checkboxes = document.querySelectorAll('#students-asignados input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAllChecked;
    });
}


// Manejar el envío del formulario de nueva lección
classForm.onsubmit = (event) => {
    event.preventDefault();

    if (!calendar.selectedDay) {
        alert('Por favor, seleccione un día en el calendario.');
        return;
    }

    // Obtener IDs de estudiantes seleccionados
    const selectedStudents = Array.from(document.querySelectorAll('#students-asignados input[type="checkbox"]:checked'))
    .map(checkbox => checkbox.value);
    
    const newLesson = new Lesson(
        lessons.length + 1,
        calendar.selectedDay,
        document.getElementById('topic').value,
        document.getElementById('description').value,
        document.getElementById('curriculum-unit').value,
        selectedStudents
    );

    lessons.push(newLesson);
    classForm.reset();
    populateLessonsList(calendar.selectedDay);
};

// Función para llenar el formulario de edición
function populateEditForm(id) {
    const lesson = lessons.find(l => l.id === id);
    if (lesson) {
        document.getElementById('edit-topic').value = lesson.topic;
        document.getElementById('edit-description').value = lesson.description;
        document.getElementById('edit-curriculum-unit').value = lesson.curriculumUnit;
        //selectedStudents
        editModal.style.display = 'flex';
        editModal.dataset.id = id;
    }
}

// Cerrar modal de edición
closeButton.onclick = () => {
    editModal.style.display = 'none';
};

// Manejar el envío del formulario de edición
editForm.onsubmit = (event) => {
    event.preventDefault();

    const id = parseInt(editModal.dataset.id);
    const lessonIndex = lessons.findIndex(l => l.id === id);

    if (lessonIndex !== -1) {
        lessons[lessonIndex].editLesson(
            document.getElementById('edit-topic').value,
            document.getElementById('edit-description').value,
            document.getElementById('edit-curriculum-unit').value,
            document.getElementById('dropdownMenuButton').value,
            selectedStudents
        );
        populateLessonsList(calendar.selectedDay);
        editModal.style.display = 'none';
    }
};

function handleDeleteLesson(id) {
    const lesson = lessons.find(lesson => lesson.id === id);
    if (lesson) {
        const updatedLessons = lesson.deleteLesson(lessons);
        // Solo actualiza la lista si la longitud cambia, lo que indica que se eliminó un elemento
        if (updatedLessons.length !== lessons.length) {
            lessons = updatedLessons;
            populateLessonsList(calendar.selectedDay);
        }
    }
}