console.log('Calendario 1.0')

const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

const numberOfDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

const calendarTable = document.createElement('table');

const headerRow = calendarTable.insertRow();
const headerCell = headerRow.insertCell();
headerCell.colSpan = 7;
headerCell.textContent = months[currentMonth] + ' ' + currentYear;
headerCell.style.textAlign = 'center';

const daysOfWeekRow = calendarTable.insertRow();
for (let i = 0; i < 7; i++) {
  const dayCell = daysOfWeekRow.insertCell();
  dayCell.textContent = daysOfWeek[i];
  dayCell.style.textAlign = 'center';
}

let date = 1;
for (let i = 0; i < 6; i++) {
  const weekRow = calendarTable.insertRow();
  for (let j = 0; j < 7; j++) {
    const dayCell = weekRow.insertCell();
    if (i === 0 && j < firstDayOfMonth.getDay()) {
      dayCell.textContent = '';
    } else if (date > numberOfDaysInMonth) {
      dayCell.textContent = '';
    } else {
      dayCell.textContent = date;
      dayCell.style.textAlign = 'center';
      date++;
    }
  }
}

const calendarContainer = document.getElementById('calendar-container');
calendarContainer.appendChild(calendarTable);