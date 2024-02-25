const darkMode = document.querySelector(".first-container input")
const darkModeContained = document.querySelector(".second-container input")
const secondHeading = document.querySelector(".heading-two")

darkMode.addEventListener("change", () => {
    if (darkMode.checked) {
        document.body.classList.add("dark-mode")
    } else {
        document.body.classList.remove("dark-mode")
    }
    darkModeContained.checked = darkMode.checked;
    if (darkModeContained.checked) {
        secondHeading.classList.add("dark-mode")
    } else {
        secondHeading.classList.remove("dark-mode")
    }
})

darkModeContained.addEventListener("change", () => {
    if (darkModeContained.checked) {
        secondHeading.classList.add("dark-mode")
    } else {
        secondHeading.classList.remove("dark-mode")
    }
})