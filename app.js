//SELECTING INPUTS
const billInput = document.querySelector(".bill-input");
const numOfPeopleInput = document.querySelector(".num-of-ppl-input");
const customTip = document.querySelector(".input-tip-custom");
const tipButtons = document.querySelectorAll(".btn");

const resetButton = document.querySelector(".reset-btn");
const totalPrice = document.querySelector(".total-price");
const tipPerPerson = document.querySelector(".tip-per-person");

//CALCULATE VARIABLES
let selectedTip;
let billValue;
let numberOfPeople;
let calculatedTip;

//INSERTING VALUES
for (const button of tipButtons) {
  button.addEventListener("click", () => {
    billInput.value;
    selectedTip = Number(button.value.slice(0, button.value.length - 1));
  });
}

billInput.addEventListener("blur", () => {
  billValue = Number(billInput.value);
});

numOfPeopleInput.addEventListener("blur", () => {
  numberOfPeople = Number(numOfPeopleInput.value);
  calculateTip();
  calculateTotal();
});

//CALCULATION SECTION

let calculateTip = () => {
  let tip = (billInput.value * (selectedTip / 100)) / numberOfPeople;
  calculatedTip = Number(tip.toPrecision(3));
};

let calculateTotal = () => {
  let totalValue = billValue / numberOfPeople + calculatedTip;
  tipPerPerson.textContent = calculatedTip;
  totalPrice.textContent = totalValue;
};

let tipSelection = () => {};

resetButton.addEventListener("click", resetingInputs);

//Reset
let resetInputs = () => {
  billInput.value = "";
  numOfPeopleInput.value = "";
};
