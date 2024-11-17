import Calendar from './calendar.js'; // Importa la clase Calendar desde calendar.js
import Lesson from './lesson.js'; // Importa la clase Lesson desde lesson.js

// Instanciación de elementos de la UI
const calendarElement = document.getElementById('calendar');
const selectedDateElement = document.getElementById('selected-date');
const classForm = document.getElementById('class-form');
const editForm = document.getElementById('edit-form');
const editModal = document.getElementById('edit-modal');
const closeButton = document.querySelector('.close-button');
const closeButtonError = document.querySelector('.close-button-error');
const ContErrorOConfirm = document.getElementById('container-error-confirm');
const errorOConfirm = document.getElementById('error-confirm');
const containerLesson = document.getElementById('container-lesson');

// Variables de estado
let lessons = []; // Array de instancias de lecciones
let curriculumUnits = []; // Unidades curriculares desde JSON
let studentList = []; // Lista de estudiantes

// Instanciar la clase Calendar
const calendar = new Calendar(
  calendarElement,
  selectedDateElement,
  (selectedDay) => {
    populateLessonsList(selectedDay);
  }
);

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
  .then((response) => response.json())
  .then((data) => {
    curriculumUnits = data;
    populateCurriculumDropdown();
  })
  .catch((error) => console.error('Error al cargar las unidades:', error));

// Cargar alumnos desde un archivo JSON
function loadAlumnos() {
  fetch('data/students.json')
    .then((response) => response.json())
    .then((data) => {
      studentList = data;
      populateStudentsDropdown('students-asignados');
    })
    .catch((error) => console.error('Error al cargar los estudiantes', error));
}

//returna
function getSelectedStudents(id) {
  const selectedStudents = Array.from(
    document.querySelectorAll('#' + id + ' input[type="checkbox"]:checked')
  ).map((checkbox) => checkbox.value);

  return selectedStudents;
}

// Función para llenar los menús de unidades
function populateCurriculumDropdown() {
  const curriculumSelect = document.getElementById('curriculum-unit');
  const editCurriculumSelect = document.getElementById('edit-curriculum-unit');

  curriculumSelect.innerHTML = '';
  editCurriculumSelect.innerHTML = '';

  const emptyOption = createElemento('option', {
    value: '',
    textContent: 'Seleccione una unidad curricular',
  });
  curriculumSelect.appendChild(emptyOption);

  curriculumUnits.forEach((unit) => {
    const option = createElemento('option', {
      value: unit.id,
      textContent: unit.name,
    });

    curriculumSelect.appendChild(option);

    const editOption = createElemento('option', {
      value: unit.id,
      textContent: unit.name,
    });
    editCurriculumSelect.appendChild(editOption);
  });
}

// Función para cargar las lecciones del día seleccionado
function populateLessonsList(day) {
  containerLesson.innerHTML = ''; // Limpiar lista de lecciones

  const filteredLessons = lessons.filter((lesson) => lesson.date === day);
  const maxDescriptionLength = 50;

  filteredLessons.forEach((lesson) => {
    const truncatedDescription =
      lesson.description.length > maxDescriptionLength
        ? lesson.description.substring(0, maxDescriptionLength) + '...'
        : lesson.description;

    // Obtener los nombres de los estudiantes asignados
    const studentNames = lesson.studentAsignado
      .map((studentId) => {
        const student = studentList.find((s) => s.id == studentId);
        return student ? student.name : 'Desconocido';
      })
      .join(', ');

    const div = createElemento('div', { id: 'lesson-list' }, [
      'container',
      'mt-5',
      'bg-white',
      'p-3',
      'shadow-sm',
      'rounded',
    ]);
    const ul = createElemento('ul', { id: 'lesson-items' }, [
      'list-group',
      'mt-3',
    ]);
    const li = createElemento('li');

    li.style.listStyleType = 'none';
    li.innerHTML = `
            <strong>Tema:</strong> ${lesson.topic} <br>
            <strong>Descripción:</strong> ${truncatedDescription} <br>
            <strong>Unidad Curricular:</strong> ${curriculumUnits.find((unit) => unit.id == lesson.curriculumUnit).name}<br>
            <strong>Estudiante/s:</strong> ${studentNames} <br>
            <button onclick= 'populateEditForm(${lesson.id})' class= 'btn btn-primary p-2'>Editar</button>
            <button onclick= 'handleDeleteLesson(${lesson.id})' class= 'btn btn-primary p-2'>Eliminar</button>
        `;

    div.appendChild(ul);
    ul.appendChild(li);
    containerLesson.appendChild(div);
  });
}

// Función para llenar el menú de estudiantes
function populateStudentsDropdown(id) {
  const studentSelect = document.getElementById(id);

  // Limpiar el dropdown antes de agregar los nuevos elementos
  studentSelect.innerHTML = '';

  //checkbox de seleccion todos
  const selectAllLi = createElemento('li');
  const selectAllCheckbox = createElemento('input', {
    type: 'checkbox',
    id: 'select-all',
  });
  const selectAllLabel = createElemento('label', {
    for: 'select-all',
    textContent: 'Seleccionar Todos',
  });

  allCheckStudents(selectAllCheckbox, id);

  const selectAllContainer = createElemento('a', {}, ['dropdown-item']);

  const selectAllFormCheck = createElemento('div', {}, ['form-check']);

  selectAllFormCheck.appendChild(selectAllCheckbox);
  selectAllFormCheck.appendChild(selectAllLabel);
  selectAllContainer.appendChild(selectAllFormCheck);
  selectAllLi.appendChild(selectAllContainer);
  studentSelect.appendChild(selectAllLi);

  // Crear los checkboxes para los estudiantes
  const liElements = checkboxeStudents();

  liElements.forEach((li) => {
    studentSelect.appendChild(li);
  });
}

//funcion para seleccionar todos los estudiantes
function allCheckStudents(elementbox, id) {
  elementbox.addEventListener('change', () =>
    toggleSelectAll(elementbox.checked, id)
  );
}

// Crear los checkboxes para los estudiantes
function checkboxeStudents() {
  return studentList.map((student) => {
    const li = createElemento('li', {}, ['dropdown-item']);
    const checkbox = createElemento('input', {
      id: `student-${student.id}`,
      type: 'checkbox',
      name: 'students',
      value: student.id,
    });
    const label = createElemento('label', {
      for: `student-${student.id}`,
      textContent: student.name,
    });

    // Añadir el checkbox y el label al li
    li.appendChild(checkbox);
    li.appendChild(label);

    return li;
  });
}

// Función para manejar el comportamiento de 'Seleccionar Todos'
function toggleSelectAll(selectAllChecked, id) {
  const checkboxes = document.querySelectorAll(
    '#' + id + ' input[type="checkbox"]'
  );
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAllChecked;
  });
}

// Manejar el envío del formulario de nueva lección
classForm.onsubmit = (event) => {
  event.preventDefault();
  const div = createElemento('div', {}, [
    'container',
    'w-50',
    'mt-5',
    'bg-white',
    'p-3',
    'shadow-sm',
    'rounded',
    'text-center',
  ]);

  if (!calendar.selectedDay) {
    showErrorMessage('Por favor, seleccione un día en el calendario.');
    return;
  }

  if (getSelectedStudents('students-asignados').length > 0) {
    div.style.display = 'none';

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
  } else {
    showErrorMessage('Error, por favor seleccione al menos un estudiante');
  }
};

// Función para llenar el formulario de edición
function populateEditForm(id) {
  const lesson = lessons.find((l) => l.id === id);
  if (lesson) {
    document.getElementById('edit-topic').value = lesson.topic;
    document.getElementById('edit-description').value = lesson.description;
    document.getElementById('edit-curriculum-unit').value =
      lesson.curriculumUnit;
    populateStudentsDropdown('edit-students-asignados');

    editModal.style.display = 'flex';
    editModal.dataset.id = id;
  }
}

// Cerrar modal de edición
closeButton.onclick = () => {
  editModal.style.display = 'none';
};

//cerrar error
closeButtonError.onclick = () => {
  ContErrorOConfirm.style.display = 'none';
};

// Manejar el envío del formulario de edición
editForm.onsubmit = (event) => {
  event.preventDefault();

  const id = parseInt(editModal.dataset.id);
  const lessonIndex = lessons.findIndex((l) => l.id === id);

  const selectedStudents = getSelectedStudents('edit-students-asignados');

  if (selectedStudents.length > 0) {
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
  } else {
    showErrorMessage('Error, por favor seleccione al menos un estudiante');
  }
};

// Función para eliminar una lección
function handleDeleteLesson(id) {
  const lesson = lessons.find((lesson) => lesson.id === id);
  if (lesson) {
    showErrorMessage('¿Estás seguro de que quieres eliminar este plan de clase?');
    const buttonCancelar = createElemento('button' , {type: 'button', textContent: 'CANCELAR'} , ['btn', 'btn-primary']);
    const buttonDelete = createElemento('button' , {type: 'button', textContent: 'ACEPTAR'} , ['btn', 'btn-primary']);
    const divButton = createElemento('div', {}, ['d-flex' , 'justify-content-between' ,'mt-4']);
    errorOConfirm.appendChild(divButton);
    divButton.appendChild(buttonCancelar);
    divButton.appendChild(buttonDelete);

    buttonCancelar.onclick = () => {
      ContErrorOConfirm.style.display = 'none';
    };
    buttonDelete.onclick = () => {
      const updatedLessons = lesson.deleteLesson(lessons);
      // Solo actualiza la lista si la longitud cambia, lo que indica que se eliminó un elemento
      if (updatedLessons.length !== lessons.length) {
        lessons = updatedLessons;
        populateLessonsList(calendar.selectedDay);
      }
      ContErrorOConfirm.style.display = 'none';
      /*const updatedLessons = lesson.deleteLesson(lessons);
      // Solo actualiza la lista si la longitud cambia, lo que indica que se eliminó un elemento
      if (updatedLessons.length !== lessons.length) {
        lessons = updatedLessons;
        populateLessonsList(calendar.selectedDay);
      }*/
    };
  }
}

function showErrorMessage(message) {
  ContErrorOConfirm.style.display = 'flex';
  errorOConfirm.innerHTML = message;
}

function createElemento(tagElem, atributos = {}, clas = []) {
  const element = document.createElement(tagElem);
  if (clas.length > 0) {
    element.classList.add(...clas);
  }
  for (const [key, value] of Object.entries(atributos)) {
    element.setAttribute(key, value);
  }

  if (atributos.textContent) {
    element.textContent = atributos.textContent;
  }

  return element;
}

loadAlumnos();

window.populateEditForm = populateEditForm;
window.handleDeleteLesson = handleDeleteLesson;
