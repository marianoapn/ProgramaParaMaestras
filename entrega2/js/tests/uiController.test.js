import Controller from "../uiController";
import Lesson from "../lesson";

describe("Controller", () => {
  let controller;

  beforeEach(() => {
    controller = new Controller();
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  const mockUnits = [
    { id: 1, name: "Matemáticas" },
    { id: 2, name: "Ciencias" },
  ];

  const mockStudents = [
    { id: 1, name: "Juan Pérez" },
    { id: 2, name: "María López" },
  ];

  const mockLessons = [
    new Lesson(1, "2024-11-23", "Matemáticas", "Álgebra", "Unidad 1", [
      { id: 1, name: "Juan Pérez" },
    ]),
  ];

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("debe asignar y obtener correctamente la lista de estudiantes", () => {
    controller.setStudentsList(mockStudents);
    expect(controller.getStudentsList()).toEqual(mockStudents);
  });

  test("debe asignar y obtener correctamente las unidades curriculares", () => {
    controller.setCurriculumUnits(mockUnits);
    expect(controller.getCurriculumUnits()).toEqual(mockUnits);
  });

  test("debe asignar y obtener correctamente las lecciones", () => {
    controller.setLessons(mockLessons);
    expect(controller.getLessons()).toEqual(mockLessons);
  });

  test("debe crear una nueva lección y agregarla a la lista", () => {
    controller.setLessons([]);
    controller.createLesson(
      2,
      "2024-11-24",
      "Ciencias",
      "Biología",
      "Unidad 2",
      [{ id: 2, name: "María López" }],
    );
    const lessons = controller.getLessons();
    expect(lessons).toHaveLength(1);
    expect(lessons[0].getId()).toBe(2);
    expect(lessons[0].getTopic()).toBe("Ciencias");
  });

  test("debe obtener las lecciones por día", () => {
    controller.setLessons(mockLessons);
    const lessonsByDay = controller.getLessonsByDay("2024-11-23");
    expect(lessonsByDay).toHaveLength(1);
    expect(lessonsByDay[0].getDate()).toBe("2024-11-23");
  });

  test("debe encontrar una lección por ID", () => {
    controller.setLessons(mockLessons);
    const lesson = controller.getLessonsById(1);
    expect(lesson).toEqual(mockLessons[0]);
  });

  test("debe encontrar el índice de una lección por ID", () => {
    controller.setLessons(mockLessons);
    const index = controller.getLessonIndexById(1);
    expect(index).toBe(0);
  });

  test("debe editar una lección por índice", () => {
    controller.setLessons(mockLessons);
    controller.editLessonByIndex(
      0,
      "Historia",
      "Descripción editada",
      "Unidad 3",
      mockStudents,
    );

    const editedLesson = controller.getLessons()[0];
    expect(editedLesson.getTopic()).toBe("Historia");
    expect(editedLesson.getDescription()).toBe("Descripción editada");
    expect(editedLesson.getCurriculumUnit()).toBe("Unidad 3");
  });

  test("debe eliminar una lección", () => {
    controller.setLessons(mockLessons);
    controller.deleteLesson(mockLessons[0]);
    expect(controller.getLessons()).toHaveLength(0);
  });

  test("debe cargar unidades curriculares desde JSON correctamente", async () => {
    const mockUnits = [
      { id: 1, name: "Matemáticas" },
      { id: 2, name: "Ciencias" },
    ];
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockUnits),
      }),
    );
    await controller.loadUnits();
    expect(fetch).toHaveBeenCalledWith("data/curriculum_units.json");
    expect(controller.getCurriculumUnits()).toEqual(mockUnits);
  });

  test("debe manejar errores de fetch de unidades correctamente", async () => {
    global.fetch = jest.fn(() => Promise.reject("Fetch failed"));
    await expect(controller.loadUnits()).resolves.not.toThrow();
    expect(controller.getCurriculumUnits()).toEqual([]);
  });

  test("debe cargar correctamente los estudiantes desde el JSON", async () => {
    const mockStudents = [
      { id: 1, name: "Juan Pérez" },
      { id: 2, name: "María García" },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockStudents),
      }),
    );
    await controller.loadAlumnos();
    expect(controller.getStudentsList()).toEqual(mockStudents);
    expect(global.fetch).toHaveBeenCalledWith("data/students.json");
  });

  test("debe manejar errores de fetch de unidades correctamente", async () => {
    global.fetch = jest.fn(() => Promise.reject("Fetch failed"));
    await expect(controller.loadAlumnos()).resolves.not.toThrow();
    expect(controller.getStudentsList()).toEqual([]);
  });
});
