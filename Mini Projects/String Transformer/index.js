let input = document.querySelector(".input-box");
let lowerCase = document.querySelector(".lower .text")
let upperCase = document.querySelector(".upper .text")
let camelCase = document.querySelector(".camel .text")
let pascalCase = document.querySelector(".pascal .text")
let snakeCase = document.querySelector(".snake .text")
let kebabCase = document.querySelector(".kebab .text")
let trimCase = document.querySelector(".trim .text")


const capitalize = (str) => {
    let capital = str[0].toUpperCase() + str.slice(1,);
    return capital;
}

const toPascalCase = (str) => {
    const strArr = str.split(" ");
    let capitalizedArr = strArr.map((str) => capitalize(str));
    return capitalizedArr.join("")

}

const toCamelCase = (str) => {
    const strArr = str.split(" ");
    let pascalArr = strArr.map((str, i) => {
        if (i === 0) return str;
        return capitalize(str);
    })
    return pascalArr.join("");
}


lowerCase.innerText = input.value.toLowerCase();
upperCase.innerText = input.value.toUpperCase();
camelCase.innerText = toCamelCase(input.value);
pascalCase.innerText = toPascalCase(input.value);
snakeCase.innerText = input.value.split(" ").join("_");
kebabCase.innerText = input.value.split(" ").join("-");
trimCase.innerText = input.value.split(" ").join("").trim();

input.addEventListener("input", (e) => {
    lowerCase.innerText = e.target.value.toLowerCase();
    upperCase.innerText = e.target.value.toUpperCase();
    camelCase.innerText = toCamelCase(e.target.value);
    pascalCase.innerText = toPascalCase(e.target.value);
    snakeCase.innerText = e.target.value.split(" ").join("_");
    kebabCase.innerText = e.target.value.split(" ").join("-");
    trimCase.innerText = e.target.value.split(" ").join("").trim();
})


