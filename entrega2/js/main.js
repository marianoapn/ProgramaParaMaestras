// Instanciación de elementos de la UI
const calendarElement = document.getElementById('calendar');
const selectedDateElement = document.getElementById('selected-date');
const classForm = document.getElementById('class-form');
const editForm = document.getElementById('edit-form');
const editModal = document.getElementById('edit-modal');
const closeButton = document.querySelector('.close-button');
const containerLesson = document.getElementById('container-lesson')

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
function loadAlumnos(){
    fetch('data/students.json')
    .then(response => response.json())
    .then(data => {
        studentList = data;
        populateStudentsDropdown('students-asignados')
        populateStudentsDropdown('edit-students-asignados');

    })
    .catch(error => console.error('Error al cargar los estudiantes', error));
}

//returna
function getSelectedStudents(id){
    // Obtener IDs de estudiantes seleccionados
    return selectedStudents = Array.from(document.querySelectorAll('#'+ id + ' input[type="checkbox"]:checked'))
    .map(checkbox => checkbox.value);                                                                                                                                                                                                                                
}

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
    containerLesson.innerHTML = ''; // Limpiar lista de lecciones

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

        const div = createElemento('div', 'lesson-list', ['container', 'mt-5', 'bg-white', 'p-3', 'shadow-sm', 'rounded']);
        const ul = createElemento('ul','lesson-items',['list-group', 'mt-3']);
        const li = createElemento('li');
        
        li.style.listStyleType = 'none';
        li.innerHTML = `
            <strong>Tema:</strong> ${lesson.topic} <br>
            <strong>Descripción:</strong> ${truncatedDescription} <br>
            <strong>Unidad Curricular:</strong> ${curriculumUnits.find(unit => unit.id == lesson.curriculumUnit).name}<br>
            <strong>Estudiante/s:</strong> ${studentNames} <br>
            <button onclick= "populateEditForm(${lesson.id})" class= "btn btn-primary p-2">Editar</button>
            <button onclick= "handleDeleteLesson(${lesson.id})" class= "btn btn-primary p-2">Eliminar</button>
        `;

        div.appendChild(ul)
        ul.appendChild(li);
        containerLesson.appendChild(div);
    });
}

// Función para llenar el menú de estudiantes
function populateStudentsDropdown(id) {
    const studentSelect = document.getElementById(id);
    
    // Limpiar el dropdown antes de agregar los nuevos elementos
    studentSelect.innerHTML = '';

    // Opción "Seleccionar Todos"
    const selectAllLi = document.createElement('li');
    const selectAllCheckbox = document.createElement('input');
    selectAllCheckbox.type = 'checkbox';
    selectAllCheckbox.id = 'select-all';
    selectAllCheckbox.addEventListener('change', () => toggleSelectAll(selectAllCheckbox.checked, id));
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
        const li = createElemento('li',
            id ='',
            ['dropdown-item']);
        //li.classList.add('dropdown-item'); // Clase para formato del item

        const checkbox = createElemento('input',
            `student-${student.id}`,
            [], 
            {type : 'checkbox',name : 'students', value : student.id}
        );
        //checkbox.type = 'checkbox';
        //checkbox.id = `student-${student.id}`;
        //checkbox.name = 'students';
        //checkbox.value = student.id;

        const label = createElemento('label',
            id='',
            [],
            {htmlFor : `student-${student.id}`, textContent : student.name}

        );
        //label.htmlFor = `student-${student.id}`;
        //label.textContent = student.name;

        // Añadir el checkbox y el label al li
        li.appendChild(checkbox);
        li.appendChild(label);

        // Añadir el li al dropdown
        studentSelect.appendChild(li);
    });
}

// Función para manejar el comportamiento de "Seleccionar Todos"
function toggleSelectAll(selectAllChecked , id) {
    const checkboxes = document.querySelectorAll('#' + id + ' input[type="checkbox"]');
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
       
    const newLesson = new Lesson(
        lessons.length + 1,
        calendar.selectedDay,
        document.getElementById('topic').value,
        document.getElementById('description').value,
        document.getElementById('curriculum-unit').value,
        getSelectedStudents('students-asignados')
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
        getSelectedStudents('edit-students-asignados');
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
            getSelectedStudents('edit-students-asignados')
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

function createElemento(tagElem, id = '', clas = [], atributos = {}) {
    const element = document.createElement(tagElem)
    if(id){
        element.id = id
    }
    if(clas.length > 0){
        element.classList.add(...clas)
    }
    for (const [key, value] of Object.entries(atributos)) {
        element.setAttribute(key, value);
    }
    return element
}

loadAlumnos();