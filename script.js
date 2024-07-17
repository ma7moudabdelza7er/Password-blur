let email = document.getElementById("email");
let password = document.getElementById("password");
let background = document.querySelector(".background-image")


// password.addEventListener("input",function(e){
//     if(e.target.value.length >= 1 && e.target.value.length <= 3){
//     background.style.filter = "blur(18px)"
// }else if(e.target.value.length > 3 && e.target.value.length <= 5 ){
//     background.style.filter = "blur(12px)"

// }else if(e.target.value.length > 5 && e.target.value.length <= 8){
//     background.style.filter = "blur(6px)";
// }else if(e.target.value.length > 8){
//     background.style.filter = "blur(0px)"
// }
// })

// Another solve
password.addEventListener("input",function(e){
    input = e.target.value.length
    blurness = 20 - (input*2)
    background.style.filter = `blur(${blurness}px)`;
})