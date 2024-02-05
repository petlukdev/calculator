const result = document.querySelector(".box")
const clr = document.getElementById("clr")
const del = document.getElementById("del")
const nums = document.querySelectorAll(".num")
const modifiers = document.querySelectorAll(".modify")

clr.addEventListener("click", () => {
    if (result.value == "") return
    result.reset()
})

nums.forEach((i) =>
    i.addEventListener("click", () => {
        if (i.textContent == 0 && result.value == "0") return
        if (result.value == "0") {
            result.reset()
        } 
        else {
            result.value += i.textContent
        }
    })
)