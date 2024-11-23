// Importamos el módulo `Lesson` desde su archivo correspondiente
import Lesson from "../lesson";

describe("Lesson", () => {
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
    );
    lessonsArray = [lesson];
  });

  // Primera prueba: verificar que los detalles de la lección se editan correctamente
  test("debe editar correctamente los detalles de la lección", () => {
    lesson.editLesson("Ciencias", "Nueva descripción", "Unidad 2");
    expect(lesson.topic).toBe("Ciencias");
    expect(lesson.description).toBe("Nueva descripción");
    expect(lesson.curriculumUnit).toBe("Unidad 2");
  });

  // Segunda prueba: verificar que una lección se elimina correctamente cuando el usuario confirma
  test("debe eliminar correctamente una lección cuando se confirma", () => {
    global.confirm = jest.fn(() => true); // Simula la confirmación
    const updatedLessons = lesson.deleteLesson(lessonsArray);
    expect(updatedLessons).toHaveLength(0);
  });

  // Tercera prueba: verificar que la lección no se elimina cuando el usuario cancela la confirmación
  test("no debe eliminar la lección cuando se cancela la confirmación", () => {
    global.confirm = jest.fn(() => false); // Simula la cancelación
    const updatedLessons = lesson.deleteLesson(lessonsArray);
    expect(updatedLessons).toHaveLength(1);
    expect(updatedLessons[0]).toBe(lesson);
  });
});
