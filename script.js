const result = document.querySelector(".box")
const nums = document.querySelectorAll(".num")

nums.forEach((i) =>
    i.addEventListener("click", function() {
        if (i.textContent == 0 && result.value == "0") return
        result.value += i.textContent
    })
)