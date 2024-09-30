// Your birthdate: February 5th, 2003
const birthdate = moment("2003-02-05");

// Current date
const currentDate = moment();

// 1. Calculate the number of days between your birthdate and the current date
const daysSinceBirth = currentDate.diff(birthdate, "days");
document.getElementById(
  "days-since"
).innerText = `It has been ${daysSinceBirth} days since your birthdate.`;

// 2. Display the number of years, months, and days between your birthdate and current date
const birthdateCopy = moment("2003-02-05"); 
const years = currentDate.diff(birthdateCopy, "years");
birthdateCopy.add(years, "years");
const months = currentDate.diff(birthdateCopy, "months");
birthdateCopy.add(months, "months");
const days = currentDate.diff(birthdateCopy, "days");

document.getElementById(
  "years-months-days"
).innerText = `${years} years, ${months} months, and ${days} days since your birthdate.`;

// 3. Given two dates, display the date closest to the current date
const date1 = moment("2024-01-01");
const date2 = moment("2025-01-01");
const closestDate =
  currentDate.diff(date1) < currentDate.diff(date2) ? date1 : date2;

document.getElementById(
  "closest-date"
).innerText = `The closest date to today is ${closestDate.format(
  "MMMM Do YYYY"
)}`;

// 4. Given two dates, display whether the first date is before or after the second date
const isBefore = date1.isBefore(date2);
document.getElementById(
  "date-comparison"
).innerText = `The first date (${date1.format("MMMM Do YYYY")}) is ${
  isBefore ? "before" : "after"
} the second date (${date2.format("MMMM Do YYYY")}).`;

// 5. Display the current time in London
const londonTime = moment().tz("Europe/London").format("HH:mm:ss");
document.getElementById(
  "current-time-london"
).innerText = `The current time in London is ${londonTime}.`;
