// Importamos el módulo `Lesson` desde su archivo correspondiente
import Lesson from '../lesson';

describe('Lesson', () => {
  let lesson; // Instancia de la clase `Lesson`
  let lessonsArray; // Array que contendrá las lecciones

  // Esta función se ejecuta antes de cada prueba
  beforeEach(() => {
    lesson = new Lesson(
      1,
      "2024-11-11",
      "Matemáticas",
      "Descripción de la lección",
      "Unidad 1",
      "Juan Gomez"
    );
    lessonsArray = [lesson];
  });

  test("debe editar correctamente los detalles de la lección", () => {
    lesson.editLesson("Ciencias", "Nueva descripción", "Unidad 2", "Pedro Almodovar" );
    expect(lesson.getTopic()).toBe("Ciencias");
    expect(lesson.getDescription()).toBe("Nueva descripción");
    expect(lesson.getCurriculumUnit()).toBe("Unidad 2");
    expect(lesson.getStudentAsignado()).toBe("Pedro Almodovar");
  });

  test('debe eliminar correctamente una lección', () => {
    const updatedLessons = lesson.deleteLesson(lessonsArray);
    expect(updatedLessons).toHaveLength(0);
  });

  test("Función getDate", () => {
    expect(lesson.getDate()).toBe("2024-11-11");
  });

  test("Función getTopic", () => {
    expect(lesson.getTopic()).toBe("Matemáticas");
  });

  test( "Función getDescription", () => {
    expect(lesson.getDescription()).toBe("Descripción de la lección");
  });

  test("Función getCurriculumUnit", () => {
    expect(lesson.getCurriculumUnit()).toBe("Unidad 1");
  });

  test("Función getStudentAsignado", () => {
    expect(lesson.getStudentAsignado()).toBe(  "Juan Gomez");
  });

});
