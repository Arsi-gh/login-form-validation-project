
let form = document.getElementById('form')
let userName = document.getElementById('userName_input')
let userPass = document.getElementById('password_input')
let modal = document.querySelector(".modal")
let userNameVal = document.querySelector(".userNameVal")
let userPassVal = document.querySelector(".userPassVal")

function onSubmit () {
    if (userName.value.length > 6 && userPass.value.length > 10){
        modal.style.display = "block"
        modal.innerHTML = "login completed"
        modal.style.backgroundColor = "#a5c983"
    } else {
        modal.style.display = "block"
        modal.innerHTML = "name and password must be at least 6 and 10 characters"
        modal.style.backgroundColor = "#fa0750"
    }
    setTimeout(function(){
       modal.style.display = "none" 
    }, 3000)
}
function userNamePress (){
    if (userName.value.length < 6){
        userNameVal.style.display = "block"
    } else {
        userNameVal.style.display = "none"
    }
}
function userPassPress (){  
    if (userPass.value.length < 6){
        userPassVal.style.display = "block"
    } else {
        userPassVal.style.display = "none"
    }
}