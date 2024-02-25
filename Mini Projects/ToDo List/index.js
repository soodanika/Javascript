let input = document.querySelector(".input");
let add = document.querySelector(".add-btn");
let list = document.querySelector(".list");

add.addEventListener("click", () => {

    if (input.value === "") alert("Please enter a task!")
    else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${input.value}<span>❌</span>`;

        list.appendChild(newEle);
        input.value = ""

        newEle.querySelector("span").addEventListener("click", () => {
            newEle.remove();
        })
    }

})
