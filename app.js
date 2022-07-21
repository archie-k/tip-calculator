//Selecting Inputs
const billInput = document.querySelector(".bill-input");
const numOfPeopleInpit = document.querySelector(".num-of-ppl-input");
const customTip = document.querySelector(".input-tip-custom");
const resetButton = document.querySelector(".reset-btn");
const tipButtons = document.querySelectorAll(".btn");
const totalPrice = document.querySelector(".total-price");
const tipPerPerson = document.querySelector(".tip-per-person");

for (const button of tipButtons) {
  button.addEventListener("click", () => {
    console.log(button);
  });
}
