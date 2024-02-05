const result = document.getElementById("result")
const clr = document.getElementById("clr")
const del = document.getElementById("del")
const nums = document.querySelectorAll(".num")
const modifiers = document.querySelectorAll(".action")

clr.addEventListener("click", () => {
    if (result.innerText == "") return
    result.innerText = ""
})

nums.forEach((i) =>
    i.addEventListener("click", () => {
        if (result.innerText.length + 1 > 15) return
        if (i.textContent == 0 && result.innerText == "0") return
        if (result.innerText == "0") {
            result.innerText = i.textContent
        } 
        else {
            result.innerText += i.textContent
        }
    })
)