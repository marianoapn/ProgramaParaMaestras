import Lesson from "./lesson.js"; // Importa la clase Lesson desde lesson.js

class Controller {
  constructor() {
    this.lessons = [];
    this.curriculumUnits = [];
    this.studentList = [];
  }

  // Cargar unidades curriculares desde un archivo JSON
  loadUnits() {
    return fetch("data/curriculum_units.json")
      .then((response) => response.json())
      .then((data) => {
        this.curriculumUnits = data;
      });
  }

  getCurriculumUnits() {
    return this.curriculumUnits;
  }

  // Cargar alumnos desde un archivo JSON
  loadAlumnos() {
    return fetch("data/students.json")
      .then((response) => response.json())
      .then((data) => {
        this.studentList = data;
      });
  }

  getStudentsList() {
    return this.studentList;
  }

  getLessons() {
    return this.lessons;
  }

  getLessonsByDay(day) {
    return this.lessons.filter((lesson) => lesson.date === day);
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
    this.lessons.push(newLesson);
  }

  getLessonsById(id) {
    const lesson = this.lessons.find((l) => l.id === id);
    return lesson;
  }

  getLessonIndexById(id) {
    const lessonIndex = this.lessons.findIndex((l) => l.id === id);
    return lessonIndex;
  }

  editLessonByIndex(
    index,
    topic,
    description,
    curriculumUnit,
    studentAsignado,
  ) {
    this.lessons[index].editLesson(
      topic,
      description,
      curriculumUnit,
      studentAsignado,
    );
  }

  deleteLesson(lesson) {
    this.lessons = lesson.deleteLesson(this.lessons);
  }
}
export default Controller;
