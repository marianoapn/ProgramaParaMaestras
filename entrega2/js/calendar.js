class Calendar {
  #calendarElement;
  #selectedDateElement;
  #selectedDay;
  #currentDate;

  constructor(calendarElement, selectedDateElement, renderCallback) {
    this.setCalendarElement(calendarElement);
    this.setSelectedDateElement(selectedDateElement);
    this.renderCallback = renderCallback;
    this.setSelectedDay(null);
    this.setCurrentDate(new Date());
  }

  setCalendarElement(calendarElement) {
    this.#calendarElement = calendarElement;
  }

  setSelectedDateElement(selectedDateElement) {
    this.#selectedDateElement = selectedDateElement;
  }

  setSelectedDay(selectedDay) {
    this.#selectedDay = selectedDay;
  }

  setCurrentDate(currentDate) {
    this.#currentDate = currentDate;
  }

  setCalendarElement(calendarElement) {
    this.#calendarElement = calendarElement;
  }

  getSelectedDateElement() {
    return this.#selectedDateElement;
  }

  getSelectedDay() {
    return this.#selectedDay;
  }

  getCurrentDate() {
    return this.#currentDate;
  }

  getCalendarElement() {
    return this.#calendarElement;
  }
  // Método para generar el calendario
  renderCalendar() {
    const year = this.getCurrentDate().getFullYear();
    const month = this.getCurrentDate().getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0).getDate();

    this.getCalendarElement().innerHTML = ""; // Limpiar calendario actual

    document.getElementById("calendar-title").innerText =
      `${firstDay.toLocaleString("es-ES", { month: "long" })} ${year}`;

    // Crear los días del mes en el calendario
    for (let i = 1; i <= lastDay; i++) {
      const dayElement = document.createElement("div");
      dayElement.classList.add("calendar-day");
      dayElement.innerText = i;
      dayElement.onclick = () => this.selectDay(i); // Asignar la selección del día

      if (this.getSelectedDay() === i && this.getCurrentDate().getMonth() === month) {
        dayElement.classList.add("selected-day");
      }

      this.getCalendarElement().appendChild(dayElement);
    }
  }

  // Método para seleccionar un día
  selectDay(day) {
    this.setSelectedDay(day);

    this.getSelectedDateElement().innerText = `Planes para el ${day} de ${this.getCurrentDate().toLocaleString("es-ES", { month: "long" })} de ${this.getCurrentDate().getFullYear()}`;

    // Mostrar el formulario para agregar un nuevo plan
    document.getElementById("form-section").style.display = "block"; // Mostrar formulario

    this.renderCallback(day); // Llamar al callback para cargar las lecciones del día
    this.renderCalendar(); // Renderizar el calendario para mostrar el día seleccionado
  }
}
// Exporta la clase Calendar para poder usarla en otro archivo
export default Calendar;
