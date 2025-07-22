/**** EVENTS ****/

/*** MOUSE EVENTS ***/

// Show message in alert — referencing a function
const btnAlert = document.querySelector("#btn-alert");
btnAlert.addEventListener("click", showAlert);

function showAlert() {
  alert("Hello, world!");
}

// Show message in console — anonymous function
const btnConsole = document.querySelector("#btn-console");
btnConsole.addEventListener("click", () => {
  console.log("Hello, console!");
});

// Toggle dark/light mode
const btnColorMode = document.querySelector("#btn-color-mode");
const body = document.body;

btnColorMode.addEventListener("click", toggleColorMode);

function toggleColorMode() {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    btnColorMode.innerText = "Switch to Light Mode";
  } else {
    btnColorMode.innerText = "Switch to Dark Mode";
  }
}

/*** FORM EVENTS ***/

// Show input value in alert
const alertForm = document.querySelector("#alert-form");
const alertInput = document.querySelector("#alert-input");

alertForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if(alertInput.value !== ""){
    alert(alertInput.value);
  }else{
    alert("Input is empty");
  }
  alertInput.focus();
  alertForm.reset();
});

// Show text below input
const belowInput = document.querySelector("#below-input");
const belowOutput = document.querySelector("#below-output");

belowInput.addEventListener("input", () => {
  belowOutput.innerText = belowInput.value;
});

// Add items to a list
const addItemForm = document.querySelector("#add-item-form");
const addItemInput = document.querySelector("#add-item-input");
const itemList = document.querySelector("#item-list");

addItemForm.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();

  if (addItemInput.value !== "") {
    const item = document.createElement("li");
    item.innerText = addItemInput.value;
    itemList.append(item);
  } else {
    alert("Input is empty");
  }

  addItemInput.focus();
  addItemForm.reset();
}
