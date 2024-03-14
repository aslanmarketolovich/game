const username = "Yura"
let betsum = ""

// let bets = document.querySelectorAll(".bet")


let bets = document.querySelectorAll(".bet")
bets.forEach((btn) => {
    btn.addEventListener("click", betSelector)
    btn.addEventListener("data-sum", btn.innerHTML)

})

function betSelector(){
    bets.forEach((btn) => {
        btn.classList.remove("selected")
    })

    let currentBtn = event.target
    currentBtn.classList.add("selected")
    
    betsum = currentBtn.getAttribute("data-sum")
    console.log(betsum);

}