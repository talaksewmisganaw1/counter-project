let count = 0;

const value = document.querySelector("#number");
const buttons = document.querySelectorAll(".button");

buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        const theClass = event.currentTarget.classList;

        if (theClass.contains("increase")) {
            count++;
        } else if (theClass.contains("decrease")) {
            count--;
        } else {
            count = 0;
        }

        value.textContent = count;

        if (count < 0) {
            value.style.color = "red";
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count == 0) {
            value.style.color = "black";
        }
    })
})