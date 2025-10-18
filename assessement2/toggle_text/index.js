let toggleText = document.querySelector("h1")
let toggleTextButton = document.querySelector('button')
let check = 0

toggleTextButton.addEventListener("click", () => {
    if (check == 0) {
        toggleText.innerHTML = "Hello!"
        toggleText.style.color = "wheat"
        check = 1
    } else {
        toggleText.innerHTML = "GoodBye!"
        toggleText.style.color = "wheat"
        check = 0
    }

})