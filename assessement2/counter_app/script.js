let counter = document.getElementById("counter")
let count = 0

// function for increment by 1 
function incerment() {
    count += 1
    counter.innerHTML = count
}

// function for decrement by 1 
function decrement() {
    if (count > 0) {
        count -= 1
        counter.innerHTML = count
    }
}