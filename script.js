const result = document.getElementById("result")
const clr = document.getElementById("clr")
const del = document.getElementById("del")
const pow = document.getElementById("pow")
const sqrt = document.getElementById("sqrt")
const inverse = document.getElementById("inverse")
const change = document.getElementById("switch")
const nums = document.querySelectorAll(".num")
const modifiers = document.querySelectorAll(".action")

let decimal = false
let subtotal = 0

clr.addEventListener("click", () => {
    if (result.innerText == "") return

    result.innerText = ""
    decimal = false
})

del.addEventListener("click", () => {
    if (result.innerText == "" || result.innerText == "ERROR") return

    result.innerText = result.innerText.slice(0, -1)
})

pow.addEventListener("click", () => {
    if (result.innerText == "" || result.innerText == "ERROR") return
    if (result.innerText == ".") {
        result.innerText = "ERROR"
        return
    }

    subtotal = +(parseFloat(result.innerText) ** 2).toFixed(10)

    if (String(subtotal).length > 15 && !Number.isInteger(subtotal) || String(subtotal).length > 15) {
        result.innerText = "ERROR"
        return
    }

    result.innerText = subtotal
})

inverse.addEventListener("click", () => {
    if (result.innerText == "" || result.innerText == "ERROR") return
    if (result.innerText == "0" || result.innerText == ".") {
        result.innerText = "ERROR"
        return
    }

    subtotal = +(1 / parseFloat(result.innerText)).toFixed(10)

    if (String(subtotal).length > 15) {
        result.innerText = "ERROR"
        return
    }

    result.innerText = subtotal
})

sqrt.addEventListener("click", () => {
    if (result.innerText == "" || result.innerText == "ERROR") return
    if (result.innerText == ".") {
        result.innerText = "ERROR"
        return
    }

    subtotal = +Math.sqrt(parseFloat(result.innerText)).toFixed(10)

    if (String(subtotal).length > 15 && !Number.isInteger(subtotal) || String(subtotal).length > 15) {
        result.innerText = "ERROR"
        return
    }

    result.innerText = subtotal
})

change.addEventListener("click", () => {
    if (result.innerText == "" || result.innerText == "0" || result.innerText == "ERROR") return
    if (result.innerText == ".") {
        result.innerText = "ERROR"
        return
    }

    subtotal = parseFloat(result.innerText)
    if (Math.sign(subtotal) == 1) {
        subtotal = subtotal - subtotal * 2
    }
    else {
        subtotal = Math.abs(subtotal)
    }

    result.innerText = subtotal
})

nums.forEach((i) =>
    i.addEventListener("click", () => {
        if (result.innerText.length + 1 > 15) return
        if (result.innerText == "ERROR") return
        if (i.textContent == "0" && result.innerText == "0") return
        if (i.textContent == "." && decimal) return
        if (i.textContent == ".") decimal = true

        if (result.innerText == "0") {
            result.innerText = i.textContent
            return
        }

        result.innerText += i.textContent
    })
)