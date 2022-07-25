//Inputs
const billInput = document.querySelector(".bill-input");
const numOfPeopleInpit = document.querySelector(".num-of-ppl-input");
const customTip = document.querySelector(".input-tip-custom");
const tipButtons = document.querySelectorAll(".btn");

const resetButton = document.querySelector(".reset-btn");
const totalPrice = document.querySelector(".total-price");
const tipPerPerson = document.querySelector(".tip-per-person");

let selectedTip;
let billAmount = console.log(billAmount);

for (const button of tipButtons) {
  button.addEventListener("click", () => {
    billInput.value;
    console.log(button);
  });
}

let calculateTip = () => {};

let calculateTotal = () => {};
