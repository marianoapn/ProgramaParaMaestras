class Calendar {
  constructor(calendarElement, selectedDateElement, renderCallback) {
    this.calendarElement = calendarElement;
    this.selectedDateElement = selectedDateElement;
    this.renderCallback = renderCallback;
    this.selectedDay = null;
    this.currentDate = new Date();
  }

  // Método para generar el calendario
  renderCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0).getDate();

    this.calendarElement.innerHTML = ''; // Limpiar calendario actual

    document.getElementById('calendar-title').innerText =
      `${firstDay.toLocaleString('es-ES', { month: 'long' })} ${year}`;

    // Crear los días del mes en el calendario
    for (let i = 1; i <= lastDay; i++) {
      const dayElement = document.createElement('div');
      dayElement.classList.add('calendar-day');
      dayElement.innerText = i;
      dayElement.onclick = () => this.selectDay(i); // Asignar la selección del día

      if (this.selectedDay === i && this.currentDate.getMonth() === month) {
        dayElement.classList.add('selected-day');
      }

      this.calendarElement.appendChild(dayElement);
    }
  }


  // Método para seleccionar un día
  selectDay(day) {
    this.selectedDay = day;

    this.selectedDateElement.innerText = `Planes para el ${day} de ${this.currentDate.toLocaleString('es-ES', { month: 'long' })} de ${this.currentDate.getFullYear()}`;

    // Mostrar el formulario para agregar un nuevo plan
    document.getElementById('form-section').style.display = 'block'; // Mostrar formulario

    this.renderCallback(day); // Llamar al callback para cargar las lecciones del día
    this.renderCalendar(); // Renderizar el calendario para mostrar el día seleccionado
  }
}
// Exporta la clase Calendar para poder usarla en otro archivo
export default Calendar;

