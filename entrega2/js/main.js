import Calendar from './calendar.js'; // Importa la clase Calendar desde calendar.js
import Lesson from './lesson.js'; // Importa la clase Lesson desde lesson.js

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
>>>>>>> entrega3

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
<<<<<<< HEAD
  },
=======
  }
>>>>>>> entrega3
);

// Inicializar el calendario
calendar.renderCalendar();

// Controladores de los botones de navegación de mes
<<<<<<< HEAD
document.getElementById("prev-month").onclick = () => {
=======
document.getElementById('prev-month').onclick = () => {
>>>>>>> entrega3
  calendar.currentDate.setMonth(calendar.currentDate.getMonth() - 1);
  calendar.renderCalendar();
};

<<<<<<< HEAD
document.getElementById("next-month").onclick = () => {
=======
document.getElementById('next-month').onclick = () => {
>>>>>>> entrega3
  calendar.currentDate.setMonth(calendar.currentDate.getMonth() + 1);
  calendar.renderCalendar();
};

// Cargar unidades curriculares desde un archivo JSON
<<<<<<< HEAD
fetch("data/curriculum_units.json")
=======
fetch('data/curriculum_units.json')
>>>>>>> entrega3
  .then((response) => response.json())
  .then((data) => {
    curriculumUnits = data;
    populateCurriculumDropdown();
<<<<<<< HEAD
  })
  .catch((error) => console.error("Error al cargar las unidades:", error));

// Cargar alumnos desde un archivo JSON
function loadAlumnos() {
  fetch("data/students.json")
    .then((response) => response.json())
    .then((data) => {
      studentList = data;
      populateStudentsDropdown("students-asignados");
      populateStudentsDropdown("edit-students-asignados");
    })
    .catch((error) => console.error("Error al cargar los estudiantes", error));
}

//returna
function getSelectedStudents(id) {
  // Obtener IDs de estudiantes seleccionados
  return (selectedStudents = Array.from(
    document.querySelectorAll("#" + id + ' input[type="checkbox"]:checked'),
  ).map((checkbox) => checkbox.value));
=======
  });

// Cargar alumnos desde un archivo JSON
function loadAlumnos() {
  fetch('data/students.json')
    .then((response) => response.json())
    .then((data) => {
      studentList = data;
      populateStudentsDropdown('students-asignados');
    });
}

function getSelectedStudents(id) {
  const selectedStudents = Array.from(
    document.querySelectorAll('#' + id + ' input[type="checkbox"]:checked')
  ).map((checkbox) => checkbox.value);

  return selectedStudents;
>>>>>>> entrega3
}

// Función para llenar los menús de unidades
function populateCurriculumDropdown() {
<<<<<<< HEAD
  const curriculumSelect = document.getElementById("curriculum-unit");
  const editCurriculumSelect = document.getElementById("edit-curriculum-unit");

  curriculumSelect.innerHTML = "";
  editCurriculumSelect.innerHTML = "";

  const emptyOption = document.createElement("option");
  emptyOption.value = "";
  emptyOption.textContent = "Seleccione una unidad curricular";
  curriculumSelect.appendChild(emptyOption);

  curriculumUnits.forEach((unit) => {
    const option = document.createElement("option");
    option.value = unit.id;
    option.textContent = unit.name;
    curriculumSelect.appendChild(option);

    const editOption = document.createElement("option");
    editOption.value = unit.id;
    editOption.textContent = unit.name;
=======
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
>>>>>>> entrega3
    editCurriculumSelect.appendChild(editOption);
  });
}

// Función para cargar las lecciones del día seleccionado
function populateLessonsList(day) {
<<<<<<< HEAD
  containerLesson.innerHTML = ""; // Limpiar lista de lecciones
=======
  containerLesson.innerHTML = ''; // Limpiar lista de lecciones
>>>>>>> entrega3

  const filteredLessons = lessons.filter((lesson) => lesson.date === day);
  const maxDescriptionLength = 50;

  filteredLessons.forEach((lesson) => {
    const truncatedDescription =
      lesson.description.length > maxDescriptionLength
<<<<<<< HEAD
        ? lesson.description.substring(0, maxDescriptionLength) + "..."
        : lesson.description;

    // Obtener los nombres de los estudiantes asignados
    const studentNames = lesson.studentAsignado
      .map((studentId) => {
        const student = studentList.find((s) => s.id == studentId);
        return student ? student.name : "Desconocido";
      })
      .join(", ");

    const div = createElemento(
      "div",
      "lesson-list",
      "container",
      "mt-5",
      "bg-white",
      "p-3",
      "shadow-sm",
      "rounded",
    );

    const ul = createElemento("ul", "lesson-items", "list-group", "mt-3");

    const li = createElemento("li");
    li.style.listStyleType = "none";
=======
        ? lesson.description.substring(0, maxDescriptionLength) + '...'
        : lesson.description;

    let studentNames = lesson.studentAsignado
      .map((studentId) => {
        const student = studentList.find((s) => s.id == studentId);
        return student ? student.name : 'Desconocido';
      })
      .join(', ');

    // Verificar si contiene 'Desconocido' y asignar 'Toda la clase' si es el caso
    if (studentNames.includes('Desconocido')) {
      studentNames = 'Toda la clase';
    }

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
>>>>>>> entrega3
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

function populateStudentsDropdown(id) {
  const studentSelect = document.getElementById(id);

  // Limpiar el dropdown antes de agregar los nuevos elementos
<<<<<<< HEAD
  studentSelect.innerHTML = "";

  // Opción "Seleccionar Todos"
  const selectAllLi = document.createElement("li");
  const selectAllCheckbox = document.createElement("input");
  selectAllCheckbox.type = "checkbox";
  selectAllCheckbox.id = "select-all";
  selectAllCheckbox.addEventListener("change", () =>
    toggleSelectAll(selectAllCheckbox.checked, id),
  );
  const selectAllLabel = document.createElement("label");
  selectAllLabel.setAttribute("for", "select-all");
  selectAllLabel.textContent = "Seleccionar Todos";

  const selectAllContainer = document.createElement("a");
  selectAllContainer.classList.add("dropdown-item");
  const selectAllFormCheck = document.createElement("div");
  selectAllFormCheck.classList.add("form-check");
  selectAllFormCheck.appendChild(selectAllCheckbox);
  selectAllFormCheck.appendChild(selectAllLabel);
  selectAllContainer.appendChild(selectAllFormCheck);
  selectAllLi.appendChild(selectAllContainer);
  studentSelect.appendChild(selectAllLi);

  // Crear un separador
  const hr = document.createElement("li");
  hr.innerHTML = '<hr class="dropdown-divider" />';
  studentSelect.appendChild(hr);

  // Crear los checkboxes para los estudiantes
  studentList.forEach((student) => {
    const li = document.createElement("li");
    li.classList.add("dropdown-item"); // Clase para formato del item

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `student-${student.id}`;
    checkbox.name = "students";
    checkbox.value = student.id;

    const label = document.createElement("label");
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
function toggleSelectAll(selectAllChecked, id) {
  const checkboxes = document.querySelectorAll(
    "#" + id + ' input[type="checkbox"]',
  );
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAllChecked;
  });
}

// Manejar el envío del formulario de nueva lección
classForm.onsubmit = (event) => {
  event.preventDefault();

  if (!calendar.selectedDay) {
    alert("Por favor, seleccione un día en el calendario.");
    return;
  }

  const newLesson = new Lesson(
    lessons.length + 1,
    calendar.selectedDay,
    document.getElementById("topic").value,
    document.getElementById("description").value,
    document.getElementById("curriculum-unit").value,
    getSelectedStudents("students-asignados"),
  );

  lessons.push(newLesson);
  classForm.reset();
  populateLessonsList(calendar.selectedDay);
=======
  studentSelect.innerHTML = '';

  // Agregar el checkbox de "Seleccionar Todos"
  const selectAllCheckbox = createElemento('input', {
    type: 'checkbox',
    id: `${id}-select-all`,
  });
  const selectAllLabel = createElemento('label', {
    for: `${id}-select-all`,
    textContent: 'Toda la clase',
  });

  const selectAllContainer = createElemento('div', {}, [
    'checkbox-dropdown-item',
  ]);
  selectAllContainer.appendChild(selectAllCheckbox);
  selectAllContainer.appendChild(selectAllLabel);

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

  // Crear los checkboxes para los estudiantes
  studentList.forEach((student) => {
    const studentCheckbox = createElemento('input', {
      id: `${id}-student-${student.id}`,
      type: 'checkbox',
      value: student.id,
    });
    const studentLabel = createElemento('label', {
      for: `${id}-student-${student.id}`,
      textContent: student.name,
    });

    const studentContainer = createElemento('div', {}, [
      'checkbox-dropdown-item',
    ]);
    studentContainer.appendChild(studentCheckbox);
    studentContainer.appendChild(studentLabel);

    studentSelect.appendChild(studentContainer);
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
>>>>>>> entrega3
};

// Función para llenar el formulario de edición
function populateEditForm(id) {
  const lesson = lessons.find((l) => l.id === id);
  if (lesson) {
<<<<<<< HEAD
    document.getElementById("edit-topic").value = lesson.topic;
    document.getElementById("edit-description").value = lesson.description;
    document.getElementById("edit-curriculum-unit").value =
      lesson.curriculumUnit;
    getSelectedStudents("edit-students-asignados");
    editModal.style.display = "flex";
=======
    document.getElementById('edit-topic').value = lesson.topic;
    document.getElementById('edit-description').value = lesson.description;
    document.getElementById('edit-curriculum-unit').value =
      lesson.curriculumUnit;
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

//cerrar error
closeButtonError.onclick = () => {
  ContErrorOConfirm.style.display = 'none';
>>>>>>> entrega3
};

// Manejar el envío del formulario de edición
editForm.onsubmit = (event) => {
  event.preventDefault();

  const id = parseInt(editModal.dataset.id);
  const lessonIndex = lessons.findIndex((l) => l.id === id);

<<<<<<< HEAD
  if (lessonIndex !== -1) {
    lessons[lessonIndex].editLesson(
      document.getElementById("edit-topic").value,
      document.getElementById("edit-description").value,
      document.getElementById("edit-curriculum-unit").value,
      getSelectedStudents("edit-students-asignados"),
    );
    populateLessonsList(calendar.selectedDay);
    editModal.style.display = "none";
=======
  const selectedStudents = getSelectedStudents('edit-students-asignados');
  const validIndex = -1;
  if (selectedStudents.length > 0) {
    if (lessonIndex !== validIndex) {
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
>>>>>>> entrega3
  }
};

// Función para eliminar una lección
function handleDeleteLesson(id) {
  const lesson = lessons.find((lesson) => lesson.id === id);
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
    const buttonCancelar = createElemento(
      'button',
      { type: 'button', textContent: 'CANCELAR' },
      ['btn', 'btn-primary']
    );
    const buttonDelete = createElemento(
      'button',
      { type: 'button', textContent: 'ACEPTAR' },
      ['btn', 'btn-primary']
    );
    const divButton = createElemento('div', {}, [
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
      const updatedLessons = lesson.deleteLesson(lessons);
      // Solo actualiza la lista si la longitud cambia, lo que indica que se eliminó un elemento
      if (updatedLessons.length !== lessons.length) {
        lessons = updatedLessons;
        populateLessonsList(calendar.selectedDay);
      }
      ContErrorOConfirm.style.display = 'none';
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
>>>>>>> entrega3
