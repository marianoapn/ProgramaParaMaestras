import Calendar from '../calendar';
import expect from 'expect';

describe('Calendar', () => {
  let calendarElement;
  let selectedDateElement;
  let renderCallbackMock;
  let calendar;

  beforeEach(() => {
    calendarElement = document.createElement('div');
    calendarElement.id = 'calendar';

    selectedDateElement = document.createElement('p');
    selectedDateElement.id = 'selected-date';

    renderCallbackMock = jest.fn();

    calendar = new Calendar(
      calendarElement,
      selectedDateElement,
      renderCallbackMock
    );

    // Simular elementos adicionales del DOM
    const calendarTitleElement = document.createElement('div');
    calendarTitleElement.id = 'calendar-title';
    document.body.appendChild(calendarTitleElement);

    const formSectionElement = document.createElement('div');
    formSectionElement.id = 'form-section';
    formSectionElement.style.display = 'none'; // Oculto por defecto
    document.body.appendChild(formSectionElement);
  });

  afterEach(() => {
    document.body.innerHTML = ''; // Limpia el DOM después de cada prueba
  });

  test('Debe inicializar correctamente calendarElement', () => {
    expect(calendar.getCalendarElement()).toBe(calendarElement);
  });

  test('Debe inicializar correctamente selectedDateElement', () => {
    expect(calendar.getSelectedDateElement()).toBe(selectedDateElement);
  });

  test('Debe inicializar correctamente selectedDay', () => {
    expect(calendar.getSelectedDay()).toBeNull();
  });

  test('Debe inicializar correctamente currentDate', () => {
    expect(calendar.getCurrentDate()).toBeInstanceOf(Date);
  });

  test('Debe calcular correctamente los días en un mes', () => {
    const year = 2023;
    const april = 3;
    const numberOfDaysApril = 30;
    expect(calendar.getDaysInMonth(year, april)).toBe(numberOfDaysApril); // Abril
  });

  test('Debe actualizar el título del calendario correctamente', () => {
    const year = 2024;
    const november = 10;
    calendar.updateCalendarTitle(year, november);
    const titleElement = document.getElementById('calendar-title');
    expect(titleElement.innerText).toBe('noviembre 2024');
  });

  test('Debe limpiar el calendario correctamente', () => {
    calendarElement.innerHTML = '<div>Día 1</div><div>Día 2</div>';
    calendar.clearCalendar();
    expect(calendarElement.innerHTML).toBe('');
  });

  test('Debe generar los elementos de los días correctamente', () => {
    const daysInMonth = 30;
    const month = 10;
    const days = calendar.createDayElements(daysInMonth, month);
    const spySelectDay = jest.spyOn(calendar, 'selectDay');
    days[0].click();
    expect(spySelectDay).toHaveBeenCalledWith(1);
  });

  test('Debe agregar los días al calendario', () => {
    const daysInMonth = 30;
    const month = 10;
    const days = calendar.createDayElements(daysInMonth, month);
    calendar.appendDaysToCalendar(days);
    const appendedDays = calendarElement.querySelectorAll('.calendar-day');
    expect(appendedDays).toHaveLength(daysInMonth);
  });

  test('Debe asignar correctamente el día seleccionado con setSelectedDay', () => {
    const selectedDay = 15;
    calendar.setSelectedDay(selectedDay);
    expect(calendar.getSelectedDay()).toBe(selectedDay);
  });

  test('Debe asignar correctamente el elemento del calendario', () => {
    const newCalendarElement = document.createElement('div');
    calendar.setCalendarElement(newCalendarElement);
    expect(calendar.getCalendarElement()).toBe(newCalendarElement);
  });

  test('Debe asignar correctamente la fecha actual', () => {
    const year = 2025;
    const newDate = new Date(year, 0, 1);
    calendar.setCurrentDate(newDate);
    expect(calendar.getCurrentDate()).toBe(newDate);
  });
});
