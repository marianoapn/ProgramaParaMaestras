class Lesson {
  #id;
  #date;
  #topic;
  #description;
  #curriculumUnit;
  #studentAsignado

  constructor(id, date, topic, description, curriculumUnit, studentAsignado) {
    this.setId(id);
    this.setDate(date);
    this.setTopic(topic);
    this.setDescription(description);
    this.setCurriculumUnit(curriculumUnit);
    this.setStudentAsignado(studentAsignado);
  }

  getId() {
    return this.#id;
  }

  getDate() {
    return this.#date;
  }

  getTopic() {
    return this.#topic;
  }

  getDescription() {
    return this.#description;
  }

  getCurriculumUnit() {
    return this.#curriculumUnit;
  }

  getStudentAsignado() {
    return this.#studentAsignado;
  }

  setId(id) {
    this.#id = id;
  }

  setDate(date) {
    this.#date = date;
  }
  setTopic(topic) {
    this.#topic = topic;
  }

  setDescription(description) {
    this.#description = description;
  }

  setCurriculumUnit(curriculumUnit) {
    this.#curriculumUnit = curriculumUnit;
  }

  setStudentAsignado(studentAsignado) {
    this.#studentAsignado = studentAsignado;
  }


  // Método para editar una lección
  editLesson(topic, description, curriculumUnit, studentAsignado) {
    this.setTopic(topic);
    this.setDescription(description);
    this.setCurriculumUnit(curriculumUnit);
    this.setStudentAsignado(studentAsignado);
  }

  // Método para eliminar una lección
  deleteLesson(lessonsArray) {
    return lessonsArray.filter((lesson) => lesson.getId() !== this.getId());
  }
}

// Exporta la clase Lesson para poder usarla en otro archivo
export default Lesson;
