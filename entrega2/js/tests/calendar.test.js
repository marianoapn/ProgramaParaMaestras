import Calendar from "../calendar";
import expect from "expect";

describe("Calendar", () => {
  let calendarElement;
  let selectedDateElement;
  let renderCallbackMock;
  let calendar;

  beforeEach(() => {
    calendarElement = document.createElement("div");
    calendarElement.id = "calendar";

    selectedDateElement = document.createElement("p");
    selectedDateElement.id = "selected-date";

    renderCallbackMock = jest.fn();

    calendar = new Calendar(
      calendarElement,
      selectedDateElement,
      renderCallbackMock,
    );

    // Simular elementos adicionales del DOM
    const calendarTitleElement = document.createElement("div");
    calendarTitleElement.id = "calendar-title";
    document.body.appendChild(calendarTitleElement);

    const formSectionElement = document.createElement("div");
    formSectionElement.id = "form-section";
    formSectionElement.style.display = "none"; // Oculto por defecto
    document.body.appendChild(formSectionElement);
  });

  afterEach(() => {
    document.body.innerHTML = ""; // Limpia el DOM después de cada prueba
  });

  test("Debe inicializar correctamente calendarElement", () => {
    expect(calendar.getCalendarElement()).toBe(calendarElement);
  });

  test("Debe inicializar correctamente selectedDateElement", () => {
    expect(calendar.getSelectedDateElement()).toBe(selectedDateElement);
  });

  test("Debe inicializar correctamente selectedDay", () => {
    expect(calendar.getSelectedDay()).toBeNull();
  });

  test("Debe inicializar correctamente currentDate", () => {
    expect(calendar.getCurrentDate()).toBeInstanceOf(Date);
  });

  test("Debe calcular correctamente los días en un mes", () => {
    expect(calendar.getDaysInMonth(2023, 3)).toBe(30); // Abril
  });

  test("Debe actualizar el título del calendario correctamente", () => {
    calendar.updateCalendarTitle(2024, 10);
    const titleElement = document.getElementById("calendar-title");
    expect(titleElement.innerText).toBe("noviembre 2024");
  });

  test("Debe limpiar el calendario correctamente", () => {
    calendarElement.innerHTML = "<div>Día 1</div><div>Día 2</div>";
    calendar.clearCalendar();
    expect(calendarElement.innerHTML).toBe("");
  });

  test("Debe generar los elementos de los días correctamente", () => {
    const days = calendar.createDayElements(30, 10);
    // Espiar el método selectDay
    const spySelectDay = jest.spyOn(calendar, "selectDay");
    // Disparar el evento clic del primer día
    days[0].click();
    // Verificar que selectDay fue llamado con el día correcto
    expect(spySelectDay).toHaveBeenCalledWith(1);
  });

  test("Debe agregar los días al calendario", () => {
    const days = calendar.createDayElements(30, 10);
    calendar.appendDaysToCalendar(days);
    const appendedDays = calendarElement.querySelectorAll(".calendar-day");
    expect(appendedDays).toHaveLength(30);
  });

  test("Debe seleccionar un día y actualizar la UI", () => {
    calendar.selectDay(15);
    expect(calendar.getSelectedDay()).toBe(15);
  });

  test("Debe asignar correctamente el día seleccionado con setSelectedDay", () => {
    calendar.setSelectedDay(10);
    expect(calendar.getSelectedDay()).toBe(10);
  });

  test("Debe asignar correctamente el elemento del calendario", () => {
    const newCalendarElement = document.createElement("div");
    calendar.setCalendarElement(newCalendarElement);
    expect(calendar.getCalendarElement()).toBe(newCalendarElement);
  });

  test("Debe asignar correctamente la fecha actual", () => {
    const newDate = new Date(2025, 0, 1);
    calendar.setCurrentDate(newDate);
    expect(calendar.getCurrentDate()).toBe(newDate);
  });
});
