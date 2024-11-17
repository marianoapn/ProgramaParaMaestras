// Importamos el módulo `Lesson` desde su archivo correspondiente
import Lesson from "../lesson";

describe("Lesson", () => {
  let lesson; // Declaramos la variable `lesson`, que representará una instancia de la clase `Lesson`
  let lessonsArray; // Declaramos `lessonsArray`, que es un array que contendrá las lecciones

  // Esta función se ejecuta antes de cada prueba individual
  beforeEach(() => {
    // Creamos una nueva instancia de `Lesson` con valores iniciales
    lesson = new Lesson(
      1,
      "2024-11-11",
      "Matemáticas",
      "Descripción de la lección",
      "Unidad 1",
    );

    // Inicializamos el array `lessonsArray` con la lección creada
    lessonsArray = [lesson];
  });

  // Primera prueba: verificar que los detalles de la lección se editan correctamente
  test("debe editar correctamente los detalles de la lección", () => {
    // Llamamos al método `editLesson()` para cambiar el tema, descripción y unidad curricular
    lesson.editLesson("Ciencias", "Nueva descripción", "Unidad 2");

    // Verificamos que el tema haya sido actualizado correctamente
    expect(lesson.topic).toBe("Ciencias");
    // Verificamos que la descripción haya sido actualizada correctamente
    expect(lesson.description).toBe("Nueva descripción");
    // Verificamos que la unidad curricular haya sido actualizada correctamente
    expect(lesson.curriculumUnit).toBe("Unidad 2");
  });

  // Segunda prueba: verificar que una lección se elimina correctamente cuando el usuario confirma
  test("debe eliminar correctamente una lección cuando se confirma", () => {
    // Simulamos que el usuario confirma la eliminación
    global.confirm = jest.fn(() => true); // Usamos `jest.fn()` para simular el comportamiento de `confirm`

    // Llamamos al método `deleteLesson()`, que debería eliminar la lección del array
    const updatedLessons = lesson.deleteLesson(lessonsArray);

    // Verificamos que el array `updatedLessons` ahora está vacío (ya no tiene ninguna lección)
    expect(updatedLessons).toHaveLength(0);
  });

  // Tercera prueba: verificar que la lección no se elimina cuando el usuario cancela la confirmación
  test("no debe eliminar la lección cuando se cancela la confirmación", () => {
    // Simulamos que el usuario cancela la eliminación
    global.confirm = jest.fn(() => false); // Usamos `jest.fn()` para simular el comportamiento de `confirm`

    // Llamamos al método `deleteLesson()` y verificamos que la lección no se haya eliminado
    const updatedLessons = lesson.deleteLesson(lessonsArray);

    // Verificamos que el array `updatedLessons` tiene una longitud de 1 (la lección no fue eliminada)
    expect(updatedLessons).toHaveLength(1);
    // Verificamos que la lección en el array no ha sido eliminada y sigue siendo la misma
    expect(updatedLessons[0]).toBe(lesson);
  });
});
