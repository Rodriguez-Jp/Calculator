const numbers = document.querySelectorAll(".number");
const op = document.querySelectorAll(".op");
const equal = document.querySelector(".equal");
const clean = document.querySelector(".clean");
const del = document.querySelector(".delete");

const display = (char) => {};

// Display the values
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    display(number.value);
  });
});

op.forEach((op) => {
  op.addEventListener("click", () => {
    display(op.value);
  });
});
