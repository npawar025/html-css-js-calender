// // Get references to DOM elements
// const monthYearElement = document.getElementById("monthYear");
// const daysContainer = document.getElementById("daysContainer");
// // const monthSelect = document.getElementById("monthSelect");
// const monthSelect = document.getElementById("monthSelect");
// const yearSelect = document.getElementById("yearSelect");

// // Function to generate the days of the selected month
// function generateCalendarDays(year, month) {
//   const daysInMonth = new Date(year, month + 1, 0).getDate();
//   const firstDayOfWeek = new Date(year, month, 1).getDay();
//   const currentDate = new Date(); // Get the current date

//   // Clear the days container before generating new days
//   daysContainer.innerHTML = "";

//   // Display the month and year in the header
//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   monthYearElement.textContent = `${monthNames[month]} ${year}`;

//   // Generate empty cells for days before the first day of the month
//   for (let i = 0; i < firstDayOfWeek; i++) {
//     const emptyCell = document.createElement("span");
//     daysContainer.appendChild(emptyCell);
//   }

//   // Generate the days of the month
//   for (let day = 1; day <= daysInMonth; day++) {
//     const dayCell = document.createElement("span");
//     dayCell.textContent = day;
//     // Apply the "green" color style to the current date
//     if (
//       year === currentDate.getFullYear() &&
//       month === currentDate.getMonth() &&
//       day === currentDate.getDate()
//     ) {
//       dayCell.classList.add("current-date");
//     }
//     daysContainer.appendChild(dayCell);
//   }
//   return firstDayOfWeek;
// }

// // Function to update the calendar when the month selection changes
// function handleMonthChange() {
//   const selectedYear = currentDate.getFullYear();
//   const selectedMonth = parseInt(monthSelect.value);

//   generateCalendarDays(selectedYear, selectedMonth);
// }

// function handleYearChange() {
//   const selectedYear = parseInt(yearSelect.value);
//   const selectedMonth = parseInt(monthSelect.value);
//   generateCalendarDays(selectedYear, selectedMonth);
// }

// // Populate the dropdown with month options
// // const monthSelect = document.getElementById("monthSelect");
// // Populate the month dropdown with month options
// const currentDate = new Date();
// for (let month = 0; month < 12; month++) {
//   const option = document.createElement("option");
//   option.value = month;
//   option.textContent = new Date(
//     currentDate.getFullYear(),
//     month,
//     1
//   ).toLocaleDateString("en-US", { month: "long" });
//   monthSelect.appendChild(option);
// }

// // Populate the year dropdown with year options
// const currentYear = currentDate.getFullYear();
// for (let year = currentYear - 5; year <= currentYear + 5; year++) {
//   const option = document.createElement("option");
//   option.value = year;
//   option.textContent = year;
//   yearSelect.appendChild(option);
// }

// // Set the initial values of the dropdowns to the current month and year
// monthSelect.value = currentDate.getMonth();
// yearSelect.value = currentYear;

// // Attach the handleMonthChange function to the change event of the month dropdown
// monthSelect.addEventListener("change", handleMonthChange);

// // Attach the handleYearChange function to the change event of the year dropdown
// yearSelect.addEventListener("change", handleYearChange);

// function handleDateClick(event) {
//   const selectedDate = event.target.textContent;
//   const selectedYear = parseInt(yearSelect.value);
//   const selectedMonth = parseInt(monthSelect.value);
//   const firstDayOfWeek = generateCalendarDays(selectedYear, selectedMonth); // Access firstDayOfWeek here

//   // Get the previously selected date element (if any) and remove the "current-date" class
//   const previousSelectedDateElement =
//     daysContainer.querySelector(".current-date");
//   if (previousSelectedDateElement) {
//     previousSelectedDateElement.classList.remove("current-date");
//   }

//   // Apply the "selected-date" style to the clicked date
//   const selectedDateElement = daysContainer.querySelector(
//     `span:nth-child(${parseInt(selectedDate) + firstDayOfWeek})`
//   );
//   selectedDateElement.classList.add("selected-date");
// }

// // Attach the handleDateClick function to the click event of the dates
// daysContainer.addEventListener("click", handleDateClick);

// // Generate the initial calendar
// generateCalendarDays(currentDate.getFullYear(), currentDate.getMonth());


// Get references to DOM elements
const monthYearElement = document.getElementById("monthYear");
const daysContainer = document.getElementById("daysContainer");
const monthSelect = document.getElementById("monthSelect");
const yearSelect = document.getElementById("yearSelect");

// Function to generate the days of the selected month
function generateCalendarDays(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const currentDate = new Date(); // Get the current date

  // Clear the days container before generating new days
  daysContainer.innerHTML = "";

  // Display the month and year in the header
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  monthYearElement.textContent = `${monthNames[month]} ${year}`;

  // Generate empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfWeek; i++) {
    const emptyCell = document.createElement("span");
    daysContainer.appendChild(emptyCell);
  }

  // Generate the days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayCell = document.createElement("span");
    dayCell.textContent = day;
    // Apply the "green" color style to the current date
    if (
      year === currentDate.getFullYear() &&
      month === currentDate.getMonth() &&
      day === currentDate.getDate()
    ) {
      dayCell.classList.add("current-date");
    }
    daysContainer.appendChild(dayCell);
  }
  return firstDayOfWeek;
}

// Function to update the calendar when the month selection changes
function handleMonthChange() {
  const selectedYear = currentDate.getFullYear();
  const selectedMonth = parseInt(monthSelect.value);

  generateCalendarDays(selectedYear, selectedMonth);
}

function handleYearChange() {
  const selectedYear = parseInt(yearSelect.value);
  const selectedMonth = parseInt(monthSelect.value);
  generateCalendarDays(selectedYear, selectedMonth);
}

// Populate the dropdown with month options
// const monthSelect = document.getElementById("monthSelect");
// Populate the month dropdown with month options
const currentDate = new Date();
for (let month = 0; month < 12; month++) {
  const option = document.createElement("option");
  option.value = month;
  option.textContent = new Date(
    currentDate.getFullYear(),
    month,
    1
  ).toLocaleDateString("en-US", { month: "long" });
  monthSelect.appendChild(option);
}

// Populate the year dropdown with year options
const currentYear = currentDate.getFullYear();
for (let year = currentYear - 5; year <= currentYear + 5; year++) {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  yearSelect.appendChild(option);
}

// Set the initial values of the dropdowns to the current month and year
monthSelect.value = currentDate.getMonth();
yearSelect.value = currentYear;

// Attach the handleMonthChange function to the change event of the month dropdown
monthSelect.addEventListener("change", handleMonthChange);

// Attach the handleYearChange function to the change event of the year dropdown
yearSelect.addEventListener("change", handleYearChange);

// Function to handle the "GO" button click event
// Function to handle the "GO" button click event
// Function to handle the "GO" button click event
function handleGoButtonClick() {
  const dateInput = document.getElementById("date-input");
  const inputDate = parseInt(dateInput.value);

  // If the input is not a valid number or is not within the range of valid dates, do nothing
  if (isNaN(inputDate) || inputDate < 1 || inputDate > 31) {
    return;
  }

  // Find all the day cells in the calendar
  const dayCells = daysContainer.querySelectorAll("span");

  // Get the current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Iterate through each day cell to find the one with the inputted date
  for (const dayCell of dayCells) {
    const cellDate = parseInt(dayCell.textContent);
    if (cellDate === inputDate) {
      // Toggle the background color of the cell between green and white
      dayCell.classList.toggle("selected-date");
    } else {
      // Ensure that all other cells do not have the "selected-date" class
      dayCell.classList.remove("selected-date");
    }

    // Remove the green background color from the current date cell
    if (
      cellDate === currentDate.getDate() &&
      currentYear === currentDate.getFullYear() &&
      currentMonth === currentDate.getMonth()
    ) {
      dayCell.classList.remove("current-date");
    }
  }

  // Clear the input box after processing the input
  dateInput.value = "";
}

// Get reference to the "GO" button
const goButton = document.getElementById("goto-btn");

// Attach the handleGoButtonClick function to the click event of the "GO" button
goButton.addEventListener("click", handleGoButtonClick);

generateCalendarDays(currentDate.getFullYear(), currentDate.getMonth());
