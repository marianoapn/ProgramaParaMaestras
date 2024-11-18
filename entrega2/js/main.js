import Calendar from './calendar.js'; // Importa la clase Calendar
import Controller from './uiController.js'; // Importa el Controller
import Calendar from './calendar.js'; // Importa la clase Calendar
import Controller from './uiController.js'; // Importa el Controller

// Instanciación de elementos de la UI
<<<<<<< HEAD
const calendarElement = document.getElementById("calendar");
const selectedDateElement = document.getElementById("selected-date");
//const lessonItemsElement = document.getElementById('lesson-items');
const classForm = document.getElementById("class-form");
const editForm = document.getElementById("edit-form");
const editModal = document.getElementById("edit-modal");
const closeButton = document.querySelector(".close-button");
const containerLesson = document.getElementById("container-lesson");
=======
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

// Instanciación del Controller
const uiController = new Controller();

// Inicializar el calendario
// Instanciación del Controller
const uiController = new Controller();

// Inicializar el calendario
const calendar = new Calendar(
  calendarElement,
  selectedDateElement,
  (selectedDay) => {
    populateLessonsList(selectedDay); // Poblar la lista de lecciones al seleccionar un día
    populateLessonsList(selectedDay); // Poblar la lista de lecciones al seleccionar un día
  }
>>>>>>> entrega3
);
calendar.renderCalendar();

// Cargar datos de unidades curriculares y alumnos
async function init() {
  await uiController.loadUnits(); // Cargar unidades curriculares
  populateCurriculumDropdown(); // Llenar el dropdown de unidades curriculares

  await uiController.loadAlumnos(); // Cargar estudiantes
  populateStudentsDropdown('students-asignados'); // Llenar el dropdown de estudiantes
}

init();

// Cargar datos de unidades curriculares y alumnos
async function init() {
  await uiController.loadUnits(); // Cargar unidades curriculares
  populateCurriculumDropdown(); // Llenar el dropdown de unidades curriculares

  await uiController.loadAlumnos(); // Cargar estudiantes
  populateStudentsDropdown('students-asignados'); // Llenar el dropdown de estudiantes
}

init();

// Controladores de los botones de navegación de mes
<<<<<<< HEAD
document.getElementById("prev-month").onclick = () => {
=======
document.getElementById('prev-month').onclick = () => {
  calendar.currentDate.setMonth(calendar.currentDate.getMonth() - 1); // Retroceder un mes
  calendar.currentDate.setMonth(calendar.currentDate.getMonth() - 1); // Retroceder un mes
  calendar.renderCalendar();
};

<<<<<<< HEAD
document.getElementById("next-month").onclick = () => {
=======
document.getElementById('next-month').onclick = () => {
  calendar.currentDate.setMonth(calendar.currentDate.getMonth() + 1); // Avanzar un mes
  calendar.currentDate.setMonth(calendar.currentDate.getMonth() + 1); // Avanzar un mes
  calendar.renderCalendar();
};

// Función para obtener los estudiantes seleccionados
// Función para obtener los estudiantes seleccionados
function getSelectedStudents(id) {
  return Array.from(
    document.querySelectorAll(`#${id} input[type="checkbox"]:checked`)
  return Array.from(
    document.querySelectorAll(`#${id} input[type="checkbox"]:checked`)
  ).map((checkbox) => checkbox.value);
}

// Función genérica para poblar dropdowns
function populateDropdown(selectId, items, getItemLabel, getItemValue) {
  const selectElement = document.getElementById(selectId);
  selectElement.innerHTML = '';

  // Opción predeterminada
  const emptyOption = createElement('option', {
    value: '',
    textContent: 'Seleccione una unidad curricular'
  });
  selectElement.appendChild(emptyOption);

  items.forEach((item) => {
    const option = createElement('option', {
      value: getItemValue(item),
      textContent: getItemLabel(item),
    });
    selectElement.appendChild(option);
  });
}

// Función para poblar el dropdown de unidades curriculares
function populateCurriculumDropdown() {
  const curriculumUnits = uiController.getCurriculumUnits();
  populateDropdown(
    'curriculum-unit',
    curriculumUnits,
    (unit) => unit.name,
    (unit) => unit.id
  );
  populateDropdown(
    'edit-curriculum-unit',
    curriculumUnits,
    (unit) => unit.name,
    (unit) => unit.id
  );
}

// Función para poblar el dropdown de estudiantes
function populateStudentsDropdown(id) {
  const students = uiController.getStudentsList();

  // Crear checkbox para "Seleccionar Todos"
  const selectAllCheckbox = createElement('input', {
    type: 'checkbox',
    id: `${id}-select-all`,
  });
  const selectAllLabel = createElement('label', {
    for: `${id}-select-all`,
    textContent: 'Toda la clase',
  });

  const selectAllContainer = createElement('div', {}, [
    'checkbox-dropdown-item',
  ]);
  selectAllContainer.appendChild(selectAllCheckbox);
  selectAllContainer.appendChild(selectAllLabel);

  const studentSelect = document.getElementById(id);
  studentSelect.innerHTML = '';
  studentSelect.appendChild(selectAllContainer);

  // Evento para manejar "Seleccionar Todos"
  selectAllCheckbox.addEventListener('change', () => {
    const checkboxes = studentSelect.querySelectorAll(
      'input[type="checkbox"]:not(#' + `${id}-select-all` + ')'
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAllCheckbox.checked;
    });
  });

  // Crear checkbox para cada estudiante
  students.forEach((student) => {
    const studentCheckbox = createElement('input', {
      id: `${id}-student-${student.id}`,
      type: 'checkbox',
      value: student.id,
    });
    const studentLabel = createElement('label', {
      for: `${id}-student-${student.id}`,
      textContent: student.name,
    });

    const studentContainer = createElement('div', {}, [
      'checkbox-dropdown-item',
    ]);
    studentContainer.appendChild(studentCheckbox);
    studentContainer.appendChild(studentLabel);

    studentSelect.appendChild(studentContainer);
  });
}

// Función para cargar las lecciones del día seleccionado
function populateLessonsList(day) {
  containerLesson.innerHTML = ''; // Limpiar lista de lecciones

  const filteredLessons = uiController.getLessonsByDay(day);
  const curriculumUnits = uiController.getCurriculumUnits();
  const studentsList = uiController.getStudentsList();

  let lessonsHTML = '';
  filteredLessons.forEach((lesson) => {
    const curriculumUnitName = curriculumUnits.find(
      (unit) => unit.id == lesson.getCurriculumUnit()
    ).name;
    let studentNames = lesson
      .getStudentAsignado()
      .map((studentId) => {
        const student = studentsList.find((s) => s.id == studentId);
        return student ? student.name : 'Desconocido';
      })
      .join(', ');

    // Verificar si contiene 'Desconocido' y asignar 'Toda la clase' si es el caso
    if (studentNames.includes('Desconocido')) {
      studentNames = 'Toda la clase';
    }
    const maxDescriptionLenght = 50;
    const truncatedDescription =
      lesson.getDescription().length > maxDescriptionLenght
        ? lesson.getDescription().substring(0, maxDescriptionLenght) + '...'
        : lesson.getDescription();

    lessonsHTML += `
      <div class="container mt-5 bg-white p-3 shadow-sm rounded" id="lesson-list">
        <ul class="list-group mt-3" id="lesson-items">
          <li style="list-style-type: none;">
            <strong>Tema:</strong> ${lesson.getTopic()} <br>
            <strong>Descripción:</strong> ${truncatedDescription} <br>
            <strong>Unidad Curricular:</strong> ${curriculumUnitName}<br>
            <strong>Estudiante/s:</strong> ${studentNames} <br>
            <button onclick='populateEditForm(${lesson.getId()})' class='btn btn-primary p-2'>Editar</button>
            <button onclick='handleDeleteLesson(${lesson.getId()})' class='btn btn-primary p-2'>Eliminar</button>
          </li>
        </ul>
      </div>
    `;
  });

  containerLesson.innerHTML = lessonsHTML;
}

// Manejar el envío del formulario de nueva lección
classForm.onsubmit = (event) => {
  event.preventDefault();

  if (!calendar.selectedDay) {
    showErrorMessage('Por favor, seleccione un día en el calendario.');
    return;
  }

  if (getSelectedStudents('students-asignados').length > 0) {
    uiController.createLesson(
      uiController.getLessons().length + 1,
    uiController.createLesson(
      uiController.getLessons().length + 1,
      calendar.selectedDay,
      document.getElementById('topic').value,
      document.getElementById('description').value,
      document.getElementById('curriculum-unit').value,
      getSelectedStudents('students-asignados')
    );
    classForm.reset();
    populateLessonsList(calendar.selectedDay);
  } else {
    showErrorMessage('Error, por favor seleccione al menos un estudiante');
  }
>>>>>>> entrega3
};

// Función para llenar el formulario de edición
function populateEditForm(id) {
  const lesson = uiController.getLessonsById(id);
  const lesson = uiController.getLessonsById(id);
  if (lesson) {
    document.getElementById('edit-topic').value = lesson.getTopic();
    document.getElementById('edit-description').value = lesson.getDescription();
    document.getElementById('edit-curriculum-unit').value =
      lesson.getCurriculumUnit();
    populateStudentsDropdown('edit-students-asignados');

    editModal.style.display = 'flex';
>>>>>>> entrega3
    editModal.dataset.id = id;
  }
}

// Cerrar modal de edición
closeButton.onclick = () => {
<<<<<<< HEAD
  editModal.style.display = "none";
=======
  editModal.style.display = 'none';
};

// Cerrar error
// Cerrar error
closeButtonError.onclick = () => {
  ContErrorOConfirm.style.display = 'none';
>>>>>>> entrega3
};

// Manejar el envío del formulario de edición
editForm.onsubmit = (event) => {
  event.preventDefault();

  const id = parseInt(editModal.dataset.id);
  const lessonIndex = uiController.getLessonIndexById(id);
  const lessonIndex = uiController.getLessonIndexById(id);

  const selectedStudents = getSelectedStudents('edit-students-asignados');
  if (selectedStudents.length > 0) {
    uiController.editLessonByIndex(
      lessonIndex,
      document.getElementById('edit-topic').value,
      document.getElementById('edit-description').value,
      document.getElementById('edit-curriculum-unit').value,
      selectedStudents
    );
    populateLessonsList(calendar.selectedDay);
    editModal.style.display = 'none';
    uiController.editLessonByIndex(
      lessonIndex,
      document.getElementById('edit-topic').value,
      document.getElementById('edit-description').value,
      document.getElementById('edit-curriculum-unit').value,
      selectedStudents
    );
    populateLessonsList(calendar.selectedDay);
    editModal.style.display = 'none';
  } else {
    showErrorMessage('Error, por favor seleccione al menos un estudiante');
>>>>>>> entrega3
  }
};

// Función para eliminar una lección
function handleDeleteLesson(id) {
  const lesson = uiController.getLessonsById(id);
  const lesson = uiController.getLessonsById(id);
  if (lesson) {
<<<<<<< HEAD
    const updatedLessons = lesson.deleteLesson(lessons);
    // Solo actualiza la lista si la longitud cambia, lo que indica que se eliminó un elemento
    if (updatedLessons.length !== lessons.length) {
      lessons = updatedLessons;
      populateLessonsList(calendar.selectedDay);
    }
  }
}

function createElemento(tagElem, id = "", ...clas) {
  const element = document.createElement(tagElem);
  if (id) {
    element.id = id;
  }
  if (clas.length > 0) {
    element.classList.add(...clas);
  }
  return element;
}

loadAlumnos();
=======
    showErrorMessage(
      '¿Estás seguro de que quieres eliminar este plan de clase?'
    );
    const buttonCancelar = createElement(
    const buttonCancelar = createElement(
      'button',
      { type: 'button', textContent: 'CANCELAR' },
      ['btn', 'btn-primary']
    );
    const buttonDelete = createElement(
    const buttonDelete = createElement(
      'button',
      { type: 'button', textContent: 'ACEPTAR' },
      ['btn', 'btn-primary']
    );
    const divButton = createElement('div', {}, [
    const divButton = createElement('div', {}, [
      'd-flex',
      'justify-content-between',
      'mt-4',
    ]);
    errorOConfirm.appendChild(divButton);
    divButton.appendChild(buttonCancelar);
    divButton.appendChild(buttonDelete);

    buttonCancelar.onclick = () => {
      ContErrorOConfirm.style.display = 'none';
    };
    buttonDelete.onclick = () => {
      uiController.deleteLesson(lesson);
      populateLessonsList(calendar.selectedDay);
      uiController.deleteLesson(lesson);
      populateLessonsList(calendar.selectedDay);
      ContErrorOConfirm.style.display = 'none';
    };
  }
}

// Función para mostrar mensajes de error
// Función para mostrar mensajes de error
function showErrorMessage(message) {
  ContErrorOConfirm.style.display = 'flex';
  errorOConfirm.innerHTML = message;
}

// Función para crear un elemento del DOM
function createElement(tagElem, atributos = {}, clas = []) {
// Función para crear un elemento del DOM
function createElement(tagElem, atributos = {}, clas = []) {
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

window.populateEditForm = populateEditForm;
window.handleDeleteLesson = handleDeleteLesson;
>>>>>>> entrega3
