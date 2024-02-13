const result = document.getElementById("result")
const clr = document.getElementById("clr")
const del = document.getElementById("del")
const pow = document.getElementById("pow")
const sqrt = document.getElementById("sqrt")
const inverse = document.getElementById("inverse")
const change = document.getElementById("switch")
const solve = document.getElementById("solve")
const nums = document.querySelectorAll(".num")
const modifiers = document.querySelectorAll(".action")

const media1 = window.matchMedia("(max-width: 420px)")
const media2 = window.matchMedia("(max-width: 300px)")

let decimal = false
let nextNumber = false
let subtotal = 0
let inputString = ""
let digitLimit = 15

function checkMedia1() {
    if (media1.matches) digitLimit = 11
    else digitLimit = 15
}

function checkMedia2() {
    if (media2.matches) digitLimit = 7
    else digitLimit = 11
}

checkMedia1()
checkMedia2()

media1.addEventListener("change", () => {
    checkMedia1()
})

media2.addEventListener("change", () => {
    checkMedia2()
})

clr.addEventListener("click", () => {
    if (result.innerText == "") return

    result.innerText = ""
    inputString = ""
    nextNumber = false
    decimal = false
})

del.addEventListener("click", () => {
    if (result.innerText == "" || result.innerText == "ERROR") return

    result.innerText = result.innerText.slice(0, -1)
})

pow.addEventListener("click", () => {
    if (result.innerText == "" || result.innerText == "ERROR") return
    if (result.innerText == "." || result.innerText == "-") {
        result.innerText = "ERROR"
        return
    }

    subtotal = +(parseFloat(result.innerText) ** 2).toFixed(10)

    if (String(subtotal).length > digitLimit && !Number.isInteger(subtotal) 
        || String(subtotal).length > digitLimit) {
        result.innerText = "ERROR"
        return
    }

    result.innerText = subtotal
})

inverse.addEventListener("click", () => {
    if (result.innerText == "" || result.innerText == "ERROR") return
    if (result.innerText == "0" || result.innerText == "." || result.innerText == "-") {
        result.innerText = "ERROR"
        return
    }

    subtotal = +(1 / parseFloat(result.innerText)).toFixed(10)

    if (String(subtotal).length > digitLimit) {
        result.innerText = "ERROR"
        return
    }

    result.innerText = subtotal
})

sqrt.addEventListener("click", () => {
    if (result.innerText == "" || result.innerText == "ERROR") return
    if (result.innerText == "." || result.innerText == "-") {
        result.innerText = "ERROR"
        return
    }

    subtotal = parseFloat(result.innerText)
    if (Math.sign(subtotal) == -1){
        result.innerText = "ERROR"
        return
    }
    
    subtotal = +Math.sqrt(subtotal).toFixed(10)

    if (String(subtotal).length > digitLimit && !Number.isInteger(subtotal) 
        || String(subtotal).length > digitLimit) {
        result.innerText = "ERROR"
        return
    }

    result.innerText = subtotal
})

change.addEventListener("click", () => {
    if (result.innerText == "" || result.innerText == "0" || result.innerText == "ERROR") return
    if (result.innerText == "." || result.innerText == "-") {
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
        if (nextNumber) {
            result.innerText = ""
            nextNumber = false
        }

        if (result.innerText.length + 1 > digitLimit) return
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

modifiers.forEach((i) => 
    i.addEventListener("click", () => {
        if (result.innerText == ".") {
            inputString += result.innerText + 0 + i.dataset.action
        }
        else if (result.innerText == "-") {
            inputString += result.innerText + 1 + i.dataset.action
        }
        else {
            inputString += result.innerText + i.dataset.action
        }

        nextNumber = true
    })
)

solve.addEventListener("click", () => {
    if (result.innerText == "ERROR") return
    
    if (result.innerText == ".") {
        inputString += result.innerText + 0
    }
    else if (result.innerText == "-") {
        inputString += result.innerText + 1
    }
    else {
        inputString += result.innerText
    }
    subtotal = eval(inputString)

    if (subtotal.toString().length + 1 > digitLimit) {
        result.innerText = "ERROR"
        return
    }

    result.innerText = subtotal

    inputString = ""
})