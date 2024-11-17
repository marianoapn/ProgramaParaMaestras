class Lesson {
  constructor(id, date, topic, description, curriculumUnit, studentAsignado) {
    this.id = id;
    this.date = date;
    this.topic = topic;
    this.description = description;
    this.curriculumUnit = curriculumUnit;
    this.studentAsignado = studentAsignado;
  }

  // Método para editar una lección
  editLesson(topic, description, curriculumUnit, studentAsignado) {
    this.topic = topic;
    this.description = description;
    this.curriculumUnit = curriculumUnit;
    this.studentAsignado = studentAsignado;
  }

  // Método para eliminar una lección
  deleteLesson(lessonsArray) {
      return lessonsArray.filter((lesson) => lesson.id !== this.id);
  }
}

// Exporta la clase Lesson para poder usarla en otro archivo
export default Lesson;
