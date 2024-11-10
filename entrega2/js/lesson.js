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
    editLesson(topic, description, curriculumUnit) {
        this.topic = topic;
        this.description = description;
        this.curriculumUnit = curriculumUnit;
        this.studentAsignado = studentAsignado;
    }

    // Método para eliminar una lección
    deleteLesson(lessonsArray) {
        if (confirm("¿Estás seguro de que quieres eliminar este plan de clase?")) {
            return lessonsArray.filter(lesson => lesson.id !== this.id);
        }
        // Retornar el mismo array si se cancela
        return lessonsArray;
    }
}
