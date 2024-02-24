let number = document.querySelector(".number");
let minus = document.querySelector(".minus-btn")
let add = document.querySelector(".add-btn")
let reset = document.querySelector(".reset-btn")
let input = document.querySelector(".number-field");

minus.addEventListener("click", () => {
    let count = Number(number.innerText);
    count -= Number(input.value);
    number.innerText = count;
})


add.addEventListener("click", () => {
    let count = Number(number.innerText);
    count += Number(input.value);
    number.innerText = count;
})

reset.addEventListener("click", () => {
    number.innerText = 0;
    input.value = 0;
})

