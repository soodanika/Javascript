let input = document.querySelector(".input");
let reset = document.querySelector(".reset-btn");
let check = document.querySelector(".check-btn");
let result = document.querySelector(".result");

let randomNumber = Math.trunc(Math.random() * 10);

check.addEventListener("click", () => {
    if (Number(input.value) === randomNumber) {
        result.innerText = "Your guess is right!"
    } else if (Number(input.value) > randomNumber) {
        result.innerText = "Your guess is Higher than the actual number."
    } else {
        result.innerText = "Your guess is Less than the actual number."
    }
})

reset.addEventListener("click", () => {
    input.value = "";
    randomNumber = Math.trunc(Math.random() * 10);
    result.innerText = "";
})
