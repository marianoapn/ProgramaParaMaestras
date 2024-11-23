import Lesson from "./lesson.js"; // Importa la clase Lesson desde lesson.js

class Controller {
  #lessons;
  #curriculumUnits;
  #studentList;

  constructor() {
    this.setLessons([]);
    this.setCurriculumUnits([]);
    this.setStudentsList([]);
  }

  // Cargar unidades curriculares desde un archivo JSON
  loadUnits() {
    return fetch("data/curriculum_units.json")
      .then((response) => response.json())
      .then((data) => {
        this.#curriculumUnits = data;
      });
  }

  getCurriculumUnits() {
    return this.#curriculumUnits;
  }

  // Cargar alumnos desde un archivo JSON
  loadAlumnos() {
    return fetch("data/students.json")
      .then((response) => response.json())
      .then((data) => {
        this.#studentList = data;
      });
  }
  setStudentsList(studentList) {
    this.#studentList = studentList;
  }

  setCurriculumUnits(curriculumUnits) {
    this.#curriculumUnits = curriculumUnits;
  }

  setLessons(lessons) {
    this.#lessons = lessons;
  }

  getStudentsList() {
    return this.#studentList;
  }

  getLessons() {
    return this.#lessons;
  }

  getLessonsByDay(day) {
    return this.getLessons().filter((lesson) => lesson.getDate() === day);
  }

  createLesson(id, date, topic, description, curriculumUnit, studentAsignado) {
    const newLesson = new Lesson(
      id,
      date,
      topic,
      description,
      curriculumUnit,
      studentAsignado,
    );
    this.getLessons().push(newLesson);
  }

  getLessonsById(id) {
    const lesson = this.getLessons().find((l) => l.getId() === id);
    return lesson;
  }

  getLessonIndexById(id) {
    const lessonIndex = this.getLessons().findIndex((l) => l.getId() === id);
    return lessonIndex;
  }

  editLessonByIndex(
    index,
    topic,
    description,
    curriculumUnit,
    studentAsignado,
  ) {
    this.getLessons()[index].editLesson(
      topic,
      description,
      curriculumUnit,
      studentAsignado,
    );
  }

  deleteLesson(lesson) {
    this.setLessons(lesson.deleteLesson(this.getLessons()));
  }
}
export default Controller;
