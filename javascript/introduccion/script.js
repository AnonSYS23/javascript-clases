// Age Verification Form
const ageForm = document.getElementById("ageForm");
ageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const birthYearInput = event.target.querySelector("#birthYear");
  const birthYear = Number(birthYearInput.value);
  
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  
  if (age >= 18) {
    alert("You are old enough to continue");
    
    const beerForm = document.getElementById("beerFrom");
    beerForm.classList.remove("hidden");
  } else {
    alert("You are not old enough to continue");
    birthYearInput.focus();
  }
});

// Beer Form
const beerForm = document.getElementById("beerFrom");
beerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const beerChooseInput = event.target.querySelector("#beerChoose");
  const beerChoose = beerChooseInput.value.toLowerCase().trim();

  if (beerChoose === "yes" || beerChoose === "no") {
    alert("Your answer has been recorded");

    const drunkedForm = document.getElementById("drunkedForm");
    drunkedForm.classList.remove("hidden");
  } else {
    alert("Please enter a valid response (Yes or No)");
    beerChooseInput.focus();
  }
});

// Drunk Form
const drunkedForm = document.getElementById("drunkedForm");
drunkedForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const drunkChooseInput = event.target.querySelector("#drunkChoose");
  const drunkChoose = drunkChooseInput.value.toLowerCase().trim();

  if (drunkChoose === "yes" || drunkChoose === "no" || drunkChoose === "") {
    alert("Your answer has been recorded");

    const peopleForm = document.getElementById("peopleForm");
    peopleForm.classList.remove("hidden");
  } else {
    alert("Please enter a valid response (Yes or No)");
    drunkChooseInput.focus();
  }
});

// People Form
const peopleForm = document.getElementById("peopleForm");
peopleForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const peopleNumberInput = event.target.querySelector("#peopleNumber");
  const peopleNumber = Number(peopleNumberInput.value);

  if (peopleNumber >= 0) {
    alert("Your answer has been recorded");

    const sleepForm = document.getElementById("sleepForm");
    sleepForm.classList.remove("hidden");
  } else {
    alert("Please enter a valid number");
    peopleNumberInput.focus();
  }
});

// Sleep Form
const sleepForm = document.getElementById("sleepForm");
sleepForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const sleepHoursInput = event.target.querySelector("#sleepHours");
  const sleepHours = Number(sleepHoursInput.value);

  if (sleepHours >= 0 && sleepHours <= 24) {
    alert("Your form has been successfully completed");
  } else {
    alert("Please enter a valid time in hours (0-24)");
    sleepHoursInput.focus();
  }
});
