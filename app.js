let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if (buttonText == "c") {
            screen.value = ""
            screenValue = screen.value;
        }
        else if (buttonText == "=") {
            screen.value = eval(screenValue);
            screenValue = screen.value;
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })

}

