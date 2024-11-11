// Importamos el módulo Calendar desde su archivo correspondiente
const Calendar = require('../calendar'); // Usando `require` en lugar de `import`

// Definimos una constante DAY_TO_SELECT con el valor 5, representando el día que seleccionaremos en las pruebas
const DAY_TO_SELECT = 5; // Definimos el número mágico con un nombre claro

// Creamos un bloque de pruebas para la clase `Calendar`
describe('Calendar', () => {
  // Declaramos las variables que usaremos en las pruebas
  let calendarElement; // El contenedor donde se renderiza el calendario
  let selectedDateElement; // El contenedor que mostrará la fecha seleccionada
  let renderCallback; // Función simulada que se usa para verificar si se llama correctamente
  let calendar; // Instancia del objeto Calendar

  // Esta función se ejecuta antes de cada prueba
  beforeEach(() => {
    // Configuramos el DOM con los elementos que necesitamos para las pruebas
    document.body.innerHTML = `
      <div id="calendar-title"></div>   <!-- Título del calendario -->
      <div id="form-section"></div>     <!-- Sección del formulario para seleccionar un día -->
    `;

    // Inicializamos los elementos necesarios para la prueba
    calendarElement = document.createElement('div'); // Creamos un div para el calendario
    selectedDateElement = document.createElement('div'); // Creamos un div para la fecha seleccionada
    renderCallback = jest.fn(); // Creamos una función simulada para verificar si se llama

    // Creamos una nueva instancia de la clase Calendar con los elementos creados
    calendar = new Calendar(
      calendarElement,
      selectedDateElement,
      renderCallback
    );
  });

  // Primera prueba: verificar que el título del calendario se renderiza correctamente
  test('debe renderizar el título correctamente', () => {
    // Llamamos al método renderCalendar() que se encarga de mostrar el calendario
    calendar.renderCalendar();

    // Obtenemos el texto del título desde el DOM
    const title = document.getElementById('calendar-title').innerText;

    // Obtenemos el nombre del mes y el año actuales
    const monthName = new Date().toLocaleString('es-ES', { month: 'long' });
    const year = new Date().getFullYear();

    // Verificamos que el título mostrado coincida con el mes y año esperados
    expect(title).toBe(`${monthName} ${year}`);
  });

  // Segunda prueba: verificar que el número de días del mes se agrega correctamente
  test('debe agregar los días del mes al calendario', () => {
    // Llamamos al método renderCalendar() para generar los días en el calendario
    calendar.renderCalendar();

    // Buscamos todos los elementos con la clase 'calendar-day' (cada día del mes)
    const days = calendarElement.querySelectorAll('.calendar-day');

    // Calculamos el último día del mes actual
    const lastDay = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      0
    ).getDate();

    // Verificamos que el número de días generados coincida con el último día del mes
    expect(days.length).toBe(lastDay);
  });

  // Tercera prueba: verificar que un día específico se selecciona correctamente
  test('debe seleccionar un día correctamente', () => {
    // Llamamos al método selectDay() para seleccionar el día que hemos definido como DAY_TO_SELECT
    calendar.selectDay(DAY_TO_SELECT); // Usamos la constante en lugar de un número mágico

    // Buscamos el elemento del DOM que representa el día seleccionado
    const selectedDayElement = calendarElement.querySelector('.selected-day');

    // Comprobamos que el texto del día seleccionado sea igual al valor de DAY_TO_SELECT
    // Convertimos el texto a número para hacer la comparación de manera coherente
    expect(Number(selectedDayElement.innerText)).toBe(DAY_TO_SELECT); // Comparar como número

    // Verificamos que el texto de la fecha seleccionada coincida con el formato esperado
    expect(selectedDateElement.innerText).toBe(
      `Planes para el ${DAY_TO_SELECT} de ` + // Mostrar el día seleccionado
        new Date().toLocaleString('es-ES', { month: 'long' }) + // Obtener el nombre del mes actual
        ' de ' +
        new Date().getFullYear() // Obtener el año actual
    );

    // Verificamos que el callback de renderización se haya llamado con el día seleccionado
    expect(renderCallback).toHaveBeenCalledWith(DAY_TO_SELECT);
  });
});
