import Calendar from "./calendar.js";
import Lesson from "./lesson.js";

// Instanciación de elementos de la UI
const calendarElement = document.getElementById("calendar");
const selectedDateElement = document.getElementById("selected-date");
const lessonItemsElement = document.getElementById("lesson-items");
const classForm = document.getElementById("class-form");
const editForm = document.getElementById("edit-form");
const editModal = document.getElementById("edit-modal");
const closeButton = document.querySelector(".close-button");

// Variables de estado
let lessons = []; // Array de instancias de lecciones
let curriculumUnits = []; // Unidades curriculares desde JSON

// Instanciar la clase Calendar
const calendar = new Calendar(
  calendarElement,
  selectedDateElement,
  (selectedDay) => {
    populateLessonsList(selectedDay);
  },
);

// Inicializar el calendario
calendar.renderCalendar();

// Controladores de los botones de navegación de mes
document.getElementById("prev-month").onclick = () => {
  calendar.currentDate.setMonth(calendar.currentDate.getMonth() - 1);
  calendar.renderCalendar();
};

document.getElementById("next-month").onclick = () => {
  calendar.currentDate.setMonth(calendar.currentDate.getMonth() + 1);
  calendar.renderCalendar();
};

// Cargar unidades curriculares desde un archivo JSON
fetch("data/curriculum_units.json")
  .then((response) => response.json())
  .then((data) => {
    curriculumUnits = data;
    populateCurriculumDropdown();
  })
  .catch((error) => console.error("Error al cargar las unidades:", error));

// Función para llenar los menús de unidades
function populateCurriculumDropdown() {
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
    editCurriculumSelect.appendChild(editOption);
  });
}

// Función para cargar las lecciones del día seleccionado
function populateLessonsList(day) {
  lessonItemsElement.innerHTML = ""; // Limpiar lista de lecciones

  const filteredLessons = lessons.filter((lesson) => lesson.date === day);
  const maxDescriptionLength = 50;

  filteredLessons.forEach((lesson) => {
    const truncatedDescription =
      lesson.description.length > maxDescriptionLength
        ? lesson.description.substring(0, maxDescriptionLength) + "..."
        : lesson.description;

    const li = document.createElement("li");
    li.innerHTML = `
            <strong>Tema:</strong> ${lesson.topic} <br>
            <strong>Descripción:</strong> ${truncatedDescription} <br>
            <strong>Unidad Curricular:</strong> ${curriculumUnits.find((unit) => unit.id == lesson.curriculumUnit).name}<br>
            <button onclick="populateEditForm(${lesson.id})">Editar</button>
            <button onclick="handleDeleteLesson(${lesson.id})">Eliminar</button>
        `;
    lessonItemsElement.appendChild(li);
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
  );

  lessons.push(newLesson);
  classForm.reset();
  populateLessonsList(calendar.selectedDay);
};

// Función para llenar el formulario de edición
// eslint-disable-next-line no-unused-vars
function populateEditForm(id) {
  const lesson = lessons.find((l) => l.id === id);
  if (lesson) {
    document.getElementById("edit-topic").value = lesson.topic;
    document.getElementById("edit-description").value = lesson.description;
    document.getElementById("edit-curriculum-unit").value =
      lesson.curriculumUnit;
    editModal.style.display = "flex";
    editModal.dataset.id = id;
  }
}

// Cerrar modal de edición
closeButton.onclick = () => {
  editModal.style.display = "none";
};

// Manejar el envío del formulario de edición
editForm.onsubmit = (event) => {
  event.preventDefault();

  const id = parseInt(editModal.dataset.id);
  const lessonIndex = lessons.findIndex((l) => l.id === id);

  if (lessonIndex !== -1) {
    lessons[lessonIndex].editLesson(
      document.getElementById("edit-topic").value,
      document.getElementById("edit-description").value,
      document.getElementById("edit-curriculum-unit").value,
    );
    populateLessonsList(calendar.selectedDay);
    editModal.style.display = "none";
  }
};

// eslint-disable-next-line no-unused-vars
function handleDeleteLesson(id) {
  const lesson = lessons.find((lesson) => lesson.id === id);
  if (lesson) {
    const updatedLessons = lesson.deleteLesson(lessons);
    // Solo actualiza la lista si la longitud cambia, lo que indica que se eliminó un elemento
    if (updatedLessons.length !== lessons.length) {
      lessons = updatedLessons;
      populateLessonsList(calendar.selectedDay);
    }
  }
}
