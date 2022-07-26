//Inputs
const billInput = document.querySelector(".bill-input");
const numOfPeopleInput = document.querySelector(".num-of-ppl-input");
const customTip = document.querySelector(".input-tip-custom");
const tipButtons = document.querySelectorAll(".btn");

const resetButton = document.querySelector(".reset-btn");
const totalPrice = document.querySelector(".total-price");
const tipPerPerson = document.querySelector(".tip-per-person");

for (const button of tipButtons) {
  button.addEventListener("focus", () => {
    billInput.value;
    console.log(button);
  });
}

let selectedTip;
let billValue;
let numberOfPeople;

billInput.addEventListener("blur", () => {
  billValue = Number(billInput.value);
});

numOfPeopleInput.addEventListener("blur", () => {
  numberOfPeople = Number(numOfPeopleInput.value);
});

let calculateTip = () => {
  let tip = (billInput.value * selectedTip) / numOfPeople;
  return tip;
};

let calculateTotal = () => {
  return;
};
