let wordsList = ["Developer", "Student", "Teacher", "Coder"];

let text = document.querySelector("span");

let wordIndex = 0;
let charIndex = 0;
let reverse = false;

setInterval(() => {
    if (!reverse) {
        text.innerText = text.innerText + wordsList[wordIndex][charIndex];
        charIndex++;
    } else {
        text.innerText = wordsList[wordIndex].slice(0, text.innerText.length - 1);
    }
    if (charIndex >= wordsList[wordIndex].length) reverse = true;
    if (reverse && text.innerText.length === 0) {
        reverse = false;
        wordIndex++;
        charIndex = 0;
    }
    if (wordIndex === wordsList.length - 0) {
        wordIndex = 0
    }

}, 400)



