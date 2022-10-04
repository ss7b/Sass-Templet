document.getElementById("year").innerHTML = new Date().getFullYear();

let form = document.getElementById("form")
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");

form.onsubmit = function(e){
    validName = false;
    validEmail = false;
    
    if(nameInput.value !== ""){
        validName = true;
    };
    if(emailInput.value !== ""){
        validName = true;
    }
    if(validName === false || validEmail === false){
        e.preventDefault();
    };
}

let toTop = document.getElementById("to-top");
console.log(toTop)
// 

window.onscroll = function(){
    if(scrollY >= 799){
        console.log(`${window.scrollY}`)
        toTop.style.opacity = 1;
    }else{
        toTop.style.opacity = 0;
    }
}
toTop.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior : "smooth",
    })
})